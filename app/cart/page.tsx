"use client"
import CartModal from "@/components/CartModal";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
    const user = useUser();
    const router = useRouter();

if(!user.user){
    router.push('/sign-in');
}

  return (
    <div>
      <CartModal />
      <h1>
        {user.user?.fullName || "Couldn't Fetch Name"}
      </h1>
    </div>
  );
};

export default page;
