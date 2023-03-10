import { useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  expanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  expanded = false,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef<any>(null);

  useEffect(() => {
    if (expanded) {
      toggleAccordion();
    }
  }, []);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? "" : "rotate-180");
  }

  return (
    <div className="flex flex-col">
      <button
        className="w-full p-3 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <span>{title}</span>

        <span
          className={`${rotate} h-4 w-4 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
