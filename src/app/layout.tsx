import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SortingProvider } from "@/provider/sorting-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting Algoriithm Visualizer",
  description: "Visualize sorting algorithms, step by step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortingProvider>{children}</SortingProvider>
      </body>
    </html>
  );
}
