import Test from "@/components/test";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Login from "./login";
import Register from "./register";
import ForgotPwd from "./forgotPwd";
import RenamePwd from "./renamePwd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className="app">
        {/* <Test />
        <Login />
        <Register />
        <ForgotPwd />
        <RenamePwd /> */}
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
