import dynamic from 'next/dynamic'

const PostPreview = dynamic(() => import('components/post-preview-en'), {
  ssr: false,
});

export default function MoreStories({ posts }) {

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
