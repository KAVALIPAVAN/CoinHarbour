
import { motion } from 'framer-motion';

const Invest = () => {
  return (
    <div className="w-[90%] gap-10 my-10 mx-auto lg:flex max-w-7xl px-4 md:px-8">
      <div className="lg:w-[70%]">
        <motion.h1
          className="text-[#A1E00D] text-2xl md:text-4xl font-bold my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Invest in Just 4 Steps!
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          All it takes is 1 minute to start building your portfolio
        </motion.p>
        <motion.button
          className="my-8 text-center flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Start Your Journey Now</p>
          <div className="bg-black rounded-4xl p-1">
            <img src="/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
          </div>
        </motion.button>

        <div className="my-6">
          {/* Features List */}
          <motion.div
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {[
              { img: "./star.svg", h: '1. Connect Your Wallet', text: "We support your L1, if not, we'll add it!" },
              { img: "./flag.svg", h: '2. Choose from our harbour', text: "Pick from various expert curated indexes & themes." },
              { img: "./arro.svg", h: '3. Invest with One Click', text: "View AUM, # of investors, & performance to decide." },
              { img: "./small.svg", h: '4. Relax and Watch It Grow', text: "Track your portfolio anytime to see your returns." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#0f0f0f] rounded-2xl px-5 py-2 gap-2 lg:h-40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="bg-[#141414] w-7 h-7 flex items-center justify-center rounded-xl">
                  <img src={feature.img} alt="feature-icon" className="w-5 md:w-6 md:h-6" />
                </div>
                <div className="text-white">
                  <h1 className="font-bold">{feature.h}</h1>
                  <p className="text-sm md:text-base">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-[40%] flex justify-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="./invest.png" alt="Explore" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
      </motion.div>
    </div>
  );
};

export default Invest;
