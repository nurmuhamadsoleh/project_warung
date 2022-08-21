import React from "react";

const Detail = ({ id, nama_barang, harga, hapus }) => {
  return (
    <li className="list-group-item">
      {nama_barang} ({harga})
      <button
        className="btn btn-danger btn-sm float-right"
        onClick={() => hapus(id)}
      >
        Hapus
      </button>
    </li>
  );
};
export default Detail;
