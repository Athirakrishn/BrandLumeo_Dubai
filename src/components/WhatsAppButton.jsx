import WhatsAppIcon from './WhatsAppIcon';
import { contact } from '@/data/siteData';

export default function WhatsAppButton() {
  const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    'Hi Brandlumeo, I would like to discuss a digital marketing strategy.',
  )}`;

  return (
    <a
      href={url}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
