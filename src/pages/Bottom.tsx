
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import { FiTwitter } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Bottom = () => {
  return (
    <div className="w-[75%] mb-5 mx-auto overflow-hidden border border-[#141414] rounded-3xl text-white relative">
      <main className="relative">
        {/* Background Section */}
        <div className="relative w-full h-[120px]  bg-[url(/up.svg)] bg-cover bg-no-repeat flex flex-col items-center justify-between">
          {/* Left and Right Fixed Background Images */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none">
            <img
              src="/left.svg"
              alt="Left design"
              className="absolute left-0 top-1/3 transform -translate-y-1/2 opacity-50 md:-ml-10 w-[500px] md:w-[350px] sm:w-[250px] max-w-[40%]"
            />
            <img
              src="/right.svg"
              alt="Right design"
              className="absolute right-0 md:-mr-10 top-1/3 transform -translate-y-1/2 opacity-50  md:w-[350px] sm:w-[250px] max-w-[40%]"
            />
          </div>
        </div>

       {/* Title and Subtitle */}
       <motion.div
            className="relative z-10 text-center -mt-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold">Join Coinharbour Now</h1>
            <p className="text-[#999999] my-3">
              Be early on the waitlist and get rewarded!
            </p>
          </motion.div>

        <motion.div
          className="text-[#999999] flex flex-col md:flex-row justify-center items-center gap-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="https://x.com/coinharbourxyz" className=" inline-block" target="_blank">
            <button className="p-2  flex gap-2 cursor-pointer rounded-2xl items-center bg-[#141414]">
              <FiTwitter className="text-[#a1e00d] text-2xl" />
              Follow on X
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1KoVUD9gSdec-y8k-VGLNa5BVIMc4DW5q/view"
            target="_blank" className=" inline-block"
          >
            <button className="p-2  rounded-2xl cursor-pointer flex items-center gap-2 bg-[#141414]">
              <IoNewspaperOutline className="text-white text-2xl" />
              Protocol Whitepaper
            </button>
          </a>

          
            <button className="flex cursor-pointer sm:w-40 h-11 items-center justify-center gap-1 rounded-4xl bg-[#141414] p-3 overflow-hidden relative ">
            <a
            href="mailto:contact@coinharbour.xyz"
            target="_blank" className=" flex items-center gap-2"
          >
            <MdOutlineEmail className="text-[#dcfc36] text-2xl" />
            Email Us
            </a>
            </button>
         

        </motion.div>

        {/* Footer Section */}
        <footer className="bg-[url(/down.svg)] bg-no-repeat w-full bg-cover h-[120px]  overflow-hidden relative">
          <div className="flex absolute md:mx-[40%] mx-[35%] top-5  md:top-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a href="https://app.coinharbour.xyz/waitlist" target="_blank" className="text-black">
                <AnimatedButton txt={"Early Access"} />
              </a>
            </motion.div>
          </div>
          
        </footer>
      </main> 
    </div>
  );
};

export default Bottom;
