import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/about', current: true },
    { name: 'Our Programs', href: '/holive-partnership', current: false },
    { name: 'Log In', href: '/login', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}
                            <Link href="/">
                            <div className="flex flex-shrink-0 items-center">
                                
                                <img
                                    className="block h-24 w-34 lg:hidden"
                                    src={'/assets/logo/logoh.png'}
                                    alt="logo"
                                />
                                <img
                                    className="hidden h-auto w-auto lg:block max-h-32 max-w-80"
                                    src={'/assets/logo/logoh.png'}
                                    alt="logo"
                                />
                            </div>
                            </Link>
                            {/* LINKS */}

                            <div className="hidden lg:block ml-auto mt-10">
                                <div className="flex space-x-6 justify-end">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                'px-3 py-4 text-lg font-normal text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        


                        {/* REGISTER DIALOG */}

                        


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
