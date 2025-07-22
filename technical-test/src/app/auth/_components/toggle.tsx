import { authScreenMode } from "@/types/auth_screen_mode.interface";

// The type was defined in the same component file given its exclusive use.
type props = {
  mode: authScreenMode;
  onChange: (mode: authScreenMode) => void;
};

// It is a switch; in a more elaborate case, it should be made generic.
const AuthToggle = ({ mode, onChange }: props) => {
  return (
    <section className="w-full max-w-md mx-auto h-fit flex justify-center items-center">
      <div className="relative flex bg-gray-100 rounded-full shadow-md overflow-hidden">
        <div
          className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-full shadow-lg transition-transform duration-1000 ease-in-out ${
            mode === "login" ? "translate-x-1" : "translate-x-[calc(100%+4px)]"
          }`}
        />
        <button
          onClick={() => onChange("login")}
          className={`relative z-10 flex-1 text-center px-8 py-2 text-xs font-semibold transition-all duration-300 ease-in-out ${
            mode === "login"
              ? "text-gray-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => onChange("register")}
          className={`relative z-10 flex-1 text-center px-8 py-4 text-xs font-semibold transition-all duration-300 ease-in-out ${
            mode === "register"
              ? "text-gray-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Crear cuenta
        </button>
      </div>
    </section>
  );
};

export default AuthToggle;
