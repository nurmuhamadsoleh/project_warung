import React from "react";
import Detail from "./Details";
const Item = ({ data, hapus }) => {
  return (
    <ul className="list-group">
      {data.map((data) => {
        return <Detail key={data.id} {...data} hapus={hapus} />;
      })}
    </ul>
  );
};
export default Item;
