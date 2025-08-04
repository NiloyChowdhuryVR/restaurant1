import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('Missing CLERK_WEBHOOK_SIGNING_SECRET');
    return new Response('Missing webhook secret', { status: 500 });
  }

  let evt;

  try {
    evt = await verifyWebhook(req);
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Webhook verification failed', { status: 400 });
  }

  try {
    const { id: clerkUserId } = evt.data;
    const eventType = evt.type;

    if (!clerkUserId) {
      console.error('Webhook payload is missing the user ID.');
      return new Response('Error: User ID not found in webhook payload', { status: 400 });
    }

    switch (eventType) {
      case 'user.created': {
        const data = evt.data as any;
        console.log('New user created:', data.id);
        await prisma.user.create({
          data: {
            id: clerkUserId,
            email: data.email_addresses?.[0]?.email_address || '',
            name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || null,
          },
        });
        break;
      }

      case 'user.updated': {
        const data = evt.data as any;
        await prisma.user.update({
          where: { id: clerkUserId },
          data: {
            email: data.email_addresses?.[0]?.email_address || '',
            name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || null,
          },
        });
        break;
      }

      case 'user.deleted': {
        await prisma.user.delete({
          where: { id: clerkUserId },
        });
        break;
      }

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return new Response('Success', { status: 200 });
  } catch (err) {
    console.error('Database operation failed:', err);
    return new Response('Database error', { status: 500 });
  }
}
