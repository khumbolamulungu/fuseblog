import UpdatePost from "@/app/components/UpdatePost";
// import { prisma } from "@/utils/db";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }: { params: { id: string } }) {
    const post = await prisma.blogPost.findUnique({
        where: { id: params.id },
    });

    if (!post) return notFound();

    return <UpdatePost post={post} />;
}
