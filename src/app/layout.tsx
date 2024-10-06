import ClientSplash from "../components/SplashScreenProvider";
import { ThemeProvider } from "../components/theme-provider";
import { ReactLenis } from "../lib/lenis";
import { cn } from "../lib/utils";
import type { Metadata, Viewport } from "next";
import {
  gilroyMedium,
  helveticaNowDisplayBold,
  helveticaNowDisplayExtraBold,
  helveticaNowDisplayExtraLight,
  helveticaNowDisplaylight,
  helveticaNowDisplayMedium,
  helveticaNowDisplayRegular,
  neuMachinaLight,
  neuMachinaRegular,
} from "./fonts/fonts";
import "./globals.css";
import PhoneChecker from "../components/PhoneChecker";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";

export const metadata: Metadata = {
  title: "BuddyCode",
  description: "Next Gen IT Company",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <ReactLenis root>
      <html lang="en">
        <head>
          <meta
            name="monetag"
            content="96dd0ed8a125cb6b936bb76b0ab3fe2f"
          ></meta>
        </head>
        <SessionProvider session={session}>
          <body
            suppressHydrationWarning
            className={cn(
              "relative h-full font-sans antialiased ",
              neuMachinaRegular.variable,
              neuMachinaLight.variable,
              helveticaNowDisplayBold.variable,
              helveticaNowDisplayExtraBold.variable,
              helveticaNowDisplayMedium.variable,
              helveticaNowDisplayRegular.variable,
              helveticaNowDisplaylight.variable,
              helveticaNowDisplayExtraLight.variable,
              gilroyMedium.variable
            )}
          >
            <ClientSplash>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                forcedTheme="dark"
              >
                <main className="relative flex flex-col min-h-screen">
                  {session?.user?.hasPhoneVerified ? <></> : <PhoneChecker />}
                  <div className="flex-grow flex-1">{children}</div>
                </main>
              </ThemeProvider>
            </ClientSplash>
          </body>
        </SessionProvider>
      </html>
    </ReactLenis>
  );
}
