import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import { OfferGrid } from "./Offers/OfferGrid";

export const Home = () => {
  const { user, getUser } = useAuthContext();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("/api/offers").then((res) => setOffers(res.data));

    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <main className="flex items-center justify-center bg-slate-100">
      <ToastContainer />
      <div className="mx-auto p-8 bg-slate-100">
        {offers.length < 1 ? (
          <h2 className="text-xl">No tienes codigos para canjear</h2>
        ) : (
          <OfferGrid offers={offers} setOffers={setOffers} />
        )}
      </div>
    </main>
  );
};
