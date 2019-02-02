export function getUrlParameters(): Array<string> {
  const url = window.location.pathname.split('/');
  url.shift();
  return url;
}

export function sortDesc(a: { id: number }, b: { id: number }) {
  if (a.id > b.id) {
    return -1;
  }
  if (b.id > a.id) {
    return 1;
  }
  return 0;
}
