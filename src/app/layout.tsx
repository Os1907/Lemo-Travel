import type { Metadata } from "next";
import "./css/globals.css";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Lemo Travel",
  description:
    "Lemo Travel is a premier travel company specializing in unique and unforgettable trips to Dahab, Egypt. Our mission is to provide exceptional travel experiences that combine adventure, relaxation, and exploration. Whether you're looking to dive into the crystal-clear waters of the Red Sea, explore the vibrant local culture, or simply unwind by the golden beaches, Lemo Travel ensures a seamless journey filled with beautiful memories. Join us and make your next getaway to Dahab an adventure of a lifetime!",
  
  openGraph: {
    type: "website",
    url: "", 
    title: "Lemo Travel - Explore Dahab Like Never Before",
    description:
      "Lemo Travel is your gateway to experiencing the best of Dahab. From diving adventures to cultural explorations, we offer a variety of unforgettable trips tailored to your preferences.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Lemo Travel - Dahab Adventures",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Lemo Travel - Explore Dahab Like Never Before",
    description:
      "Lemo Travel is your gateway to experiencing the best of Dahab. From diving adventures to cultural explorations, we offer a variety of unforgettable trips tailored to your preferences.",
    images: [
      {
        url: "", 
        alt: "Lemo Travel - Dahab Adventures",
      },
    ],
  },
 
  alternates: {
    canonical: "", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
