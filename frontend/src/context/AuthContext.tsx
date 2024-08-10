import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import api, { handleAxiosError } from "../utils/api"
import User from "../types/user"
import { toast } from "sonner"
import { PuffLoader } from "react-spinners"

interface contextType {
  isLoggedin: boolean
  setIsLoggedin: (open: boolean) => void
  user?: User
  loginModal: boolean
  setLoginModal: (loginModal: boolean) => void
}

const authContext = createContext<contextType>({
  isLoggedin: false,
  setIsLoggedin: () => {},
  loginModal: false,
  setLoginModal: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false)
  const [loginModal, setLoginModal] = useState(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api
      .get("/auth/check")
      .then(({ data }) => {
        if (data.success) {
          setIsLoggedin(true)
        } else {
          setIsLoggedin(false)
        }
      })
      .catch((error) => {
        handleAxiosError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setIsLoggedin])

  useEffect(() => {
    if (isLoggedin) {
      api
        .get("/user")
        .then(({ data }) => {
          if (data.success) {
            setLoginModal(false)
            setUser(data.user)
          } else {
            toast.error(data.message)
          }
        })
        .catch((error) => {
          handleAxiosError(error)
        })
    } else {
      setLoginModal(true)
    }
  }, [isLoggedin])

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <PuffLoader color="#7e22ce" />
      </div>
    )
  }

  return (
    <authContext.Provider
      value={{ isLoggedin, setIsLoggedin, user, loginModal, setLoginModal }}
    >
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}
