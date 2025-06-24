import { Metadata } from "next";

type Props={
    params: { productId: string }
};
export const generatemetadata = async ({params}: Props): Promise<Metadata> => {
    const { productId } = params;
    return {
        title: `Product ${productId} details`,
        description: `This is the details page for product ${productId}`,
    };
}



export default async function productsdetails({params,}:{
    params: Promise< { productId: string }>
}

) { const  productId  = ( await params).productId;

    return (
        <h1>Product Details Page{productId}</h1>
    )
}



