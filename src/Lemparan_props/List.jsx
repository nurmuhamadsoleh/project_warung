import React, { useState } from "react";
import { data } from "../data";
import Item from "./Items";

const List = () => {
  const [item, setItem] = useState(data);
  const _hapusItem = (id) => {
    const newItem = item.filter((item) => item.id !== id);
    setItem(newItem);
    console.log("ini item id " + id);
  };
  return (
    <>
      <h1>lempar Props</h1>
      <Item data={item} hapus={_hapusItem} />
    </>
  );
};
export default List;
