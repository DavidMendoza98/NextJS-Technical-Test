"use client";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff, CircleAlert } from "lucide-react";

export default function SignupForm() {
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Procesando...");
    if (data.password !== data.confirm_password) {
      toast.error("Las contraseñas deben coincidir", { id: toastId });
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
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
      reset();
      const { token, user } = result;
      login(user, token);
      toast.success("Registro exitoso", { id: toastId });
      router.push("/");
    } catch (error) {
      toast.error("Error " + error, { id: toastId });
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <p className="text-sm font-sans text-center">
          Al crear una cuenta podrás guardar tus destinos favoritos.
        </p>
        {/* {Username} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">
            Nombre de usuario:
          </label>
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
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">Correo:</label>
          <input
            type="email"
            className="border-1 focus:outline-0 border-neutral-300 p-2 rounded-lg  focus:ring-2 focus:ring-blue-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <CircleAlert size={10} />
              por favor introduzca un correo válido
            </span>
          )}
        </div>
        {/* {Name} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">Nombre:</label>
          <input
            type="text"
            className="border-1 focus:outline-0 border-neutral-300 p-2 rounded-lg  focus:ring-2 focus:ring-blue-400"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <CircleAlert size={10} />
              Este campo es requerido
            </span>
          )}
        </div>
        {/* {LastName} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">Apellido:</label>
          <input
            type="text"
            className="border-1 focus:outline-0 border-neutral-300 p-2 rounded-lg  focus:ring-2 focus:ring-blue-400"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
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
        {/* {password again} */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold font-sans">
            Confirmar contraseña:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full border-1 text-sky-600 focus:outline-0 border-neutral-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
              {...register("confirm_password", { required: true })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirm_password && (
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
          Regístrate
        </button>
      </form>
    </div>
  );
}
