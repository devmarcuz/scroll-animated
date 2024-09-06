import React, { useRef } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/img/napoleon.webp"
        />
      </motion.div>
      <Container className="relative pb-7 z-10 h-[--hero-height] ">
        <motion.div
          className="flex flex-col items-start h-full justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Orignals. <br /> Only on Apple Tv+
          </h1>
          <Button className="mb-16 " size="lg">
            Stream Now
          </Button>
          <p>Watch on the 📺 app</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
