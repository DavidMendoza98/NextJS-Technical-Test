"use client";
import { useAuth } from "@/context/auth";
import { LogOut, History } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Protected } from "@/components/protected_components";

const Account = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Sesión cerrada");
  };
  const goToActivityHistory = () => {
    router.push("/activity");
  };

  return (
    <Protected>
      <div className="max-w-md mx-auto mt-10 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Hola, {user?.name} {user?.lastname} 👋
        </h2>

        <div className="flex flex-col gap-4 mt-6 items-center">
          <button
            onClick={goToActivityHistory}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-center border-1 border-neutral-300 w-fit"
          >
            <History size={18} />
            Historial de actividad
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-center w-fit"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </div>
    </Protected>
  );
};
export default Account;
