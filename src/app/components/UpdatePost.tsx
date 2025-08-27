import { handleUpdate } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function EditPost({ post }: { post: any }) {
    return (
        <Card className="max-w-lg mx-auto mb-8">
            <CardHeader>
                <CardTitle className="uppercase">Edit Post</CardTitle>
                <CardDescription>Update your post</CardDescription>
            </CardHeader>

            <CardContent>
                <form action={handleUpdate} className="flex flex-col gap-4">
                    <input type="hidden" name="id" value={post.id} />

                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input name="title" type="text" defaultValue={post.title} required />
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Label>Content</Label>
                        <Textarea name="content" defaultValue={post.content} required />
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Label>Image URL</Label>
                        <Input name="url" type="url" defaultValue={post.imageUrl} required />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <SubmitButton />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
