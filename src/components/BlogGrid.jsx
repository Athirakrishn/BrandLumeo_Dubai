import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/siteData';

// Swap .png/.jpg/.jpeg extensions for the pre-generated .webp version
function toWebp(src) {
  return src ? src.replace(/\.(png|jpe?g)$/i, '.webp') : src;
}

export default function BlogGrid({ limit }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <article key={post.title} className="blog-card">
          <div className="blog-card__img" style={{ position: 'relative' }}>
            <Image
              src={toWebp(post.image)}
              alt={post.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'cover' }}
            />
            <span className="blog-card__cat">{post.category}</span>
          </div>
          <div className="blog-card__body">
            <time dateTime={post.date}>{post.date}</time>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="blog-card__link">
              Read article <ArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}