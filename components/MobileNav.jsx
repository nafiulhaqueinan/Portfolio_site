"use client";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname}from "next/navigation";
import Link from "next/link";
import{CiMenuFries} from 'react-icons/ci'

const links =[
    {
        name : 'home',
        path : '/',

    },
    {
        name : 'services',
        path : '/',

    },
    {
        name : 'resume',
        path : '/',

    },
    {
        name : 'work',
        path : '/',

    },
    {
        name : 'contact',
        path : '/',

    },
 ] 


const MobileNav=()=>{
    const pathname=usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className=" text-[32px] text -accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            {/*logo*/}
            <div>logo</div>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav;







