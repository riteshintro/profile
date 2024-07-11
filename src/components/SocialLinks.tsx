import { cn } from "@/lib/utils";
import { Instagram , Linkedin, Twitter, ExternalLink,X } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Instagram", link: "https://www.instagram.com/riteshintro", icon: <Instagram  /> },
    { name: "Twitter", link: "https://x.com/reactjs", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/riteshintro", icon: <Linkedin /> },
    { name: "External", link: "", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
