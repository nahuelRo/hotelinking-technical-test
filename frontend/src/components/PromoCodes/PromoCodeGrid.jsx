import { Bounce, toast } from "react-toastify";
import useAuthContext from "../../context/AuthContext";
import { PromoCodeCard } from "./PromoCodeCard";
import axios from "../../api/axios";

export const PromoCodeGrid = ({ promoCodes, setPromoCodes }) => {
  const { user } = useAuthContext();

  const handleClick = async (id) => {
    if (!user) {
      return toast.error(
        "Necesitas iniciar sesion para realizar está acción.",
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
    } else {
      const { data } = await axios.put(`/api/promo-codes/${id}/redeem`);

      setPromoCodes(
        promoCodes?.map((promoCode) => {
          if (promoCode.id === data.id) {
            return data;
          }
          return promoCode;
        })
      );

      toast.success("Código canjeado", {
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
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {promoCodes?.map((promo) => (
        <PromoCodeCard
          key={promo.code}
          id={promo.id}
          title={promo.offer.title}
          description={promo.offer.description}
          imageUrl={promo.offer.image_url}
          discount={promo.offer.discount}
          code={promo.code}
          redeemed={promo.redeemed}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
