import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-screen w-full bg-red-500 flex justify-center items-center'>
        <SignIn/>
    </div>
  )
}