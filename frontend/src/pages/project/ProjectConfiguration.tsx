import { useEffect, useState } from "react"
import Project from "../../types/project"
import { useParams } from "react-router-dom"
import api, { handleAxiosError } from "../../utils/api"
import { toast } from "sonner"
import { PuffLoader } from "react-spinners"
import Loading from "../../components/Loading"
import ProjectNotFound from "../../components/ProjectNotFound"

const ProjectConfiguration = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<Project>()

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
    <div className="flex h-screen w-screen flex-col items-center gap-5">
      <p></p>
    </div>
  )
}

export default ProjectConfiguration
