import Image from 'next/image';
import { team } from '@/data/siteData';

// Swap .png/.jpg/.jpeg extensions for the pre-generated .webp version
function toWebp(src) {
  return src ? src.replace(/\.(png|jpe?g)$/i, '.webp') : src;
}

export default function Team({ intro }) {
  const defaultIntro =
    'Experienced leaders driving strategy, execution, and growth across Kerala and the GCC.';
  return (
    <section className="team section-muted">
      <div className="wrap">
        <div className="section-head section-head--center">
          <p className="label">Leadership</p>
          <h2>Our leadership team</h2>
          <p className="lead lead--center">{intro || defaultIntro}</p>
        </div>
        <div className="team__grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card__photo" style={{ position: 'relative' }}>
                <Image
                  src={toWebp(member.image)}
                  alt={`${member.name}, ${member.role} at Brandlumeo`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: member.objectPosition || 'center',
                  }}
                />
              </div>
              <div className="team-card__body">
                <span className="team-card__role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}