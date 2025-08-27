import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function CreatePost(){
    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="uppercase">Create Post</CardTitle>
                <CardDescription>Create your post and share with the world</CardDescription>
            </CardHeader>

            <CardContent>
                <form action={handleSubmission} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input required name="title" type="text" placeholder="Enter Post Title Here" />
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Label>Content</Label>
                        <Textarea required name="content" placeholder="Enter Post Content Here"></Textarea>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Label>Image URL</Label>
                        <Input required name="url" type="url" placeholder="Image URL" />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <SubmitButton />
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}