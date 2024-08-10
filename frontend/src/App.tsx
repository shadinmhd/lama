import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import ProjectUpload from "./pages/project/ProjectUpload"
import ProjectConfiguration from "./pages/project/ProjectConfiguration"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/project/:id/upload" element={<ProjectUpload />} />
      <Route
        path="/project/:id/configuration"
        element={<ProjectConfiguration />}
      />
    </Routes>
  )
}

export default App
