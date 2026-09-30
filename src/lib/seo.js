export const siteUrl = 'https://quhacks.com';
export const homeTitle = 'QuHacks 2027 | Maryland High School Hackathon';
export const homeDescription = 'QuHacks is a free, student-run Maryland hackathon for middle and high school students. Celebrate our 10th anniversary in 2027. All experience levels welcome.';

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
      description: 'QuHacks organizes a free, student-run hackathon in Maryland for middle and high school students.',
      sameAs: ['https://www.instagram.com/quhacks/'],
    },
  ],
};
