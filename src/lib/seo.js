export const siteUrl = 'https://quhacks.com';
export const homeTitle = 'QuHacks 2027 | Maryland’s Largest High School Hackathon';
export const homeDescription = 'Join QuHacks, Maryland’s largest high school hackathon. Free and student-run, welcoming middle and high school students of all experience levels in 2027.';

export function pageMetadata(title, description, path) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'QuHacks',
      title,
      description,
      url: path,
      images: [{ url: '/logo.png', alt: 'QuHacks duck logo' }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: ['/logo.png'],
    },
  };
}

// The event date and venue are not confirmed yet, so do not publish Event markup.
export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'QuHacks',
      url: `${siteUrl}/`,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'QuHacks',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      description: homeDescription,
      sameAs: ['https://www.instagram.com/quhacks/'],
    },
  ],
};
