// import FAQAccordion from "../components/FAQAccording";

// const Questions = () => {
//     return (
//       <div className="w-[90%] mx-auto my-10  max-w-7xl px-4 md:px-8">
//         <div className="w-[70%] ">
//         <h2 className="text-[#A1E00D]  text-4xl font-semibold">Got Questions? We've Got Answers!</h2>
//         <p className="text-white my-5 text-lg md:text-xl">If you have any additional questions or need further clarification, don't hesitate to get in touch with us. We're here to help you!</p>
//         </div>
        
//         <section className=" text-white">
//         <FAQAccordion/>
//         </section>
    
//       </div>
//     );
//   };
  
  

// export default Questions

import { motion } from 'framer-motion';
import FAQAccordion from "../components/FAQAccording";

const Questions = () => {
  return (
    <div className="w-[90%] mx-auto my-10 max-w-7xl px-4 md:px-8">
      <div className="w-[70%]">
        <motion.h2
          className="text-[#A1E00D] text-4xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Got Questions? We've Got Answers!
        </motion.h2>
        <motion.p
          className="text-white my-5 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          If you have any additional questions or need further clarification, don't hesitate to get in touch with us. We're here to help you!
        </motion.p>
      </div>

      <section className="text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FAQAccordion />
        </motion.div>
      </section>
    </div>
  );
};

export default Questions;
