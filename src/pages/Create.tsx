// import Carousel from "../components/Carousel"
// import ScrollingTicker from "../components/Ticker"

// const Create = () => {
//   return (
//     <div className="w-[90%] text-white gap-10 my-14 mx-auto lg:flex max-w-7xl px-4 md:px-8">
//         {/* Image Section */}
//         <div className="w-full lg:w-[50%] flex justify-center">
          
//         <Carousel/>

//         </div>

//         <div className="lg:w-[50%]">
//     <h1 className="text-[#A1E00D] text-2xl md:text-4xl font-bold my-4">Create & Share your Strategies</h1>
//         <p className=" text-lg md:text-xl">Create and share strategies with friends, backtest on years of data, and optimize returns!</p>
//         <button className=" my-8 text-center flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3">
//           <p>Prove your Mettle</p>
//           <div className="bg-black rounded-4xl p-1">
//             <img src="/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
//           </div>
//         </button>
//         <p className="text-[#b3b3b3] py-4">We support all major ecosystems</p>

//         <div className=" rounded-2xl bg-[#0a0a0a] border border-[#0f0f0f] w-full">
//         {/* <ScrollingTicker/> */}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Create

import { motion } from 'framer-motion';
import Carousel from "../components/Carousel";
import ScrollingTicker from "../components/Ticker";

const Create = () => {
  return (
    <div className="w-[90%] text-white gap-10 my-14 mx-auto lg:flex max-w-7xl px-4 md:px-8">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>
      </div>

      <div className="lg:w-[50%]">
        <motion.h1
          className="text-[#A1E00D] text-2xl md:text-4xl font-bold my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create & Share your Strategies
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create and share strategies with friends, backtest on years of data, and optimize returns!
        </motion.p>

        <motion.button
          className="my-8 text-center flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Prove your Mettle</p>
          <div className="bg-black rounded-4xl p-1">
            <img src="/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
          </div>
        </motion.button>

        <p className="text-[#b3b3b3] py-4">We support all major ecosystems</p>

        <div className="rounded-2xl bg-[#0a0a0a] border border-[#0f0f0f] w-full">
          {/* <ScrollingTicker/> */}
        </div>
      </div>
    </div>
  );
}

export default Create;
