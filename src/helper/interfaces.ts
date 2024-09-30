import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface Idestination {
  name: string;
  image?: StaticImageData;
  info?: string;
}

export interface Ihotel {
  name: string;
  img?: StaticImageData;
  price: number;
  description?: string;
  location?: string;
  services?: Array<IconType | ReactNode >;
  images: Array<string> ;
}
