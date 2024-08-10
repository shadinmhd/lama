import { FC, KeyboardEvent } from "react"
import Modal from "./Modal"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import api, { handleAxiosError } from "../utils/api"
import { toast } from "sonner"
import Project from "../types/project"

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  onNewProject: (project: Project) => void
}

const fomrSchema = z.object({
  name: z.string().min(1, { message: "Project Name Can't be empty" }),
})

type formType = z.infer<typeof fomrSchema>

const NewProjectModel: FC<Props> = ({ open, setOpen, onNewProject }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({ resolver: zodResolver(fomrSchema) })

  const onClose = () => {
    setOpen(false)
  }

  const createProject = async (body: formType) => {
    try {
      const { data } = await api.post("/project", body)
      if (data.success) {
        onNewProject(data.project)
        setOpen(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      handleAxiosError(error)
    }
  }

  const onEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code == "Enter") {
      e.preventDefault()
      handleSubmit(createProject)()
    }
  }

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      className="flex w-full flex-col gap-5 rounded-2xl md:w-3/4"
    >
      <p className="text-4xl font-semibold">Create Project</p>
      <div className="flex flex-col gap-3" onKeyDown={onEnter}>
        <p className="text-xl">Enter Project Name:</p>
        <input
          autoFocus
          {...register("name")}
          placeholder="Type Here"
          type="text"
          className="rounded-lg border-2 px-3 py-3 text-2xl outline-none"
        />
        {errors.name && (
          <p className="text-lg text-red-500">{errors.name.message}</p>
        )}
        <div className="flex items-center gap-5 self-end">
          <button
            onClick={onClose}
            className="text-xl text-red-500"
            type="submit"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit(createProject)}
            className="bg-custom-primary rounded-lg p-3 text-xl font-semibold text-white outline-none"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default NewProjectModel
