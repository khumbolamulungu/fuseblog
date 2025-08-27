type Params = Promise<{slug: string}>

export default async function BlogDetail({params}: {params: Params}){
    const {slug} = await params; 
    return (
        <div>
            <p>This is a dynamic route page {slug}</p>
        </div>
    );
}