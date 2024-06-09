'use client'
import Link from 'next/link';

export default function Header() {

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="container flex items-center justify-between h-16 px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-900">nfachwthree</span>
                </Link>
            </div>
        </header>
    );
}
