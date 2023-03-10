import { useMediaQuery } from "hooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "ui";
import { megaMenu } from "utils";

const MegaMenu: React.FC = (): React.ReactElement => {
  const [show, setShow] = useState<number[]>([1]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 768px)");

  const handleMouseDown = (id: number) => {
    const arrId = [];
    arrId.push(id);
    setShow(arrId);
  };

  return (
    <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)_250px] h-full ">
      {matches ? (
        <>
          <div className="scrollbar border-l bg-gray-200">
            {megaMenu.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block p-2"
                  onMouseEnter={() => handleMouseDown(item.id)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {megaMenu.map((item) => {
            return (
              show.includes(item.id) && (
                <>
                  <div className="md:grid md:grid-cols-3 gap-2 p-3 scrollbar">
                    {item.subMenu.map((subItem) => {
                      return (
                        <div key={subItem.id}>
                          <Link
                            href={subItem.href}
                            className="block text-[16px]"
                          >
                            {subItem.title}
                          </Link>
                          {subItem.sub.map((it, i) => (
                            <Link
                              href={it.href}
                              key={i}
                              className="pt-2 block "
                            >
                              {it.name}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2 scrollbar border-r pr-2">
                    <h4>برندها</h4>
                    {item.brands.map((it) => (
                      <Link
                        href={it.href}
                        key={it.id}
                        className="flex items-center p-1"
                      >
                        <Image
                          src={it.img}
                          alt={it.alt}
                          width="20"
                          height="20"
                          className="ml-1"
                        />
                        <span>{it.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )
            );
          })}
        </>
      ) : (
        megaMenu.map((item) => {
          return (
            <Accordion title={item.name} key={item.id}>
              <div className="p-3 scrollbar">
                {item.subMenu.map((subItem) => {
                  return (
                    <div key={subItem.id}>
                      <Link href={subItem.href} className="block text-[16px]">
                        {subItem.title}
                      </Link>
                      {subItem.sub.map((it, i) => (
                        <Link href={it.href} key={i} className="pt-2 block ">
                          {it.name}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </Accordion>
          );
        })
      )}
    </div>
  );
};

export default MegaMenu;
