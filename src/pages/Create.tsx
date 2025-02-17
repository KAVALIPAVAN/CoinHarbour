import Carousel from "../components/Carousel"

const Create = () => {
  return (
    <div className="w-[90%] text-white gap-10 my-10 mx-auto lg:flex max-w-7xl px-4 md:px-8">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center">
          
        <Carousel/>

        </div>

        <div className="lg:w-[50%]">
    <h1 className="text-[#A1E00D] text-2xl md:text-4xl font-bold my-4">Create & Share your Strategies</h1>
        <p className=" text-lg md:text-xl">Create and share strategies with friends, backtest on years of data, and optimize returns!</p>
        <button className=" my-8 text-center flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3">
          <p>Prove your Mettle</p>
          <div className="bg-black rounded-4xl p-1">
            <img src="/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
          </div>
        </button>
        <p>We support all major ecosystems</p>

    </div>
    </div>
  )
}

export default Create