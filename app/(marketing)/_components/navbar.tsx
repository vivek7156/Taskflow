import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    return (
        <div className="fixed top-0 z-50 w-full border-b bg-white/50 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                <Logo />
                <div className="flex items-center gap-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                    <Button
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-90"
                        asChild
                    >
                        <Link href="/sign-up">Get started</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
