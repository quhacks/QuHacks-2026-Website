import './globals.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { homeTitle, homeDescription, siteUrl } from '../lib/seo';

export const metadata = {
  title: homeTitle,
  description: homeDescription,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="page" id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
