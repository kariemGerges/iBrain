import { Brain } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Brain className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        iBrain
                    </span>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/pages/gradeSelection', label: 'Grades' },
                        { href: '#', label: 'Parents' },
                        { href: '/pages/about', label: 'About' },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-3 py-1.5 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 font-semibold text-purple-600 hover:text-white hover:bg-purple-500/90 rounded-lg transition-all">
                        Sign In
                    </button>
                    <button className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-xl hover:scale-105 transition-all">
                        Start Free
                    </button>
                </div>
            </nav>
        </header>
    );
}
