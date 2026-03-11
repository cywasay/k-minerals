import localFont from "next/font/local";
import "./globals.css";

const metropolis = localFont({
  src: [
    {
      path: "../components/fonts/gotham-similar-fonts/gotham-similar-fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../components/fonts/gotham-similar-fonts/gotham-similar-fonts/metropolis/Metropolis-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../components/fonts/gotham-similar-fonts/gotham-similar-fonts/metropolis/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../components/fonts/gotham-similar-fonts/gotham-similar-fonts/metropolis/Metropolis-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../components/fonts/gotham-similar-fonts/gotham-similar-fonts/metropolis/Metropolis-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
});

export const metadata = {
  title: "Kohistan Minerals",
  description: "Kohistan Minerals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={metropolis.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
