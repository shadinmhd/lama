import { useEffect, useState } from "react"
import HomeIcon from "../assets/icons/HomeIcon"
import PlusIcon from "../assets/icons/PlusIcon"
import Navbar from "../components/Navbar"
import NewProjectModel from "../components/NewProjectModal"
import api, { handleAxiosError } from "../utils/api"
import { toast } from "sonner"
import { PuffLoader } from "react-spinners"
import { useAuth } from "../context/AuthContext"
import Project from "../types/project"
import { Link } from "react-router-dom"

const Home = () => {
  const { isLoggedin } = useAuth()
  const [newProjectModal, setNewProjectModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (isLoggedin) {
      setLoading(true)
      api
        .get("/project")
        .then(({ data }) => {
          if (data.success) {
            setProjects(data.projects)
          } else {
            toast.error(data.message)
          }
        })
        .catch((error) => {
          handleAxiosError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isLoggedin, setLoading])

  const onNewProject = (project: Project) => {
    setProjects((prev) => [...prev, project])
  }

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <PuffLoader color="#7e22ce" />
      </div>
    )
  }

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 overflow-hidden px-5 sm:gap-3 sm:px-8 md:px-12 lg:px-20 xl:gap-2 xl:px-28">
      <Navbar />
      <button className="flex items-center gap-2 self-start rounded-full border-2 bg-white px-2 py-1 drop-shadow-md transition-all hover:scale-105">
        <HomeIcon className="size-5" />
        <span className="hidden sm:block sm:text-sm md:text-base">
          Back to Home
        </span>
      </button>
      <NewProjectModel
        open={newProjectModal}
        setOpen={setNewProjectModal}
        onNewProject={onNewProject}
      />
      {projects.length ? (
        <Projects
          projects={projects}
          newProjectModal={newProjectModal}
          setNewProjectModal={setNewProjectModal}
        />
      ) : (
        <>
          <p className="text-custom-primary text-center text-3xl font-medium sm:text-4xl md:text-5xl xl:text-6xl">
            Create a New Project
          </p>
          <img
            src="/hero-image.png"
            alt="hero image"
            className="w-[26rem] xl:w-[30rem]"
          />
          <p className="text-custom-gray text-center md:text-xl xl:text-[1.75rem]/[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button
            onClick={() => {
              setNewProjectModal(!newProjectModal)
            }}
            className="bg-custom-voilet hover:bg-custom-primary flex items-center gap-3 rounded-lg py-4 pe-10 ps-5 text-lg font-medium text-white transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:pe-14 xl:ps-7 xl:text-[2.2rem]"
          >
            <PlusIcon className="lg:size-12 xl:size-14" />
            Create New Project
          </button>
        </>
      )}
    </div>
  )
}

const Projects = ({
  projects,
  setNewProjectModal,
  newProjectModal,
}: {
  projects: Project[]
  setNewProjectModal: (newProjectModal: boolean) => void
  newProjectModal: boolean
}) => {
  return (
    <div className="mt-2 flex h-full w-full flex-col items-center gap-5">
      <div className="flex w-full items-center justify-between">
        <p className="text-custom-primary text-5xl font-bold">Projects</p>
        <button
          onClick={() => {
            setNewProjectModal(!newProjectModal)
          }}
          className="bg-custom-voilet hover:bg-custom-primary flex items-center gap-3 rounded-lg py-2 pe-3 ps-5 font-medium text-white transition-all duration-300 sm:text-lg md:text-xl lg:text-lg xl:pe-14 xl:ps-7 xl:text-xl"
        >
          <PlusIcon className="lg:size-10 xl:size-10" />
          Create New Project
        </button>
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((e, i) => (
            <ProjectItem key={i} name={e.name} id={e._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectItem = ({ name, id }: { name: string; id: string }) => {
  return (
    <Link
      to={`/project/${id}/upload`}
      className="flex gap-5 rounded-lg border border-gray-600 p-2 shadow-xl"
    >
      <div className="bg-custom-primary flex items-center justify-center rounded-lg lg:size-32 xl:size-28">
        <p className="text-6xl text-white">{name.split(" ")[0][0]}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-custom-primary mt-3 text-3xl font-bold">{name}</p>
          <p>4 Episodes</p>
        </div>
        <p className="text-sm text-gray-400">last editod a week ago</p>
      </div>
    </Link>
  )
}

export default Home
