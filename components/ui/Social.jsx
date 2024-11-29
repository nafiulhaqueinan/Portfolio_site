"use client";

//import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"


const socials = [
    {icon:<FaGithub/>, path:"https://github.com/nafiulhaqueinan"},
    {icon:<FaLinkedinIn/>, path:"https://www.linkedin.com/in/nafiul-haque-634950210/"},
    {icon:<FaYoutube/>, path:"https://www.youtube.com/@semi_clone"},
    {icon:<FaTwitter/>, path:"https://x.com/InanNafiul"},

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