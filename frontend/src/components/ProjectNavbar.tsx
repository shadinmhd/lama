import { Link } from "react-router-dom"

const ProjectNavbar = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center">
      <div>
        <Link to={"/"}></Link>
        <p>{name}</p>
        <Link to={"/"}></Link>
      </div>
      <div></div>
    </div>
  )
}

export default ProjectNavbar
