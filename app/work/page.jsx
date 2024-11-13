"use client";

import { motion } from "framer-motion";
import React,{useState} from "react";

import{Swiper,SwiperSlide}from "swiper/react";
import "swiper/css";

import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

const project=[
    {
        num:"01",
        category:"Software Development, UI/UX Design, Open Source Contribution ",
        Description:"A VScode dark theme Name Angry-Dark Available on VScode Theme Store ",
        stack:[{name: "CSS"},{name: "JavaScript"}],
        image: "/assets/work/vs.jpg",
        live:" ",
        github:" " ,
    },

    {
        num:"02",
        category:"Software Development, C++ ",
        Description:"A Chess Engine with C++ with ELO 1200-1400 ",
        stack:[{name: "C++"},{name: "Arena Chess GUI"}],
        image: "/assets/work/1.jpg",
        live:" ",
        github:" " ,
    },

    {
        num:"01",
        category:"Software Development,Bash code",
        Description:"A Advance Github Profile with auto detection browser theme and change itself ! ",
        stack:[{name: "CSS"},{name: "JavaScript"},{name: "Bash"},{name: "Frontend"}],
        image: "/assets/work/github.jpg",
        live:" ",
        github:" " ,
    },

    {
        num:"04",
        category:"Software Development",
        Description:"A Music Recommendation System application Proposal  ",
        stack:[{name: "XP MODEL"},{name: "Spiral MODEL"}],
        image: "/assets/work/music.jpg",
        live:" ",
        github:" " ,
    },
];

const work = () =>{
    const[project,setProject]=useState(project[0]);
    return (
        
    )
}
export default work;