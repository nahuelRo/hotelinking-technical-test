// eslint-disable-next-line react/prop-types
export const PromoCodeCard = ({
  id,
  title,
  description,
  imageUrl,
  discount,
  code,
  redeemed,
  handleClick,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-900 dark:border-gray-700 flex flex-col">
      <img
        className="rounded-t-lg w-full h-80 object-cover"
        alt="Imagen de la oferta"
        src={imageUrl}
        onError={(e) => {
          e.target.src =
            "https://imprimircarteles.com/wp-content/uploads/2022/10/ofertas_comic.jpg";
        }}
      />

      <div className="p-5 flex-grow">
        <h4 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Oferta del {discount} %
        </h4>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-200">{description}</p>
      </div>

      <button
        onClick={() => handleClick(id)}
        type="button"
        disabled={redeemed === 1}
        className={`font-medium rounded-lg text-md  px-5 py-2.5 mb-2 ${
          redeemed === 1
            ? "bg-gray-300 text-black"
            : "bg-blue-700 hover:bg-blue-800 text-white"
        } `}
      >
        {redeemed === 1 ? "CANJEADO" : `Canjear código: ${code}`}
      </button>
    </div>
  );
};
