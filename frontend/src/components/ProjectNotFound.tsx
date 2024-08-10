import { useNavigate } from "react-router-dom"

const ProjectNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="bg-custom-primary text-4xl">Project Not Found</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ProjectNotFound
