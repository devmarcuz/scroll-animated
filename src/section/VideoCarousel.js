import React, { useMemo, useRef, useState } from "react";
import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../components/movies";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useMotion, useWindowSize } from "react-use";
import Button from "../components/Button";

const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = windowYRatio * xScale * (16 / 9);
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.68], [0, 1]);
  const postersTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.68],
    [-20, 0]
  );
  const postersTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.68],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState("inactive");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] overflow-clip h-[300vh]"
      >
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 left-1/2 relative  -translate-x-1/2">
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXLeft }}
              className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="object-cover h-full w-full"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className=" relative shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="object-cover h-full w-full"
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 w-full flex justify-between p-5 text-white text-lg items-center"
              >
                <p>Best video title evver</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXRight }}
              className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="object-cover h-full w-full"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4, ease: "backInOut" }}
        className="space-y-3 -mt-[calc((100vh-(300px*(16/9)))/2)] "
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--duration:74s] [--carousel-offset:-32px]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCarousel;

const SmallVideoCarousel = ({ movies }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3  animate-carousel-move relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div key={index} className="w-[23vw] shrink-0">
            <img
              className="w-full aspect-video h-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
