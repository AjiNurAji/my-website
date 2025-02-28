import { Link } from "@tanstack/react-router";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

const Guest = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen h-full">
      <div className="flex-1/2 w-full md:min-h-screen h-full flex justify-center items-start md:items-center">
        <div className="text-center md:text-right px-10 space-y-3">
          <h1 className="text-4xl font-bold">
            I'am a Full Stack <br />
            Web Developer
          </h1>
          <p className="text-sm text-muted-foreground">
            I'am a Full Stack Web Developer with 1,5+ years of experience in
            building scalable and efficient web applications. I have a strong in
            Laravel, NodeJs, ReactJs, NextJs, React Native, and other
            technologies.
          </p>
          <div className="space-x-2">
            <Button asChild variant="secondary">
              <Link to="/projects">My work</Link>
            </Button>
            <Button variant="default" asChild>
              <a href="mailto:ajinuraji96@gmail.com">
                Hire me
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1/2 w-full md:min-h-screen h-full flex md:flex-row flex-col-reverse justify-start p-2 md:justify-start items-center gap-3 md:space-x-15">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 border border-border p-2 rounded-lg">
          <Button asChild variant="secondary" size="icon">
            <a
              href="https://github.com/ajinuraji"
              target="_blank"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="icon">
            <a
              href="https://linkedin.com/in/ajinuraji"
              target="_blank"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="icon">
            <a
              href="https://insragram.com/ajnrji_"
              target="_blank"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="space-y-3 text-center">
          <div className="h-40 w-40 rounded-full overflow-hidden">
            <img
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-lg">Aji Nur Aji</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
