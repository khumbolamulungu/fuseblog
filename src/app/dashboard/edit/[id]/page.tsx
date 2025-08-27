import UpdatePost from "@/app/components/UpdatePost";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

interface EditPostPageProps {
  params: { id: string }; // simple, no Promise typing confusion
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id }, // or Number(params.id) if your Prisma model uses Int
  });

  if (!post) return notFound();

  return <UpdatePost post={post} />;
}
