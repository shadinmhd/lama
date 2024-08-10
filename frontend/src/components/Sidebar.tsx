import { Link } from "react-router-dom"
import cn from "../utils/cn"
import { FC, ReactNode } from "react"
import GearIcon from "../assets/icons/GearIcon"

interface Props {
  id: string
}

const links: { name: string; to: string; active: boolean }[] = [
  { name: "Projects", to: "upload", active: true },
  { name: "Widget Configuration", to: "configuration", active: true },
  { name: "Deployment", to: "", active: false },
  { name: "Pricing", to: "", active: false },
]

const Sidebar: FC<Props> = ({ id }) => {
  return (
    <div className="bg-custom-secondary flex h-full w-80 flex-col justify-between p-5">
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full items-center gap-2">
          <img src="/logo.png" />
          <p className="font-Plus-Jakarta-Sans text-custom-primary font-extrabold md:text-xl xl:text-3xl">
            LAMA.
          </p>
        </div>
        <p className="">Podcast Upload Flow</p>
        <div className="flex w-full flex-col gap-2">
          <Link
            className="flex w-full items-center gap-2 rounded-full bg-opacity-0 p-2 hover:bg-[#e2d8ee]"
            to={`/project/${id}`}
          >
            <div className="flex size-6 items-center justify-center rounded-full bg-[#cac1d5]">
              1
            </div>
            <p>Projects</p>
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-full bg-opacity-0 p-2 hover:bg-[#e2d8ee]"
            to={`/project/${id}/configuration`}
          >
            <div className="flex size-6 items-center justify-center rounded-full bg-[#cac1d5]">
              1
            </div>
            <p>Widget Configuration</p>
          </Link>
          <div className="flex w-full items-center gap-2 rounded-full bg-opacity-0 p-2 hover:bg-[#e2d8ee]">
            <div className="flex size-6 items-center justify-center rounded-full bg-[#cac1d5]">
              3
            </div>
            <p>Deployement</p>
          </div>
          <div className="flex w-full items-center gap-2 rounded-full bg-opacity-0 p-2 hover:bg-[#e2d8ee]">
            <div className="flex size-6 items-center justify-center rounded-full bg-[#cac1d5]">
              4
            </div>
            <p>Pricing</p>
          </div>
        </div>
      </div>
      <LinkItem
        children={<GearIcon />}
        to="/settings"
        name="Settings"
        className="justify-self-end"
      />
    </div>
  )
}

const LinkItem = ({
  to,
  name,
  className,
  children,
}: {
  to: string
  name: string
  children: ReactNode
  className?: string
}) => {
  return (
    <Link
      className={cn(
        "flex w-full items-center gap-2 rounded-full bg-opacity-0 p-2 hover:bg-[#e2d8ee]",
        className,
      )}
      to={to}
    >
      <div className="flex size-6 items-center justify-center rounded-full bg-[#cac1d5]">
        {children}
      </div>
      <p>{name}</p>
    </Link>
  )
}

export default Sidebar
