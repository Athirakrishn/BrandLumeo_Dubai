import { team } from '@/data/siteData';

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
              <div className="team-card__photo">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Brandlumeo`}
                  loading="lazy"
                  style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
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