import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "FriendZ - A social media Platform",
      description:
        "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
      tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/taqui-786/project-friendz",
    },
    {
      title: "itZmyLink- One Page many Links",
      description:
        "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/itZmyLink",
    },
    {
      title: "GitEstimate- Github estimate worth generator",
      description:
        "GitEstimate is a simple fun tool where user can generate their github estimate worth card just by entering their github username. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/GitEstimate",
    },
    {
      title: "Mixcn-ui- Reusable components for Nextjs",
      description:
        "This is Nextjs app with a Collection of Nextjs Components - (Currently under Devlelopment) ",
      tags: ["Nextjs", "Shadcnui", "Npx","Library"],
      link: "https://mixcn-ui.vercel.app",
    },
    {
      title: "CrouMaker - A Crousal Maker App",
      description:
        "Crousal Maker is a tool with in-built crousals templates edit and download it in any format.",
      tags: ["Nextjs", "jsPDF", "html2canvas", "Shadcn Ui"],
      link: "https://github.com/taqui-786/crousal-maker",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Experience
      </Badge>
      
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
        {/* <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper> */}
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base text-white">
            June 2022 - Nov 2022
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl text-white">
              Technobren Infotech Pvt Ltd, <span className="italic text-lg">Reactjs Trainee</span>
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs text-yellow-50">
                I am currently Studying Bachelor of Technology form VBSP University Jaunpur a Goverment University of Jaunpur. 
                The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
        
      </div>
      <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base text-white">
            Nov 2022 - Present
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl text-white">
            Technobren Infotech Pvt Ltd, <span className="italic text-lg">Reactjs Developer</span>
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs text-yellow-50">
                I am currently Studying Bachelor of Technology form VBSP University Jaunpur a Goverment University of Jaunpur. 
                The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
    </div>
  );
};

export default projectsPage;
