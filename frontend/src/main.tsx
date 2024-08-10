import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.tsx"
import { Toaster } from "sonner"
import LoginModal from "./components/LoginModal.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors />
    <BrowserRouter>
      <AuthProvider>
        <LoginModal />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
