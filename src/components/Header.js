import React from "react";
import { TiVendorApple } from "react-icons/ti";
import Container from "./Container";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
            <TiVendorApple className="apple-icon" />
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
