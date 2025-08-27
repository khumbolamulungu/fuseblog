import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
    const data = await prisma.BlogPost.findUnique({
        where: {
            id: id,
        }
    });

    if(!data){
        return notFound();
    }

    return data;
}

type Params = Promise<{id: string}>;

export default async function PostDetail({params}: {params: Params}){
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const { id } = await params;
    const data = await getData(id);
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            
            <div className="flex justify-between">
                <Link href="/" className={buttonVariants({variant: 'secondary'})}>Back to Posts</Link>

                {user && (
                <Link href={`/dashboard/edit/${data.id}`} className={buttonVariants()}>
                     Update Post
                </Link>

                )}

                
            </div>

            <div className="mt-6 mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-4 capitalize">{ data.title }</h1>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
                        </div>
                        <p className="font-medium">{ data.authorName }</p>
                    </div>
                    <time className="text-xs text-gray-500">
                        {
                            new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            }).format(data.createdAt)
                        }
                    </time>
                </div>
            </div>

            <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                <Image src={data.imageUrl} alt="post image" fill className="object-cover"/>
            </div>

            <Card>
                <CardContent>
                    <p className="text-gray-700">{ data.content }</p>
                </CardContent>
            </Card>
        </div>
    );
}