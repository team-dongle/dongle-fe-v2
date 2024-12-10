import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "동글",
  description: "우리의 동아리, 우리의 동글",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVICE_URL}`),
  openGraph: {
    images: [{ url: "./thumbnail.png", alt: "동글 썸네일" }],
    locale: "ko",
    url: `${process.env.NEXT_PUBLIC_SERVICE_URL}`,
    description: "우리의 동아리, 우리의 동글",
    type: "website",
    siteName: "동글",
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  style: "normal",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
