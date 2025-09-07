import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'IBrain - Math Learning for Kids',
    description:
        'Fun, interactive math games for grades K–5. Boost confidence and skills with iBrain!',
    keywords: [
        'math games',
        'kids learning',
        'K–5 math',
        'interactive education',
        'math practice',
        'fun learning',
        'educational games',
        'math skills',
        "children's education",
        'online math',
        'math tutoring',
        'learning platform',
        'math challenges',
        'STEM education',
        'math confidence',
        'math resources',
        'math activities',
        'math worksheets',
        'math quizzes',
    ],
    openGraph: {
        title: 'iBrain Math App',
        description: 'Empowering kids to love math through play.',
        url: 'https://yourdomain.com',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />
                {/* Main content grows to fill space */}
                <main className="flex-grow p-4">{children}</main>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
