const link = document.querySelector('#origamid');

if (link instanceof HTMLAnchorElement) {
  link.protocol = 'https';
}
