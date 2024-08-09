import HomeIcon from "../assets/icons/HomeIcon"
import PlusIcon from "../assets/icons/PlusIcon"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="font-Roboto flex w-screen flex-col items-center justify-center gap-4 px-5 sm:gap-3 sm:px-8 md:px-12 lg:px-20 xl:gap-2 xl:px-28">
      <Navbar />
      <button className="flex items-center gap-2 self-start rounded-full border-2 bg-white px-2 py-1 drop-shadow-md transition-all hover:scale-105">
        <HomeIcon className="size-5" />
        <span className="hidden sm:block sm:text-sm md:text-base">
          Back to Home
        </span>
      </button>
      <p className="text-custom-primary text-center text-3xl font-medium sm:text-4xl md:text-5xl xl:text-6xl">
        Create a New Project
      </p>
      <img
        src="/hero-image.png"
        alt="hero image"
        className="w-[26rem] xl:w-[30rem]"
      />
      <p className="text-custom-gray text-center md:text-xl xl:text-[1.75rem]/[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button className="bg-custom-voilet hover:bg-custom-primary flex items-center gap-3 rounded-lg py-4 pe-10 ps-5 text-lg font-medium text-white transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:pe-14 xl:ps-7 xl:text-[2.2rem]">
        <PlusIcon className="lg:size-12 xl:size-14" />
        Create New Project
      </button>
    </div>
  )
}

export default Home
