import Link from 'next/link';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full border-t bg-white/50 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
                <div className="flex items-center gap-x-8">
                    <Logo />
                    <div className="hidden items-center gap-x-6 text-sm text-muted-foreground md:flex">
                        <Link
                            href="#help"
                            className="transition hover:text-gray-600"
                        >
                            Help Center
                        </Link>
                        <Link
                            href="#blog"
                            className="transition hover:text-gray-600"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#contact"
                            className="transition hover:text-gray-600"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 text-sm">
                    <Button
                        variant="link"
                        size="sm"
                        className="text-muted-foreground"
                    >
                        Privacy Policy
                    </Button>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-muted-foreground"
                    >
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    );
};
