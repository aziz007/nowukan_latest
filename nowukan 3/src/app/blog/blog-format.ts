/** '2026-10-08' -> '8 October 2026' (UK style, independent of the visitor's locale). */
export function formatPostDate(iso: string): string {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}
