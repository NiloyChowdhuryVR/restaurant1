import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

// Import your Prisma client
import  prisma  from '../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const { id: clerkUserId } = evt.data;
    const eventType = evt.type;

        if (!clerkUserId) {
      console.error('Webhook payload is missing the user ID.');
      return new Response('Error: User ID not found in webhook payload', { status: 400 });
    }

    switch (eventType) {
      case 'user.created':
        await prisma.user.create({
          data: {
            id: clerkUserId,
            email: evt.data.email_addresses[0].email_address,
            name: `${evt.data.first_name || ''} ${evt.data.last_name || ''}`.trim() || null,
          },
        });
        break;
      case 'user.updated':
        await prisma.user.update({
          where: { id: clerkUserId },
          data: {
            email: evt.data.email_addresses[0].email_address,
            name: `${evt.data.first_name || ''} ${evt.data.last_name || ''}`.trim() || null,
          },
        });
        break;
      case 'user.deleted':
        await prisma.user.delete({
          where: { id: clerkUserId },
        });
        break;
      default:
        console.warn(`Unhandled event type: ${eventType}`);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}