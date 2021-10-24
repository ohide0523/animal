import React, { useState, useEffect,useContext } from "react";
import {AuthContext} from "../components/Context"
import Link from "next/link";
import { auth, logOut,signInWithGoogle} from "../components/firebase";
import Tooltip from "@mui/material/Tooltip";

// header
import Switch from "@mui/material/Switch";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// main
import { Paper } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Top = () => {
  const {currentUser, setCurrentUser,login,setLogin} = useContext(AuthContext)
  const [search, setSearch] = useState(false);
 
  useEffect(async() => {
    await signInWithGoogle();
    auth.onAuthStateChanged(setCurrentUser);
    console.log(currentUser)
  }, []);

  useEffect(() => {
    if (currentUser === null) {
      setLogin(false);

    } else {
      setLogin(true);
      console.log(currentUser)
    }
  }, [currentUser]);

  const onClickSearch = () => {
    setSearch(() => {
      if (search === false) {
        return true;
      } else {
        return false;
      }
    });
  };

  const onClickLogin =async()=>{
    if(login===false){
      await signInWithGoogle()

    }else{
      await logOut()
    }
  }
  
  const itemData = [
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
      rows: 2,
      cols: 2,
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
    {
      img: "/BorderCollie.jpg",
      title: "ボーダーコリー",
      age: "12歳",
    },
  ];

  return (
    <>
      {search ? (
        <>
          <Tooltip title="戻る" arrow>
            <ArrowBackIosIcon
              style={{
                position: "fixed",
                top: "20",
                left: "20",
                cursor: "pointer",
              }}
              onClick={onClickSearch}
            />
          </Tooltip>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="里親を探す"
              inputProps={{ "aria-label": "里親を探す" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
        </>
      ) : (
        <>
          <header
            style={{
              display: "flex",
              alignItems: "center",

              position: "fixed",
              width: "100%",
              height: "80px",
              top: 0,
              zIndex: 2,
              background: "white",
              borderBottom: "1px solid rgb(229, 229, 229)",
              marginBottom: "100px",
            }}
          >
            <h1 style={{ flex: 1, marginLeft: "20px" }}>Topページ</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <SearchIcon
                onClick={onClickSearch}
                style={{ fontSize: "40px", marginRight: "10px" }}
              />
              <Switch
                checked={login}
                onChange={onClickLogin}
                inputProps={{ "aria-label": "controlled" }}
              />
              
            
             </div>
          </header>

          <main style={{ zIndex: 0 }}>
            <ImageList sx={{ width: 1000, height: 700 }}>
              {itemData.map((item, index) => (
                <Link href={`/item/${index}`} key={index}>
                  <ImageListItem key={index}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <ImageListItemBar
                      key={item.index}
                      title={item.title}
                      subtitle={item.age}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                        ></IconButton>
                      }
                    />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </main>
        </>
      )}
    </>
  );
};

export default Top;
