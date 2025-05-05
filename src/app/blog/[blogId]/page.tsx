export default async function BlogDetailPage({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params;
    return (
        <div>
            <h1>Blog Post {blogId}</h1>
            <p>This is a blog post page.</p>
        </div>
    );
}