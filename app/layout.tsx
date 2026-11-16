import type { Metadata } from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Atlas Crown Immigration | Best Visa & Immigration Consultants Chandigarh',
  description: 'Your Global Journey Starts Here. Expert Study Visa, Permanent Residency (PR), Work Permits, and Tourist Visas in Sector 32D, Chandigarh.',
  keywords: ['immigration consultants chandigarh', 'study visa consultants sector 32 chandigarh', 'canada pr consultants chandigarh', 'atlas crown immigration', 'australia visa consultants chandigarh'],
  openGraph: {
    title: 'Atlas Crown Immigration | Best Visa & Immigration Consultants Chandigarh',
    description: 'Expert Study Visa, PR, Work Permits, and Tourist Visas in Sector 32D, Chandigarh.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://atlascrownimmigration.in',
    siteName: 'Atlas Crown Immigration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Crown Immigration | Chandigarh',
    description: 'Expert Visa & Immigration Services in Sector 32D, Chandigarh.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Atlas Crown Immigration',
              'image': 'https://atlascrownimmigration.in/atlascrownimmigration.jpeg',
              '@id': 'https://atlascrownimmigration.in',
              'url': 'https://atlascrownimmigration.in',
              'telephone': '+91-9876543210',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '2nd Floor, SCO 361, Sector 32D, Sector 32',
                'addressLocality': 'Chandigarh',
                'postalCode': '160030',
                'addressCountry': 'IN'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 30.7128,
                'longitude': 76.7794
              },
              'openingHoursSpecification': {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                'opens': '10:00',
                'closes': '18:00'
              },
              'sameAs': [
                'https://www.facebook.com/profile.php?id=61592100354790',
                'https://www.instagram.com/atlas_crown_immigration'
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
