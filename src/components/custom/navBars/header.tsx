"use client";
import React from 'react'
import ToggleTheme from '../toggleTheme/toggleTheme'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Logo from '../../../assets/images/logos/cerashatamlogo.png'
import Image from 'next/image';

const Header = () => {
    const router = useRouter();
    // const name = "Ceraशतम्";
    const name = "Cerashatam";
    return (
        <div className='flex justify-center items-center fixed top-0 w-full bg-background/75 backdrop-blur-sm shadow z-50'>
            <div className="flex justify-between items-center w-full max-w-[1440px] px-4 py-2">
                <div className="flex justify-start items-center gap-3">
                    <Link href='/' className="flex justify-center items-center rounded-full overflow-hidden">
                        <Image src={Logo} alt='' className='size-10 object-contain' />
                    </Link>
                    <Link href='/' className='text-2xl font-semibold tracking-tight'>{name}</Link>
                </div>
                <div className="hidden lg:flex justify-start items-center gap-3">
                    <Link href='/' className="cursor-pointer hover:text-primary duration-300 px-2" >Home</Link>
                    <Link href='/registration' className="cursor-pointer hover:text-primary duration-300 px-2" >Registration</Link>
                    <Link href='/accomodation' className="cursor-pointer hover:text-primary duration-300 px-2" >Accomodation</Link>
                    <Link href='/sponsorship' className="cursor-pointer hover:text-primary duration-300 px-2" >Sponsorship</Link>
                    <Link href='/department' className="cursor-pointer hover:text-primary duration-300 px-2" >Department</Link>
                    <Link href='/about' className="cursor-pointer hover:text-primary duration-300 px-2" >About Varanasi</Link>
                    <ToggleTheme />
                </div>
                <div className='flex lg:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size='icon'><HamburgerMenuIcon /></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetClose asChild>
                                    <Link href='/' className="flex justify-center items-center rounded-full overflow-hidden">
                                        <Image src={Logo} alt='' className='size-32 object-contain' />
                                    </Link>
                                </SheetClose>
                                <SheetTitle>
                                    <SheetClose asChild>
                                        <Link href='/' className='text-2xl font-semibold tracking-tight'>{name}</Link>
                                    </SheetClose>
                                </SheetTitle>
                                <SheetDescription>
                                    Celebrating 100 years of Ceramic Engineering IIT BHU
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-3 mt-5">
                                <SheetClose asChild>
                                    <Link href='/' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Home</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href='/registration' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Registration</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href='/accomodation' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Accomodation</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href='/sponsorship' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Sponsorship</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href='/department' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Department</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href='/about' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >About Varanasi</Link>
                                </SheetClose>
                                <ToggleTheme />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Header
