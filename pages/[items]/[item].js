import React, { useContext } from "react";
import { AuthContext } from "../../components/Context";
import {signInRedirect} from "../../components/firebase"
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Avatar from "@mui/material/Avatar";

const item = () => {
  const { like, setLike, login } = useContext(AuthContext);
  console.log(like);

  const onClickLike = () => {
    setLike({
      count: like.count + (like.liked ? -1 : 1),
      liked: !like.liked,
    });
  };

  const redirectFunction =async()=>{
    await signInRedirect()
  }
  return (
    <>
      {login ? (
        <>
          <Link href="/">
            <Tooltip title="戻る" arrow>
              <ArrowBackIosIcon style={{ cursor: "pointer" }} />
            </Tooltip>
          </Link>
          <main
            style={{ margin: "100px auto", maxWidth: "900px", height: "auto" }}
          >
            <div style={{ maxWidth: "95%", maxHeight: "100%" }}>
              <Image
                src={"/BorderCollie.jpg"}
                width={1920}
                height={1000}
                objectFit="contain"
              />
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "80%",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 0,
                    flex: 1,
                  }}
                >
                  <h1>ボーダーコリー</h1>
                  <p>BorderCollie</p>
                </div>
                {like.liked ? (
                  <div style={{ display: "flex" }}>
                    <FavoriteIcon
                      style={{ color: "red", fontSize: "40px" }}
                      onClick={onClickLike}
                    />
                    <p>{like.count}</p>
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <FavoriteBorderIcon
                      onClick={onClickLike}
                      style={{ fontSize: "40px" }}
                    />
                    <p>{like.count}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Link href="/user/profile">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <span style={{ paddingLeft: "30px" }}>飼い主</span>
                </button>
              </Link>
            </div>
            <div>
              <h3>詳細</h3>
              <hr />
              <p>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <h3>情報</h3>
              <hr />
              <ul>
                <li>カテゴリー</li>
                <li>年齢</li>
                <li>サイズ</li>
                <li>身長</li>
                <li>体重</li>
                <li>受け渡し地域</li>
              </ul>
            </div>
            <div>
              <Link href="/user/chat">
                <button>飼い主に連絡する</button>
              </Link>
            </div>
          </main>
        </>
      ) : (
      <h1　onClick={redirectFunction}>ログインページ</h1>
      )}
    </>
  );
};

export default item;
