import { error } from "console";
import { notFound } from "next/navigation";
function getRandom(count:number){
    return Math.floor(Math.random()*count)
}
export default  function reviewdetails({params,}:{
    params:  { productId: string,reviewId:string }
}

) {const random=getRandom(2);
    if(random==1){
        throw new Error("Error loading review")
    }
     const { productId,reviewId}  =  params;
if(parseInt(reviewId)>1000){
    notFound();
}
    return (

        <h1>Review {reviewId} for product {productId}</h1>
 
    )
}

