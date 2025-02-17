// import AnimatedButton from "../components/AnimatedButton";
// import { FiTwitter } from "react-icons/fi";
// import { IoNewspaperOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";

// const Bottom = () => {
//   return <div className=" w-[85%] mb-5 mx-auto overflow-hidden  border border-[#141414] rounded-3xl text-white">
    
//     <main className="">
//       {/* Background Section */}
//       <div className="bg-[url(/up.svg)] flex-col flex md:justify-between relative w-full h-[30%] bg-cover bg-no-repeat">
//         <div className="flex">
//         <div >
//           <img
//             src="/left.svg"
//             alt="Left design"
//             className="lg:-mt-52 opacity-50 lg:-ml-28 md:-m-16 md:ml-0 w-[950px] md:w-[800px]"
//           />
//         </div>
      
//         <div  className="">
//           <img
//             src="/right.svg"
//             alt="Right design"
//             className="lg:-mt-64 opacity-50 -mr-20  w-[800px]"
//           />
//         </div>
//         </div> 
//         <div className=" text-center -mt-10">
//       <h1 className="text-4xl font-bold text-center">Join Coinharbour Now</h1>
//         <p className="text-[#999999]">Be early on the waitlist and get rewarded!</p> 
//       </div>
    
//       </div>

     
//       {/* Footer Section */}
//       <footer className="bg-[url(/down.svg)] bg-no-repeat w-full bg-cover h-[200px] -mt-5 overflow-hidden">
//         <div  className="flex flex-col mt-10 items-center justify-center gap-4">
//         <div className="text-[#999999] flex-col md:flex-row flex md:gap-2 w-full items-center justify-center">
            
//             <button className=" p-2 mt-1 flex gap-1 rounded-2xl items-center  bg-[#141414]"><FiTwitter className="text-[#a1e00d] text-2xl"/>Follow on X </button>
            
//             <button className="p-2 my-4 rounded-2xl flex items-center gap-2 bg-[#141414]"><IoNewspaperOutline className="text-white text-2xl"/>Protocol Whitepaper</button>
            
//             <button className="p-2 rounded-2xl bg-[#141414] flex items-center gap-2"><MdOutlineEmail className="text-[#dcfc36] text-2xl"/>Email Us</button> 
//         </div>
//           <AnimatedButton txt={'Early Access'} />
//         </div>
//       </footer>
//     </main>
    
//     </div>;
// };

// export default Bottom;
import AnimatedButton from "../components/AnimatedButton";
import { FiTwitter } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Bottom = () => {
  return (
    <div className="w-[85%] mb-5 mx-auto overflow-hidden border border-[#141414] rounded-3xl text-white relative">
      <main className="relative">
        
        {/* Background Section */}
        <div className="relative w-full h-auto bg-[url(/up.svg)] bg-cover bg-no-repeat flex flex-col items-center justify-between">
          
          {/* Left and Right Fixed Background Images */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none">
            <img
              src="/left.svg"
              alt="Left design"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-50 w-[450px] md:w-[350px] sm:w-[250px] max-w-[30%]"
            />
            <img
              src="/right.svg"
              alt="Right design"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-50 w-[450px] md:w-[350px] sm:w-[250px] max-w-[30%]"
            />
          </div>

          {/* Title and Subtitle */}
          <div className="relative z-10 text-center mt-20 sm:mt-10">
            <h1 className="text-4xl font-bold">Join Coinharbour Now</h1>
            <p className="text-[#999999]">Be early on the waitlist and get rewarded!</p>
          </div>
          
        </div>
     <div className="text-[#999999] flex flex-col md:flex-row justify-center items-center gap-3 w-full">
              <button className="p-2 flex gap-2 rounded-2xl items-center bg-[#141414]">
                <FiTwitter className="text-[#a1e00d] text-2xl" />
                Follow on X
              </button>

              <button className="p-2 rounded-2xl flex items-center gap-2 bg-[#141414]">
                <IoNewspaperOutline className="text-white text-2xl" />
                Protocol Whitepaper
              </button>

              <button className="p-2 rounded-2xl bg-[#141414] flex items-center gap-2">
                <MdOutlineEmail className="text-[#dcfc36] text-2xl" />
                Email Us
              </button>
            </div>
        {/* Footer Section */}
        <footer className="bg-[url(/down.svg)] bg-no-repeat w-full bg-cover h-[200px] -mt-5 overflow-hidden relative">
        
          <div className="flex flex-col items-center justify-center gap-4 mt-10">

            <AnimatedButton txt={"Early Access"} />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Bottom;
