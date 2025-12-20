import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' },
    { linkText: 'Middleware', href: '/middleware' },
    { linkText: 'Routing', href: '/routing' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="text-2xl font-bold text-gryffindor-gold magical-text">
                ⚡ Magical Timeline
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-gray-300 hover:text-gryffindor-gold transition-colors">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
