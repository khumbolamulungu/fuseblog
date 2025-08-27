"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData){

    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if(!user){
        return redirect('/api/auth/register');
    }

    const title = formData.get('title');

    const content = formData.get('content');

    const url = formData.get('url');
        
    await prisma.BlogPost.create({
        data: {
                title: title as string,
                content: content as string,
                imageUrl: url as string,
                authorId: user.id,
                authorName: user.given_name as string,
                authorImage: user.picture as string,
            }
    });

    return redirect("/dashboard");
       
}


export async function handleUpdate(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const url = formData.get("url") as string;

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) redirect("/api/auth/register");

  await prisma.blogPost.update({
    where: { id },
    data: {
      title,
      content,
      imageUrl: url,
    },
  });

  redirect("/dashboard");
}

