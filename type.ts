import { ReactElement } from "react";

export interface Nav {
  id: number;
  href: string;
  title: string;
}

export interface MobileMenuProps {
  open: boolean;
  handleClick: () => void;
}

export interface Social {
  id: number;
  logo: ReactElement;
  href: string;
}

export interface techs {
  name: string;
  logo: string;
}

export interface services {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}

export interface featured {
  id: number;
  image: string;
  title: string;
  description: string;
  stack: string;
  link: string;
}

export interface docklink {
  title: string;
  icon: ReactElement;
  href: string;
}

export interface processtype {
  id: number;
  process: string;
  title: string;
  description: string;
}
