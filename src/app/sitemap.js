import { siteUrl } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return ['/', '/timeline', '/conduct', '/gallery'].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
