import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';

/** Every real page address (from app.routes.ts), so new pages/posts are picked up automatically. */
const realPaths = [...new Set(routes.map((r) => r.path).filter((p): p is string => p !== undefined && p !== '**'))];

export const serverRoutes: ServerRoute[] = [
  // Prerender all real pages at build time (fast, cacheable).
  ...realPaths.map((path) => ({ path, renderMode: RenderMode.Prerender as const })),
  // Anything else: render the "page not found" screen with a real 404 status.
  { path: '**', renderMode: RenderMode.Server, status: 404, headers: { 'X-Robots-Tag': 'noindex' } },
];
