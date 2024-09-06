import React from "react";
import Container from "../components/Container";
import FadeIn from "../components/Fade-in";

const Usps = () => {
  return (
    <Container className="text-4xl z-10 relative font-bold text-white space-y-12 py-36  max-w-[692px] ">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};

export default Usps;
