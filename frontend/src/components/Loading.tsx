import { PuffLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <PuffLoader color="#7e22ce" />
    </div>
  )
}

export default Loading
