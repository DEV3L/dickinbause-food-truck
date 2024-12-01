"use client";
import { Metadata } from "next";
import Head from "next/head";
import { useEffect } from "react";

export const DikinBausHead = ({ title = "DikinBaus" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export const metadata: Metadata = {
  title: "Dick'in Baus Food Truck",
  description:
    "Authentic German street food served from our food truck in the heart of Texas. Experience our signature currywurst, schnitzel, and other German classics.",
  openGraph: {
    title: "Dick'in Baus Food Truck",
    description:
      "Authentic German street food served from our food truck in the heart of Texas",
    url: "https://dickinbaus-food-truck.vercel.app",
    siteName: "Dick'in Baus Food Truck",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Dick'in Baus Food Truck",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dick'in Baus Food Truck",
    description:
      "Authentic German street food served from our food truck in the heart of Texas",
    images: ["/og-image.png"],
  },
};
