import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-indigo-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cupones de Descuento
            </span>
          </Link>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {user ? (
              <button
                onClick={logout}
                className="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                Cerrar Sesión
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm  text-gray-500 dark:text-white hover:underline"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="text-sm  text-white hover:underline"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Ofertas
                </Link>
              </li>

              {user ? (
                <li>
                  <Link
                    to={"/my-promo-codes"}
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Mis codigos de descuento
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
