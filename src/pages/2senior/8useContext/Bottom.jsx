import { useContext } from "react";
import { BookPieceContext } from "./Context.jsx";

//* 使用方式：引入context，获取它的值；

export default function Heading({ children }) {
  const obj = useContext(BookPieceContext);
  return <div>{obj.bookName ||'-----'}</div>;
}
