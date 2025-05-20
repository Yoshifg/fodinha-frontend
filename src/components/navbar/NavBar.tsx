'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

export default function NavBar() {
    const pathname = usePathname() || '';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marcar que estamos no cliente
        setIsClient(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isSelected = (path: string) => pathname === path;

    const navItems = [
        { name: 'Sobre', href: '/about' },
        { name: 'Regras', href: '/rules' },
    ];

    const renderNavLinks = (isMobile: boolean, close?: () => void) => (
        <>
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    isNavItem
                    isSelected={isSelected(item.href)}
                    isMobile={isMobile}
                    href={item.href}
                    className="relative group"
                    onClick={() => close?.()}
                >
                    {item.name}
                    <div className="absolute bottom-0 left-0 bg-blue-900 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
            ))}
        </>
    );

    return (
        <Disclosure
            as="nav"
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${isClient && isScrolled
                ? 'bg-background/90 border-blue-900 py-2'
                : 'bg-background border-transparent py-4'
                } text-zinc-100`}
        >
            {({ open, close }) => (
                <>
                    <div className="relative flex w-full items-center">
                        {/* Mobile Menu Button */}
                        <div className="flex sticky left-1 md:hidden">
                            <DisclosureButton
                                className="p-2 rounded-md hover:bg-gray-700 hover:text-white"
                                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                            >
                                {open ? <X size={24} /> : <Menu size={24} />}
                            </DisclosureButton>
                        </div>

                        {/* Logo and Desktop Navigation */}
                        <div className="max-w-5xl mx-auto flex flex-1 p-3 sm:p-4 items-center justify-center md:justify-between">
                            <div className="flex flex-shrink-0">
                                <NavLink
                                    href="/"
                                    isBanner
                                    onClick={() => close()}
                                    className="text-2xl font-bold"
                                >
                                    Fodinha UEM
                                </NavLink>
                            </div>
                            <div className="hidden md:block md:space-x-5 lg:space-x-12">
                                {renderNavLinks(false)}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Panel */}
                    <DisclosurePanel
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-4"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            {renderNavLinks(true, close)}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}