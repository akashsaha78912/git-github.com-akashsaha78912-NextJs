"use client"
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({error,reset,}:{
    error:Error,
    reset:()=>void;
}){const router=useRouter();
    const handlereset=()=>{
     startTransition(()=>{
        router.refresh();
        reset();
     })
    }
    return(
        <>
        <p>{error.message}</p>
        <button onClick={()=>handlereset()}>Try again</button>
        </>
    )
}