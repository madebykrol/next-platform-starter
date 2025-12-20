import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Magical Timeline',
        default: 'Magical Travel Timeline'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-gradient-to-br from-black via-neutral-900 to-hogwarts-blue">
                <div className="flex flex-col min-h-screen bg-noise relative">
                    {/* Christmas and magical starry background */}
                    <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
                        <div className="absolute top-10 left-10 text-4xl animate-pulse">⭐</div>
                        <div className="absolute top-20 right-20 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</div>
                        <div className="absolute top-40 left-1/4 text-2xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
                        <div className="absolute bottom-40 right-1/4 text-3xl animate-pulse" style={{animationDelay: '1.5s'}}>⚡</div>
                        <div className="absolute top-1/2 right-10 text-2xl animate-pulse" style={{animationDelay: '2s'}}>✨</div>
                    </div>
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
