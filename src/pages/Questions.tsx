import FAQAccordion from "../components/FAQAccording";

const Questions = () => {
    return (
      <div className="w-[90%] mx-auto my-20 max-w-7xl px-4 md:px-8">
        <div className="w-[70%] ">
        <h2 className="text-[#A1E00D]  text-4xl font-semibold">Got Questions? We've Got Answers!</h2>
        <p className="text-white my-5 text-lg md:text-xl">If you have any additional questions or need further clarification, don't hesitate to get in touch with us. We're here to help you!</p>
        </div>
        
        <section className=" text-white">
        <FAQAccordion/>
        </section>
    
      </div>
    );
  };
  
  

export default Questions