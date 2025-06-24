//"use client"
import Link from "next/link"
import { use } from "react";
export default async function articles({ params,searchParams }: 
    { params:Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en"|"fr"|"es" }>}) {
    const {articleId} = await params;
    const {lang="en"} = await searchParams; 
    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Lang in {lang}</p> 
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </div>
    )
}