'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/LOGO.svg'
import {Link} from "react-router-dom";

const navigation = [
    // { name: 'Documents & Report', href: '#' },
    // { name: 'Accreditation Process', href: '#' },
    // { name: 'Committee', href: '/committee' },
    // { name: 'Accredited Program', href: '#' },
    // { name: 'Gallery', href: '/gallery' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-gray-200/50">
            <nav aria-label="Global" className="mx-auto max-w-auto px-6 py-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                alt="Engineering Accreditation Council"
                                src={Logo}
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8">

                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-md font-medium !text-black hover:border-b-2 hover:border-b-green-400 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-md font-medium cursor-pointer transition-colors duration-200'>
                            Log in <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu with transitions */}
            <Transition show={mobileMenuOpen}>
                <Dialog onClose={setMobileMenuOpen} className="lg:hidden">
                    <TransitionChild
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
                    </TransitionChild>

                    <TransitionChild
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link to="/" className="-m-1.5 p-1.5">
                                    <img
                                        alt="Engineering Accreditation Council"
                                        src={Logo}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item, index) => (
                                            <TransitionChild
                                                key={item.name}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-4"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-4"
                                                style={{ transitionDelay: `${index * 50}ms` }}
                                            >
                                                <Link
                                                    to={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            </TransitionChild>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <TransitionChild
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-4"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-4"
                                            style={{ transitionDelay: `${navigation.length * 50}ms` }}
                                        >
                                            <button
                                                className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Log in
                                            </button>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </header>
    )
}