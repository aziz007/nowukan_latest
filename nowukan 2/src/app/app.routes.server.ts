import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Prerender all stable marketing pages at build time (fast, cacheable).
  { path: '**', renderMode: RenderMode.Prerender },
];
