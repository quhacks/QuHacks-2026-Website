import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata(
  'Student Project Gallery | QuHacks',
  'Browse projects built by middle and high school students at past QuHacks hackathons in Maryland.',
  '/gallery',
);

export default function GalleryLayout({ children }) {
  return children;
}
