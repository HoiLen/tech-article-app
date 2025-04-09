import "./global.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import ConvexClientProvider from "./ConvexClientProvider";

export default function RootLayout({
  pageName,
  children,
}: React.PropsWithChildren<{
  pageName: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ConvexClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header pageName={pageName} />
            <main className="flex-grow bg-[rgb(242,248,237)]">{children}</main>
            <Footer />
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
