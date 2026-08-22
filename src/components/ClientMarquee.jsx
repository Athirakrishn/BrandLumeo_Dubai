import Image from 'next/image';
import { clientLogos } from '@/data/siteData';



export default function ClientMarquee() {
  const items = [...clientLogos, ...clientLogos];
  return (
    <section className="clients" aria-label="Trusted clients">
      <div className="wrap clients__head">
        <p>Trusted by teams who choose the best digital marketing agency in Dubai</p>
      </div>
      <div className="clients__marquee">
        <div className="clients__track">
          {items.map((client, i) => (
            <Image
              key={`${client.name}-${i}`}
              src={client.src}
              alt={`${client.name} logo`}
              className="clients__logo-img"
              width={140}
              height={56}
              style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}