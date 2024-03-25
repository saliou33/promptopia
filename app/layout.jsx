import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "promptopia",
  description: "Share Ai Prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Navbar />
              {children}
            </main>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
