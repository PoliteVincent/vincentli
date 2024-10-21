import { useAnimate } from "framer-motion";
import { MouseEvent } from "react";
const Experiences = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="flex flex-col items-start">
        <LinkBox
          company={"Langji Intelligent Technology Co., Ltd. "}
          title={"Software Engineer Intern"}
          time={"June 2024 - August 2024"}
          description={[
            "Collaborated with a team of 5 to develop the client portal login page...",
            "Engineered a secure SMS verification system...",
            "Implemented CAPTCHA verification prevent port abuse...",
            "Refactored custom hooks to resolve an unexpected re-render for optimization...",
          ]}
        />
        <LinkBox
          company={"UNC Department of Computer Science"}
          title={"Tutoring Lead"}
          time={"January 2024 - June 2024"}
          description={[
            "Led a team of 10 teaching assistants to provide dedicated tutoring sessions...",
            "Developed and implemented a new section on the course website...",
            "Held biweekly meetings with faculty to refine tutoring materials...",
          ]}
        />
        <LinkBox
          company={"UNC Department of Computer Science"}
          title={"Undergraduate Teaching Assistant"}
          time={"January 2023 - Present"}
          description={[
            "Mentored over 500 students, effectively conveying Python concepts to students...",
            "Organized the annual departmental Hackathon and conducted a Website Development workshop",
            "Collaborated with the Website Lead on developing course website using Git and Docker...",
            "Ensured best practices in version control and configure CI/CD files for automated code push checks...",
          ]}
        />
      </div>
    </div>
  );
};
export default Experiences;
type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: String[];
};
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({
  company,
  title,
  time,
  description,
}: {
  company: String;
  title: String;
  time: String;
  description: String[];
}) => {
  const [scope, animate] = useAnimate();

  const getSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };

    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };

    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };

    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToBottom,
      proximityToLeft,
      proximityToRight,
      proximityToTop,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };
  return (
    <a
      href={"#"}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative flex flex-col h-23 w-full place-content-center gap-20 p-10 sm:h-30 md:h-36"
    >
      <ul className="list-none">
        <li>
          <h3 className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold italic">
            {company}
          </h3>
        </li>
        <li className="grid grid-cols-2 w-full items-center">
          <p className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold">
            {title}
          </p>
          <p className="sm:text-md md:text-lg lg:text-xl xl:text-2xl self-center justify-self-end">
            {time}
          </p>
        </li>
      </ul>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        {description.map((text, key) => (
          <ul className="list-disc">
            <li>
              <p
                key={key}
                className="text-xs text-ellipsis overflow-hidden whitespace-nowrap sm:text-xs md:text-lg lg:text-xl xl:text-2xl "
              >
                {text}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </a>
  );
};
