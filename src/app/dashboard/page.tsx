// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { prisma } from "../utils/db";



async function getData(userId: string){
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();
  const data = await prisma.BlogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
        createdAt: 'desc',
    },
  });

  return data;
}


export default async function Dashboard(){
 
 const { getUser } = getKindeServerSession();

 const user = await getUser();

 const data = await getData(user.id);

//  if(!user){
//     return redirect("api/auth/register");
//  }

 return (
    <div>
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">Your Blog Articles</h1>

            <Link className={buttonVariants()} href="/dashboard/create">Create Post</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            { data.map((item) => (
                <PostCard data={item} key={item.id} />
            ))}
        </div>
    </div>
 );
}
    