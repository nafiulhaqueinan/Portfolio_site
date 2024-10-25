"use client";

import { 
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs 
} from "react-icons/fa";
import { 
    SiCplusplus, SiPython, SiTensorflow, SiScikitlearn, SiJava, SiMysql, SiCsharp, SiGit, SiIntellijidea, SiGithub, SiPycharm, SiVisualstudiocode, SiWindows, SiLinux, SiArchlinux 
} from "react-icons/si";
import { 
    DiBash, DiDocker 
} from "react-icons/di";
import { Description } from "@radix-ui/react-dialog";

const about={
    title:'About',
    Description:
    "Hello! I'm Nafiul Haque, a passionate and dedicated Computer Science and Engineering student at American International University Bangladesh (AIUB). With a strong foundation in data science, .NET, advanced web technology, and competitive programming, I continuously strive to expand my expertise. I’ve also completed professional courses in AI and Product Management, which help me approach projects with a balanced perspective of both innovation and practicality. I am currently building my portfolio to showcase my skills and projects as I work toward a future in the tech industry.",
    info:[
    {
        fieldName:"Name",
        fieldValue:"Nafiul Haque",
    },
    {
        fieldName:"Phone",
        fieldValue:"(+880) 1771 9575 00",
    },
    {
        fieldName:"Experience",
        fieldValue:"0 Years",
    },
    {
        fieldName:"Nationality",
        fieldValue:"Bangladeshi",
    },
    {
        fieldName:"Email",
        fieldValue:"nafiul9575@gmail.com",
    },
    {
        fieldName:"Freelance",
        fieldValue:"Available",
    },
    {
        fieldName:"Languages",
        fieldValue:"English,Bangla,Hindi",
    },
    ],
};
// experience Data:
const experience ={
    icon:"/assets/resume/badge.svg",
    title:"My experience",
    Description:
    "While I am currently a student at American International University Bangladesh (AIUB), I am actively building a strong foundation in Computer Science and Engineering through hands-on projects, coursework, and competitive programming. My focus includes Data Science, .NET, Advanced Web Technology, and AI, supported by courses from Google and personal projects that demonstrate my dedication to skill development. This section will soon showcase my professional experiences as I look forward to making an impact in the tech industry.",
    items:[
        {
            company:"Null",
            position:"Null",
            duration:"Null"
        },
    ],
};

const education ={
    icon:"/assets/resume/cap.svg",
    title:"My education",
    Description:
    "I am currently pursuing a Bachelor’s degree in Computer Science and Engineering at American International University Bangladesh (AIUB). My studies focus on key areas such as Data Science, .NET, and Advanced Web Technology, complemented by professional courses in AI and Product Management from Google.",
    items:[
        {
            institution:"American International University-Bangladesh (AIUB)",
            Degree:"undergraduate in computer science and Eng",
            duration:"2022-2025"
        },
        {
            institution:"Coursera-Google Career Certificates",
            Degree:"Project Management",
            duration:"2024"
        },
        {
            institution:"Coursera-Google Career Certificates",
            Degree:"Advance Data-Analytics",
            duration:"2023"
        },
        {
            institution:"Zero to Mastary",
            Degree:"blockchain-solidity",
            duration:"2024"
        },
        {
            institution:"Coursera-Google Career Certificates",
            Degree:"Digital Marketing & E-commerce",
            duration:"2024"
        },
        {
            institution:"Udemy Online Course",
            Degree:"Photoshop and Illustrator",
            duration:"2020"
        },
        {
            institution:"Dania University College-Dhaka",
            Degree:"Higher Secondary School Certificate",
            duration:"2017-2019"
        },
        {
            institution:"V.J. Govt. High School-Chuadanga",
            Degree:"Secondary School Certificate",
            duration:"2016-2017"
        },
    ],
};

const skills={
    title:"My skills",
    discription:"I possess a diverse skill set in Data Science, Web Development (.NET and Advanced Web Technologies), and AI, alongside strong problem-solving abilities honed through competitive programming. Proficient in programming languages like C++, Python, and Java, I am also familiar with tools such as Git, MySQL, and various IDEs.",
    skillList:[
        
        {
            icon:<SiCplusplus/>,
            name:'C++', 
        },
        {
            icon:<SiPython/> ,
            name:'Python', 
        },
        {
            icon:<SiTensorflow/>,
            name:'Tensorflow', 
        },
        {
            icon: <SiScikitlearn/>,
            name:'Scikitlearn', 
        },
        {
            icon: <SiJava/>,
            name:'Java', 
        },
        {
            icon: <SiMysql/>,
            name:'Mysql', 
        },
        {
            icon: <SiCsharp/>,
            name:'C#', 
        },
        {
            icon: <DiBash/>,
            name:'Bash', 
        },
        {
            icon:<FaHtml5/>,
            name:'Html 5',
        },
        {
            icon: <FaCss3/>,
            name:'Css', 
        },
        {
            icon:<FaReact/> ,
            name:'React', 
        },
        {
            icon: <FaJs/>,
            name:'JavaScript', 
        },
        {
            icon:<SiGithub/> ,
            name:'Github', 
        },
        {
            icon:<SiArchlinux/> ,
            name:'Arch linux', 
        },

    ],
};

const research={
    title:"My Research Paper",
    items:[
        {
            Topic:"Improtance of Research in Undergraduate Level",
            year:"2024",
            Domain:"Statistics",
            Supervised:"Dr.Ummey Aysha"
        },
        {
            Topic:"Revamping Cryptocurrency Systems for Improved Efficiency and Scalability",
            year:"2024",
            Domain:"Computer Science",
            Supervised:"Faruk Abdullha Al Shohan"
        },
    ],
};

import { Tabs, TabsContent,TabsList,TabsTrigger } from "@radix-ui/react-tabs";

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";

import { motion } from "framer-motion";

const Resume = () =>{
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[50px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="research">Research Paper</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

        </motion.div>
    );
};
export default Resume;