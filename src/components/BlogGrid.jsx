import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/siteData';

export default function BlogGrid({ limit }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <article key={post.title} className="blog-card">
          <div className="blog-card__img">
            <img src={post.image} alt={post.title} loading="lazy" />
            <span className="blog-card__cat">{post.category}</span>
          </div>
          <div className="blog-card__body">
            <time dateTime={post.date}>{post.date}</time>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href="/blog" className="blog-card__link">
              Read article <ArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}