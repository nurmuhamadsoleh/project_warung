import { data } from "autoprefixer";
import axios from "axios";
import React, { createContext, useState } from "react";
// UserContext merupakan nama context nya
export const UserContext = createContext();
//Create Provider
const UserContextProvider = ({ children }) => {
  //global state
  // const [personal, setPersonal] = useState({
  //   email: "nursoleh@gmail.com",
  //   id: 1,
  // });
  // memembuat untuk dispatcher
  // const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data] = useState([]);

  // const getProfile = async () => {
  //   setLoading(true);
  //   try {
  //     let response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users/4"
  //     );
  //     setUser(response.data);
  //     console.log(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // console.log(user);
  // };
  // useEffect(() => {
  //   getProfile();
  // }, []);
  return (
    <>
      {/* Mengandung Provider yang di gunakan untuk memanggil state / variabel di dlam component */}
      {/* provider tempat bisa di bacanya state secara global */}
      {/* type data untuk props value bebas di mana value akan di baca oleh component chaild */}
      <UserContext.Provider value={[data, loading, setLoading]}>
        {children}
        {/* digunakan untuk memenggil value yang ada pada setiap state */}
      </UserContext.Provider>
    </>
  );
};
export default UserContextProvider;
