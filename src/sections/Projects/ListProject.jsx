import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

const ListProject = ({ projectData }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="project-item w-screen h-screen py-16 md:pr-44 px-8">
      <div className="flex flex-col items-end w-full h-full">
        <div className="relative">
          <Image
            src={projectData.coverImg}
            width={isMobile ? "100%" : 800}
            height={600}
            alt={projectData.name}
          />
          <p className="md:text-[80px] text-[40px] text-[#3d4364] font-bold md:absolute relative md:-bottom-[16] md:-left-[30%]">
            {projectData.name}
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <p className=" text-main-gray text-base">Developer</p>
          <div className="w-10 h-[1px] bg-main-gray"></div>
        </div>
        <p className="text-lg font-medium text-main-gray italic">06/2022</p>
        <Link
          href={projectData.link}
          className="text-base hover:underline text-main-yellow mt-2"
          target="_blank"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ListProject;
