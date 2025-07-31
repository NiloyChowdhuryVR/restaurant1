"use client"
import CartModal from "@/components/CartModal";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import prisma from "../lib/prisma";

const page = () => {
    const user = useUser();
    const router = useRouter();

  const handleCheck = async ()=>{
    const dataa = await prisma.user.create({
      data:{
        name:"Niloy CHowhdury",
        id:"uwuwuw",
        email:"jhinga lala hu hu",
      }
    })
  }
    

if(!user.user){
    router.push('/sign-in');
}

  return (
    <div>
      <CartModal />
      <button onClick={handleCheck}>PRESS THIS</button>
      <h1>
        {user.user?.fullName || "Couldn't Fetch Name"}
      </h1>
    </div>
  );
};

export default page;
