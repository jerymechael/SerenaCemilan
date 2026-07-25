"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const directions = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
  none: { y: 0, x: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  viewTriggered = true,
}: {
  children: ReactNode;
  direction?: keyof typeof directions;
  delay?: number;
  className?: string;
  /**
   * true (default): animate when scrolled into view — for static page
   * sections (Hero, About, etc).
   * false: animate immediately on mount — for content that appears from
   * user interaction (filters, search, tab switches) rather than page
   * scroll, where whileInView's IntersectionObserver may never re-fire
   * once its viewport condition has already been "used up" (once: true)
   * or simply doesn't cross the detection margin.
   */
  viewTriggered?: boolean;
}) {
  const offset = directions[direction];
  const motionProps = viewTriggered
    ? { whileInView: { opacity: 1, y: 0, x: 0 }, viewport: { once: true, margin: "-80px" } }
    : { animate: { opacity: 1, y: 0, x: 0 } };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  viewTriggered = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  /** See Reveal's viewTriggered doc — same idea, applied to the container. */
  viewTriggered?: boolean;
}) {
  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const motionProps = viewTriggered
    ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
    : { animate: "visible" };

  return (
    <motion.div initial="hidden" variants={variants} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}