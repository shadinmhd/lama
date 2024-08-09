import BellIcon from "../assets/icons/BellIcon"
import GearIcon from "../assets/icons/GearIcon"

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between py-5">
      <div className="flex items-center gap-2 xl:gap-5">
        <img src="/logo.png" alt="" className="w-7 xl:w-10" />
        <p className="font-Plus-Jakarta-Sans text-custom-primary font-extrabold md:text-xl xl:text-3xl">
          LAMA.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <GearIcon className="hover:fill-custom-primary transition-all duration-300 lg:size-7 xl:size-10" />
        <BellIcon className="hover:fill-custom-primary transition-all duration-300 lg:size-7 xl:size-10" />
      </div>
    </header>
  )
}

export default Navbar
