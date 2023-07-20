import { useRouter } from "next/router";

import i18n from "../lib/i18n";
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
const { locale } = useRouter();
const formattedLocale = locale.split("-")[0];
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {i18n.intro.artikel[formattedLocale]}
      </h2>
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
