import { useOnClickOutside } from "hooks";
import { useState, useRef } from "react";
import MegaMenu from "./MegaMenu";

const menu = [
  {
    id: 1,
    name: "ایجاد پیش فاکتور",
    href: "/",
  },
  {
    id: 2,
    name: "ارسال لیست خرید",
    href: "/",
  },

  {
    id: 3,
    name: "همکاری با ما",
    href: "/",
  },
];

const Menu: React.FC<{ show: boolean }> = ({ show }): React.ReactElement => {
  const ref = useRef(null);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    document.body.classList.add("overflow-hidden");
    setShowMenu(!showMenu);
  };

  const handleClickOutside = () => {
    document.body.classList.remove("overflow-hidden");
    setShowMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="md:flex w-full flex-wrap items-center justify-between relative">
      <div
        className={`grow basis-[100%] items-center lg:!flex lg:basis-auto scrollbar h-[calc(100vh_-_100px)] md:h-auto  ${
          show ? "" : "hidden"
        } `}
      >
        <div ref={ref}>
          <div
            onClick={handleClick}
            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 cursor-pointer p-2"
          >
            دسته بندی
          </div>
          {showMenu && (
            <div className="md:absolute left-0 right-0 bg-white rounded-br-lg rounded-bl-lg overflow-hidden md:h-[calc(100vh_-_150px)]">
              <MegaMenu />
            </div>
          )}
        </div>
        <ul className="ml-auto flex flex-col lg:flex-row">
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
