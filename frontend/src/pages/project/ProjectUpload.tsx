import { ReactNode, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api, { handleAxiosError } from "../../utils/api"
import { toast } from "sonner"
import Project from "../../types/project"
import Sidebar from "../../components/Sidebar"
import UploadIcon from "../../assets/icons/UploadIcon"
import YoutubeIcon from "../../assets/icons/YoutubeIcon"
import SpotifyIcon from "../../assets/icons/SpotifyIcon"
import RssIcon from "../../assets/icons/RssIcon"
import ProjectNavbar from "../../components/ProjectNavbar"
import Loading from "../../components/Loading"
import ProjectNotFound from "../../components/ProjectNotFound"

const ProjectUpload = () => {
  const { id } = useParams()
  const [project, setProject] = useState<Project>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get(`/project/${id}`)
      .then(({ data }) => {
        if (data.success) {
          setProject(data.project)
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
  }, [id])

  if (loading) return <Loading />

  if (!project) return <ProjectNotFound />

  return (
    <div className="items-centere flex h-screen w-screen">
      <Sidebar id={project._id} />
      <div className="flex w-full flex-col items-center gap-5 p-10">
        <ProjectNavbar name={project.name} />
        <p className="text-custom-primary my-5 self-start text-5xl font-bold">
          Upload
        </p>
        <div className="flex w-full items-center gap-5">
          <UploadOption name="Youtube">
            <YoutubeIcon className="size-12 rounded-full bg-[#ff0000]" />
          </UploadOption>
          <UploadOption name="Spotify">
            <SpotifyIcon className="size-12 rounded-full bg-black" />
          </UploadOption>
          <UploadOption name="RSS Feed">
            <RssIcon className="size-12 rounded-full" />
          </UploadOption>
        </div>
        <p className="text-xl text-gray-500">Or</p>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border-[3px] border-dashed border-gray-500">
          <UploadIcon className="fill-custom-primary size-24" />
          <p className="text-xl">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className="text-gray-400">
            MP4, MOV, MP3, WAV,PDF, DOCX or TXT file
          </p>
          <button className="border-custom-primary hover:bg-custom-primary text-custom-primary mt-2 rounded-full border-2 px-4 py-2 text-xl font-semibold transition-all hover:text-white">
            Select File
          </button>
        </div>
      </div>
    </div>
  )
}

const UploadOption = ({
  children,
  name,
}: {
  children: ReactNode
  name: string
}) => {
  return (
    <div className="flex w-full items-center gap-5 rounded-lg border-2 p-5 shadow-lg">
      {children}
      <div>
        <p className="text-xl font-bold">Upload</p>
        <p className="text-xl font-bold">{name}</p>
      </div>
    </div>
  )
}

export default ProjectUpload
