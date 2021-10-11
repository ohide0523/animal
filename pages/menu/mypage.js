import React from "react";
// main
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyPage = () => {
  return (
    <>
      <body style={{ lineHeight: "0", marginTop: "20px" }}>
        <main>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" spacing={6}>
              <Avatar sx={{ bgcolor: "red" }}>H</Avatar>
            </Stack>
            <h1>HIDE</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Rating
                name="half-rating-read"
                defaultValue={5.0}
                precision={0.5}
                readOnly
              />
              <p>本人確認</p>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default MyPage;
