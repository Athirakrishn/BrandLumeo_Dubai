import { blogPosts } from '@/data/siteData';
import FinalCTA from '@/components/FinalCTA';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} — Brandlumeo Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="section-light" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--brand-green)', fontWeight: 500, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.25rem 0.75rem', 
              backgroundColor: 'var(--brand-green)', 
              color: 'white', 
              borderRadius: '999px', 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              marginBottom: '1rem' 
            }}>
              {post.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>{post.title}</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>{post.date}</p>
          </div>

          <div style={{ marginBottom: '3rem', borderRadius: '1rem', overflow: 'hidden', maxHeight: '400px' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }} />
          </div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: 'var(--text-main)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} />
        </div>
      </section>

      <FinalCTA
        title="Ready to apply this to your brand?"
        description="Book a free strategy call and let's start mapping out your next campaign."
      />
    </>
  );
}
