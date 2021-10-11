import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// footer
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Tooltip from "@mui/material/Tooltip";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [navigationValue, setNavigationValue] = useState("");

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />

        <footer style={{position:"fixed",bottom:"0",width:"100%",marginTop:"100px"}}  >
         

          <div>
            <BottomNavigation
              sx={{ width: "100%" }}
              value={navigationValue}
              onChange={() => handleChange(e)}
              style={{
                background: "#f4f4f4",
              }}
            >
              <Link href="/">
                <Tooltip title="ホーム" arrow>
                  <BottomNavigationAction
                    label="ホーム"
                    value="Home"
                    icon={<HomeIcon />}
                  />
                </Tooltip>
              </Link>

              <Link href="/menu/alert">
                <Tooltip title="通知" arrow>
                  <BottomNavigationAction
                    label="お知らせ"
                    value="alert"
                    icon={<NotificationsActiveIcon />}
                  />
                </Tooltip>
              </Link>

              <Link href="/menu/pets">
                <Tooltip title="里親を募集する" arrow>
                  <BottomNavigationAction
                    label="里親を募集する"
                    value="pets"
                    icon={<PetsIcon />}
                  />
                </Tooltip>
              </Link>

              <Link href="/menu/mypage">
                <Tooltip title="マイページ" arrow>
                  <BottomNavigationAction
                    label="マイページ"
                    value="mypage"
                    icon={<PersonIcon />}
                  />
                </Tooltip>
              </Link>
            </BottomNavigation>
          </div>
        </footer>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
