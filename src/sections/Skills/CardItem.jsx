import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

const CardItem = ({ skillData }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="flex flex-col relative">
      <h3 className="text-2xl text-main-yellow  font-medium tracking-tighter-[1.25px] ml-2">
        {skillData.title}
      </h3>
      <div className="md:w-[350px] w-full h-fit border-card flex items-end justify-end">
        <div className="md:w-[345px] w-full h-fit mt-1 bg-background inside-card p-4 flex flex-wrap md:gap-4 gap-3 content-start">
          {skillData.data.map((item, index) => (
            <div className="flex flex-col items-center h-fit" key={index}>
              <Image
                className="md:rounded-xl rounded-lg"
                width={isMobile ? 40 : 70}
                height={isMobile ? 40 : 70}
                src={item.img}
                alt={item.title}
              />
              <p className="text-white md:text-lg text-sm mt-2 font-light">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
