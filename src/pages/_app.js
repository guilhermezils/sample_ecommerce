import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";

import "../styles/globals.css";

// import { StateContext } from "../../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    // <StateContext>
    <div>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </StateContext> */}
    </div>
  );
}

export default MyApp;
