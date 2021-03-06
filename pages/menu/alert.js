import React,{useState} from "react";
import Button from "@mui/material/Button"

const Alert = () => {
const [changeText,setChangeText] = useState(false);
    
  return (
    <>
      <header>
        <h1>お知らせ</h1>
      </header>
      <main>
        <div style={{display:"flex",justifyContent:"spaceBetween"}}>
        <Button variant="お知らせ" style={{fontSize:"30px"}} onClick={()=>setChangeText(true)}>お知らせ</Button>
        <Button variant="お知らせ" style={{fontSize:"30px"}} onClick={()=>setChangeText(false)}>※読んでほしい※</Button>
        </div>
        {
            changeText ?(
                <>
                <h3>今日のあなたへのお知らせ</h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               
                </p>
                </>
            ):(
                <>
                <h3>動物保護団体から</h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               </p>
               </>
            )
        }
      </main>
    </>
  );
};

export default Alert;
