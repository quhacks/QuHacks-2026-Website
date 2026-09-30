import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata(
  'Code of Conduct | QuHacks',
  'Read the project rules and community expectations for students attending QuHacks, a free Maryland hackathon.',
  '/conduct',
);

export default function ConductLayout({ children }) {
  return children;
}
