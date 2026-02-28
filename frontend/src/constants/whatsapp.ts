export const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=917578900242&text=I%20want%20New%20Reddyanna%20%20Id%20!!!!!!!!!!!!!!';

export function openWhatsApp(): void {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
}
