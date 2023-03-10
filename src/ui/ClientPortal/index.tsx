import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  selector: string;
  open: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export default function ClientOnlyPortal({
  children,
  selector,
  open,
  onClose,
  className,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.removeAttribute("style");

    if (open) {
      document.body.style.overflow = "hidden";
    }
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector, open]);

  return mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
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
              />
              <motion.aside
                key="sidebar"
                initial={{ opacity: 0, x: document.dir === "rtl" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: document.dir === "rtl" ? 100 : -100,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                role={"sidebar"}
                className={className}
              >
                {children}
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        ref.current as HTMLElement
      )
    : null;
}
