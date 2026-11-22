// Load the Google Ads site tag on the production domain.
if (location.hostname === 'www.armorbull.net' || location.hostname === 'armorbull.net') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'AW-17415411010');

  const googleTag = document.createElement('script');
  googleTag.async = true;
  googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17415411010';
  document.head.append(googleTag);
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}}));


// Report phone-link clicks while preserving the browser's native dialer behavior.
if (location.hostname === 'www.armorbull.net' || location.hostname === 'armorbull.net') {
  document.addEventListener('click', (event) => {
    const phoneLink = event.target.closest('a[href^="tel:"]');
    if (!phoneLink || event.defaultPrevented || typeof window.gtag !== 'function') return;

    window.gtag('event', 'conversion', {
      send_to: 'AW-17415411010/w0ciCMqAq70dEMKqqPBA'
    });
  });
}
