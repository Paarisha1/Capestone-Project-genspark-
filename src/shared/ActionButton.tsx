import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage?: (value: SelectedPage) => void;
  href?: string;
  onClick?: () => void;
};

const ActionButton = ({ children, setSelectedPage, href, onClick }: Props) => {
  return href ? (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={href}
      onClick={() => {
        if (setSelectedPage) {
          setSelectedPage(SelectedPage.ContactUs);
        }
      }}
    >
      {children}
    </AnchorLink>
  ) : (
    <button
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
