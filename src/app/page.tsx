import Image from "next/image";
import Link from "next/link";
import { prisma } from "./utils/db";
import PostCard from "./components/PostCard";
import { Suspense } from "react";


async function getData(){
  const data = await prisma.BlogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });

  return data;
}



export default function Home() {

  return (
   <div className="py-6">
    <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <Suspense fallback={<p>Loading latest posts......</p>}>
        <StreamedPosts />
      </Suspense>
   </div>
  );
}


async function StreamedPosts(){

  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      { data.map((item) => (
        <PostCard data={item} key={item.id} />
      )) }
    </div>
  )
}
