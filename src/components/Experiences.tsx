import { useAnimate } from "framer-motion";
import { MouseEvent } from "react";
import { IconType } from "react-icons";

import { FaReact, FaGitAlt, FaNode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiDocker } from "react-icons/si";

const Experiences = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900 ">
      {/* <div className="flex flex-col items-start"> */}
      <div className="grid">
        <LinkBox
          type={"title"}
          Icon={SiTypescript}
          company={"Education:"}
          title={"None"}
          time={"None"}
          description={["Education:"]}
        />
      </div>
      <div className="grid">
        <LinkBox
          type={"content"}
          Icon={SiTypescript}
          company={"University of North Carolina at Chapel Hill"}
          title={"Computer Science & Statistics"}
          time={"Expected: May 2026"}
          description={["Go Heels!"]}
        />
      </div>

      <div className="grid">
        <LinkBox
          type={"title"}
          Icon={SiTypescript}
          company={"Experiences:"}
          title={"None"}
          time={"None"}
          description={["Experiences:"]}
        />
      </div>

      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <div className="col-span-3">
          <LinkBox
            type={"content"}
            Icon={SiTypescript}
            company={"Langji Intelligent Technology Co., Ltd. "}
            title={"Software Engineer Intern"}
            time={"June 2024 - August 2024"}
            description={[
              "Collaborated with a team of 5 to develop the client portal login page...",
              "Engineered a secure SMS verification system...",
              "Implemented CAPTCHA verification prevent port abuse...",
              "Refactored custom hooks for optimization...",
            ]}
          />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 divide-x divide-neutral-900">
            <LinkBox
              type={"logo"}
              Icon={FaReact}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
            <LinkBox
              type={"logo"}
              Icon={FaNode}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <div className="col-span-3">
          <LinkBox
            type={"content"}
            Icon={SiTypescript}
            company={"UNC Department of Computer Science"}
            title={"Tutoring Lead"}
            time={"January 2024 - June 2024"}
            description={[
              "Led a team of 10 TAs to provide tutoring sessions...",
              "Developed and implemented a new section on the course website...",
              "Held biweekly meetings with faculty to refine tutoring materials...",
            ]}
          />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 divide-x divide-neutral-900">
            <LinkBox
              type={"logo"}
              Icon={FaGitAlt}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
            <LinkBox
              type={"logo"}
              Icon={SiJavascript}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <div className="col-span-3">
          <LinkBox
            type={"content"}
            Icon={SiTypescript}
            company={"UNC Department of Computer Science"}
            title={"Undergraduate Teaching Assistant"}
            time={"January 2023 - Present"}
            description={[
              "Mentored over 500 students...",
              "Organized the annual Code Hackathon...",
              "Developing course website using Git and Docker...",
            ]}
          />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 divide-x divide-neutral-900">
            <LinkBox
              type={"logo"}
              Icon={SiPython}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
            <LinkBox
              type={"logo"}
              Icon={SiDocker}
              company={"null"}
              title={"null"}
              time={"null"}
              description={[""]}
            />
          </div>
        </div>
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
  type,
  Icon,
  company,
  title,
  time,
  description,
}: {
  type: "logo" | "title" | "content";
  Icon: IconType;
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

  switch (type) {
    case "title":
      return (
        <div
          onMouseEnter={(e) => {
            handleMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
          className="relative flex flex-col h-23 w-full place-content-center gap-20 p-10 sm:h-30 md:h-36"
        >
          <h3 className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold italic underline underline-offset-8">
            {company}
          </h3>

          <div
            ref={scope}
            style={{
              clipPath: BOTTOM_RIGHT_CLIP,
            }}
            className="absolute inset-0 bg-neutral-900 text-white flex flex-col h-23 w-full place-content-center"
          >
            <h3 className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold italic p-10 underline underline-offset-8">
              {company}
            </h3>
          </div>
        </div>
      );
    case "logo":
      return (
        <a
          href={"#"}
          onMouseEnter={(e) => {
            handleMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
          className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
        >
          <Icon className="text-xl sm:text-3xl lg:text-4xl" />

          <div
            ref={scope}
            style={{
              clipPath: BOTTOM_RIGHT_CLIP,
            }}
            className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
          >
            <Icon className="text-xl sm:text-3xl md:text-4xl" />
          </div>
        </a>
      );
    default:
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

          {description.length == 1 ? (
            <div
              ref={scope}
              style={{
                clipPath: BOTTOM_RIGHT_CLIP,
              }}
              className="absolute inset-0 bg-neutral-900 text-white flex flex-col h-23 w-full place-content-center"
            >
              <h3 className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold italic p-10 underline underline-offset-8">
                {company}
              </h3>
            </div>
          ) : (
            <div
              ref={scope}
              style={{
                clipPath: BOTTOM_RIGHT_CLIP,
              }}
              className="absolute inset-0 grid  bg-neutral-900 text-white"
            >
              {description.map((text, key) => (
                <ul className="list-disc ml-10">
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
          )}
        </a>
      );
  }
};
