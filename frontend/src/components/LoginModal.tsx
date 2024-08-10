import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"
import api, { handleAxiosError } from "../utils/api"
import { z } from "zod"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
})

type formType = z.infer<typeof formSchema>

const LoginModal = () => {
  const { loginModal, setIsLoggedin } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({ resolver: zodResolver(formSchema) })

  const login = async (body: formType) => {
    try {
      const { data } = await api.post("/auth/login", body)
      if (data.success) {
        setIsLoggedin(true)
      } else {
        toast.error(data.message)
      }
      console.log(body)
    } catch (error) {
      handleAxiosError(error)
    }
  }

  return (
    <Modal
      isOpen={loginModal}
      onClose={() => {}}
      className="flex w-full flex-col gap-5 md:w-1/2"
    >
      <p className="text-4xl font-bold">Login</p>
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col items-center gap-3"
      >
        <p className="self-start text-xl">Email</p>
        <input
          {...register("email")}
          placeholder="Email"
          type="text"
          className="w-full rounded-lg border-2 px-2 py-1 outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <button
          className="bg-custom-voilet self-end rounded-lg px-3 py-1 text-xl text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </Modal>
  )
}

export default LoginModal
