import { Mulish, Familjen_Grotesk, Pacifico } from "next/font/google";

export const headings = Familjen_Grotesk({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--headings",
});

export const textfont = Mulish({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--textfont",
});
export const logofont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-logo",
});
