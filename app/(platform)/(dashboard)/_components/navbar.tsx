import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { FormPopover } from '@/components/form/form-popover';

import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
            <MobileSidebar />
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <FormPopover align="start" side="bottom" sideOffset={18}>
                    <Button
                        variant="primary"
                        size="sm"
                        className="hidden h-auto rounded-sm bg-gradient-to-r from-fuchsia-600 to-pink-600 px-2 py-1.5 md:block"
                    >
                        Create
                    </Button>
                </FormPopover>
                <FormPopover>
                    <Button
                        variant="primary"
                        size="sm"
                        className="block rounded-sm md:hidden"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </FormPopover>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectPersonalUrl="/organization/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                        },
                    }}
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30,
                            },
                        },
                    }}
                />
            </div>
        </nav>
    );
};
