"use client"
import { useRouter } from "next/navigation"
export default function order(){
    const router=useRouter();
const handleclick=()=>{
   router.push("/");
}
    return (
        <>
                <h1>
                    Order Product
                    </h1>     
                    <button onClick={handleclick}>Place your oder</button>        
        </>
    )
}