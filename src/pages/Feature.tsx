import { motion } from 'framer-motion';

const Feature = () => {
  return (
    <div className="w-[90%] mx-auto my-20 max-w-7xl px-4 md:px-8">
      <motion.h2
        className="text-[#A1E00D] rounded-2xl bg-[#191919] w-fit px-4 py-2 text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        OUR FEATURES
      </motion.h2>
      <motion.h1
        className="text-[#A1E00D] text-2xl md:text-4xl font-bold my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Choose CoinHarbour?
      </motion.h1>
      <motion.p
        className="text-white text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We make investing simple, flexible, and accessible for everyone.
      </motion.p>

      <div className="my-6 flex flex-col md:flex-row items-center lg:justify-between gap-10">
        {/* Features List */}
        <motion.div
          className="w-full lg:w-[50%] grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[{ img: "./fold.svg", text: "Start Small : Invest with as little as $10." },
            { img: "./bargraph.svg", text: "Withdraw Anytime : No lock-in periods." },
            { img: "./cir.svg", text: "No Subscription Fees : Pay only on profits." },
            { img: "./truely.svg", text: "Truly Decentralised : Everything on-chain" }
          ].map((feature, index) => (
            <div key={index} className="bg-[#0f0f0f] rounded-2xl flex lg:flex-col items-center text-center p-5 gap-3 lg:h-44">
              <div className="bg-[#141414] w-14 h-14 flex items-center justify-center rounded-xl">
                <img src={feature.img} alt="feature-icon" className="w-5 md:w-8 md:h-8" />
              </div>
              <p className="text-white text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="./explore.png" alt="Explore" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
