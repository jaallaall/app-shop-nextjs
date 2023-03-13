import { useRef, useEffect, useState, forwardRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const ClientOnlyPortal = forwardRef<HTMLElement, Props>(
  ({ children, selector, open, onClose, className }, ref) => {
    const refElm = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      document.body.removeAttribute("style");
      if (open) {
        document.body.style.overflow = "hidden";
      }
      refElm.current = document.querySelector(selector);
      setMounted(true);
    }, [selector, open]);

    return mounted
      ? createPortal(
          open && (
            <>
              {/* <div
              key="backdrop"
              className="fixed top-0 bottom-0 left-0 right-0 bg-black/40"
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              onClick={onClose}
            /> */}
              <aside
                key="sidebar"
                // initial={{ opacity: 0, x: document.dir === "rtl" ? 100 : -100 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{
                //   opacity: 0,
                //   x: document.dir === "rtl" ? 100 : -100,
                //   transition: {
                //     duration: 0.2,
                //     ease: "easeInOut",
                //   },
                // }}
                role={"sidebar"}
                ref={ref}
                className={`${className} fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col scrollbar`}
              >
                {children}
              </aside>
            </>
          ),
          refElm.current as HTMLElement
        )
      : null;
  }
);

export default ClientOnlyPortal;
