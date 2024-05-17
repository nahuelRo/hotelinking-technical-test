import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import { PromoCodeGrid } from "./PromoCodes/PromoCodeGrid";
import { ToastContainer } from "react-toastify";

export const MyPromoCodes = () => {
  const { user, getUser } = useAuthContext();
  const [promoCodes, setPromoCodes] = useState([]);

  useEffect(() => {
    axios.get("/api/my-promo-codes").then((res) => setPromoCodes(res.data));

    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <main className="flex items-center justify-center">
      <ToastContainer />
      <div className="mx-auto p-8">
        {promoCodes.length < 1 ? (
          <h2 className="text-xl">No tienes codigos para canjear</h2>
        ) : (
          <PromoCodeGrid
            promoCodes={promoCodes}
            setPromoCodes={setPromoCodes}
          />
        )}
      </div>
    </main>
  );
};
