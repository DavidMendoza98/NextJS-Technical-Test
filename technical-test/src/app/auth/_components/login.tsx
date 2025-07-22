"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import Image from "next/image";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff, CircleAlert } from "lucide-react";

const LoginForm = () => {
  // Context
  const { login } = useAuth();
  // Router
  const router = useRouter();

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // States
  const [showPassword, setShowPassword] = useState(false);

  // Handles
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Procesando...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Ocurrió un error", { id: toastId });
        return;
      }
      const { token, user } = result;
      login(user, token);
      reset();
      toast.success("Ingreso exitoso", { id: toastId });
      router.push("/");
    } catch (error) {
      toast.error("Error " + error, { id: toastId });
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border-1 border-neutral-300 dark:bg-transparent dark:text-white  min-h-screen sm:min-h-0 rounded-lg mt-2 text-neutral-900 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <div className="w-full flex justify-center">
          <Image
            width={1920}
            height={1025}
            src="/conoce_honduras_3.webp"
            alt="Logo"
            className="h-10 w-auto"
            priority
          />
        </div>
        {/* {Username} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">Usuario:</label>
          <input
            type="text"
            className="border-1 focus:outline-0 border-neutral-300 p-2 rounded-lg  focus:ring-2 focus:ring-blue-400"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <CircleAlert size={10} />
              Este campo es requerido
            </span>
          )}
        </div>
        {/* {password} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">Contraseña:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-1 text-sky-600 focus:outline-0 border-neutral-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <CircleAlert size={10} />
              Este campo es requerido
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-sky-600 px-8 py-2 mt-2 text-white dark:bg-white dark:text-neutral-900 rounded-2xl"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
