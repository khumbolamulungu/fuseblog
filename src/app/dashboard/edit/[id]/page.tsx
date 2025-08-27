
import UpdatePost from "@/app/components/UpdatePost";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

interface EditPostPageProps {
  params: { id: string }; // 👈 keep it simple
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { id: Number(params.id) }, // or keep `params.id` if your ID is String/UUID
  });

  if (!post) return notFound();

  return <UpdatePost post={post} />;
}



