"use client";

import { 
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,FaJava ,FaTerminal
} from "react-icons/fa";
import { 
    SiCplusplus, SiPython, SiTensorflow, SiScikitlearn, SiMysql, SiCsharp, SiGit, SiIntellijidea, SiGithub, SiPycharm, SiVisualstudiocode, SiWindows, SiLinux, SiArchlinux 
} from "react-icons/si";

import { Description } from "@radix-ui/react-dialog";

const about={
    title:"About",
    Description:
    "Hello! Im Nafiul Haque, a passionate and dedicated Computer Science and Engineering student at American International University Bangladesh (AIUB). With a strong foundation in data science, .NET, advanced web technology, and competitive programming, I continuously strive to expand my expertise. I’ve also completed professional courses in AI and Product Management, which help me approach projects with a balanced perspective of both innovation and practicality. I am currently building my portfolio to showcase my skills and projects as I work toward a future in the tech industry.",
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
            name:"C++", 
        },
        {
            icon:<SiPython/> ,
            name:"Python", 
        },
        {
            icon:<SiTensorflow/>,
            name:"Tensorflow", 
        },
        {
            icon: <SiScikitlearn/>,
            name:"Scikitlearn", 
        },
        {
            icon: <FaJava/>,
            name:"Java", 
        },
        {
            icon: <SiMysql/>,
            name:"Mysql", 
        },
        {
            icon: <SiCsharp/>,
            name:"C#", 
        },
        {
            icon: <FaTerminal/>,
            name:"Bash", 
        },
        {
            icon:<FaHtml5/>,
            name:"Html 5",
        },
        {
            icon: <FaCss3/>,
            name:"Css", 
        },
        {
            icon:<FaReact/> ,
            name:"React", 
        },
        {
            icon: <FaJs/>,
            name:"JavaScript", 
        },
        {
            icon:<SiGithub/> ,
            name:"Github", 
        },
        {
            icon:<SiArchlinux/> ,
            name:"Arch linux", 
        },

    ],
};

const research={
    title:"My Research Paper",
    discription:"Throughout my academic journey, I have engaged in impactful research projects that bridge theory with practical applications in technology and data science. My recent work includes studies on enhancing the scalability and efficiency of cryptocurrency systems.",
    items:[
        {
            Topic:"Improtance of Research in Undergraduate Level",
            year:"Year: 2024",
            Domain:"Domain: Statistics",
            Supervised:"Supervised: Dr.Ummey Aysha"
        },
        {
            Topic:"Revamping Cryptocurrency Systems for Improved Efficiency and Scalability",
            year:"Year: 2024",
            Domain:"Domain: Computer Science",
            Supervised:"Supervised: Faruk Abdullha Al Shohan"
        },
    ],
};

import { Tabs, TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () =>{
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="research">Research Paper</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.Description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.Description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dots */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                        </div>
                        </TabsContent>


                         {/* Skills */}
                         <TabsContent value="skills" className="w-full h-full">
                         <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {skills.discription}
                                </p>
                            </div>
                            <ul className="grid frid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {skills.skillList.map((skill,index) => {
                                    return <li key={index} >
                                         <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider> 
                                         </li>;
                                })}
                            </ul>
                         </div>
                        </TabsContent>


                         {/* Research */}
                         <TabsContent value="research" className="w-full">
                         <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{research.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {research.discription}
                                </p>
                                <ScrollArea className="h-[450px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {research.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                                    <span className="text-accent text-xl">{item.Topic}</span>
                                                    <span className="text-accent">{item.year}</span>
                                                    <h3 className="text-base max-w-[230px] min-h-[30px] text-center lg:text-left">{item.Domain}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dots */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.Supervised}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                        </div>
                        </TabsContent>


                         {/* About */}
                         <TabsContent value="about" className="w-full text-center xl:text-left">
                         <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item,index) =>{
                                    return(
                                        <li 
                                        key={index}
                                        className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-accent">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                         </div>
                        </TabsContent>
                     </div>
                </Tabs>
            </div>

        </motion.div>
    );
};
export default Resume;