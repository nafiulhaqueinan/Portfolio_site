import { Button } from "@/components/ui/button";
import{FiDownload} from "react-icons/fi";


// social alllink found here
import Social from "@/components/ui/Social"
import Photo from "@/components/ui/Photo";
import Stats from "@/components/Stats";

const Home = () =>{
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-x1">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m<br/> <span className="text-accent">Md. Nafiul Haque</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            As a dedicated CSE student by day and a skill enthusiast by night, 
            I am doing coding challenges and competitive programming. 
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
            <a
              href="https://raw.githubusercontent.com/nafiulhaqueinan/Portfolio_site/fa5a76eaae399ec63b14a8fc75a9bcdf80082634/public/Nafiul%20Haque.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            ><span>Download CV</span>
            <FiDownload className="text-xl" />
            </a>
            </Button>

              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles={"flex gap-6"}
                iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transiton-all duration-500"}/>
              </div>
            </div>
          </div>


          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>


        </div>
      </div>
      <Stats/>
    </section>
  );
};


export default Home;


