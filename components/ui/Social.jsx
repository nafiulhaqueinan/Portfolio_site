"use client";


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";  // Note the lowercase 'i' in LinkedIn
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




//import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedIn, FaYoutube, FaTwitter } from "react-icons/fa"


const socials = [
    {icon:<FaGithub/>, path:""},
    {icon:<FaLinkedIn/>, path:""},
    {icon:<FaYoutube/>, path:""},
    {icon:<FaTwitter/>, path:""},

]
const Social = ({containerStyles, iconStyles}) =>{
    return(
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;