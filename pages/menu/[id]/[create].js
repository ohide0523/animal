import React, { useState } from "react";
import Link from "next/link"
// header
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Tooltip from "@mui/material/Tooltip";

// main
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from '@mui/material/TextareaAutosize';


const create = () => {
  const [selectValue, setSelectValue] = useState("");
  const handleChange =(e)=>{
      setSelectValue(e.target.value)
  }
  return (
      <>
      <header>
          <Link href="/menu/pets">
          <Tooltip title="戻る" arrow style={{cursor:"pointer",margin:"15px"}}>
          <ArrowBackIosIcon
          />
          </Tooltip>
          </Link>
      </header>
    <main　style={{marginBottom:"100px"}}>
      <h1>里親に出す</h1>
      <h2>ワンちゃんの写真</h2>
      <Button variant="contained" disableElevation spacing={4}>
      <PhotoCameraIcon style={{marginRight:"10px"}}/>写真をアップロード
    </Button>
      <form>
        <h2>犬種の選択</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">犬のカテゴリー</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              label="dogCategory"
              onChange={handleChange}
            >
              <MenuItem value={"柴犬"}>柴犬</MenuItem>
              <MenuItem value={"ボーダーコリー"}>ボーダーコリー</MenuItem>
              <MenuItem value={"オーストラリアンシェパード"}>オーストラリアンシェパード</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <h2>健康状態(持病など)</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">犬のカテゴリー</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              label="dogCategory"
              onChange={handleChange}
            >
              <MenuItem value={"柴犬"}>柴犬</MenuItem>
              <MenuItem value={"ボーダーコリー"}>ボーダーコリー</MenuItem>
              <MenuItem value={"オーストラリアンシェパード"}>オーストラリアンシェパード</MenuItem>
            </Select>
          </FormControl>
        </Box>

    <h2>年齢</h2>
    <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">犬のカテゴリー</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              label="dogCategory"
              onChange={handleChange}
            >
              <MenuItem value={"柴犬"}>柴犬</MenuItem>
              <MenuItem value={"ボーダーコリー"}>ボーダーコリー</MenuItem>
              <MenuItem value={"オーストラリアンシェパード"}>オーストラリアンシェパード</MenuItem>
            </Select>
          </FormControl>
        </Box>
   

    <h2>ワンちゃんの特徴・性格・特技などの詳細</h2>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="可愛いところ・特技・性格・好きな食べ物など"
      style={{ minWidth: 600,height:300 }}
    />

      </form>
    </main>
    </>
  );
};

export default create;
