import { Bounce, toast } from "react-toastify";
import useAuthContext from "../../context/AuthContext";
import { OfferCard } from "./OfferCard";
import axios from "../../api/axios";

export const OfferGrid = ({ offers, setOffers }) => {
  const { user } = useAuthContext();

  const handleClick = async (id) => {
    if (!user) {
      toast.error("Necesitas iniciar sesión para realizar esta acción.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      const { data } = await axios.post(`/api/promo-codes/generate/${id}`);
      setOffers(
        offers?.map((offer) => {
          if (offer.id === data.id) {
            return data;
          }
          return offer;
        })
      );
      toast.success(
        "Codigo de descuento generado correctamente, lo vas a poder visualizar en Mis Codigo de Descuentos",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {offers?.map((offer) => (
        <OfferCard
          key={offer.id}
          title={offer.title}
          description={offer.description}
          imageUrl={offer.image_url}
          discount={offer.discount}
          id={offer.id}
          promoCode={
            offer?.promo_codes[0]?.id && user ? offer.promo_codes[0].id : null
          }
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
