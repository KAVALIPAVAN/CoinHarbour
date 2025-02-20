import { useEffect, useRef } from "react";
import logo from "/logo.png";
import FloatingDots from "../animation";
import AnimatedButton from "../components/AnimatedButton";
import gsap from "gsap";


const Home: React.FC = () => {
  // Refs for animation targets
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const bgRightRef = useRef<HTMLDivElement>(null);
  const floatingDotsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const firstCardsRef = useRef<HTMLDivElement>(null);
  const secondCardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
    // Background elements animation
    tl.fromTo(
      [bgLeftRef.current, bgRightRef.current],
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 0.3,
        duration: 1,
        stagger: 0.15,
      }
    )
      // Floating dots section
      .fromTo(
        floatingDotsRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1.2, 0.5)",
        },
        "-=0.5"
      )
      // Subtitle
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },
        "-=0.3"
      )
      // Main heading
      .fromTo(
        headingRef.current,
        { y: 80, opacity: 0, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.4,
          ease: "power4.out",
        }
      )
      // First set of cards
      .fromTo(
        firstCardsRef.current?.children as HTMLCollection,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      // Second set of cards
      .fromTo(
        secondCardsRef.current?.children as HTMLCollection,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      // Footer buttons
      .fromTo(
        footerRef.current?.children as HTMLCollection,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "sine.out",
        },
        "-=0.2"
      );
  
    return () => {
      tl.kill();
    };
  }, []);
  

  return (
    <main className="">
      {/* Background Section */}
      <div className="bg-[url(/up.svg)] flex md:justify-between relative w-full h-[30%] bg-cover bg-no-repeat">
        <div ref={bgLeftRef}>
          <img
            src="/left.svg"
            alt="Left design"
            className="lg:-mt-52 lg:-ml-28 md:-m-16 md:ml-0 w-[950px] md:w-[800px]"
          />
        </div>
        <img src={logo} alt="Logo" className="w-36 absolute top-7 mx-6 md:mx-24" />
        <div ref={bgRightRef} className="lg:-mr-20">
          <img
            src="/right.svg"
            alt="Right design"
            className="lg:-mt-52 lg:-mr-32 md:-m-16 md:mr-0 w-[950px] md:w-[800px]"
          />
        </div>
      </div>

      {/* Floating Dots Section */}
      <div ref={floatingDotsRef} className="flex flex-col items-center ">
        <FloatingDots>
          <div className="bg-[url(/glow.svg)] h-[110px] bg-center bg-contain bg-no-repeat mt-10 flex justify-center items-center">
            <img src="/minilogo.svg" alt="Mini logo" className="w-[30px] h-[30px]" />
          </div>
        </FloatingDots>
        <p ref={subtitleRef} className="rounded-xl -mt-3 bg-[#0f0f0f] text-white text-center text-sm p-1">
          Let your Assets Earn for You
        </p>
      </div>

      {/* Investment Section */}
      <section className="lg:-mt-20">
        <div ref={firstCardsRef} className="w-full flex justify-center items-center md:gap-[25%] ">
          <div className="flex flex-col md:-mt-5">
            <div className="w-full flex justify-end">
              <img src="/arrowl.svg" alt="Left arrow" className="w-5" />
            </div>
            <div className="text-center md:mr-3 text-white md:p-2 bg-[#191919] rounded-xl h-10 w-32 p-1 md:w-40 tracking-tighter text-xs md:text-[16px] md:h-14">
              Crypto Index Fund
              <p className="text-green-400">12.9%</p>
            </div>
          </div>
          <div className="flex flex-col md:-mt-5">
            <div className="w-full flex">
              <img src="/arrowr.svg" alt="Right arrow" className="w-5" />
            </div>
            <div className="text-center md:mr-3 text-white md:p-2 bg-[#191919] rounded-xl h-10 w-32 p-1 md:w-40 tracking-tighter text-xs md:text-[16px] md:h-14">
              Memecoins Basket
              <p className="text-green-400">879.71%</p>
            </div>
          </div>
        </div>

        <div ref={headingRef} className="mt-5 text-center">
          <div className="md:text-[50px] text-[28px] font-[980] text-white">
            <p>One Click ETFs</p>
            <p className="-mt-5">& AI Strategies</p>
          </div>
          <p className="text-[#999999] text-[18px] mt-2">
            Invest in index funds, thematic baskets, & Quant strategies, or <br />
            create your own. All on-chain.
          </p>
        </div>

        <div ref={secondCardsRef} className="flex items-center justify-between">
          <div className="flex md:w-[70%] mx-auto justify-between items-center">
            <div className="flex flex-col lg:-mt-60 ml-5">
              <div className="w-full flex justify-end">
                <img src="/arrowl.svg" alt="Left arrow" className="w-5" />
              </div>
              <div className="text-center md:mr-3 text-white md:p-2 bg-[#191919] rounded-xl h-10 w-32 p-1 md:w-40 tracking-tighter text-xs md:text-[16px] md:h-14">
                US Coins ETF
                <p className="text-green-400">63.49%</p>
              </div>
            </div>
            <div className="flex flex-col lg:-mt-60 mr-5">
              <div className="w-full flex">
                <img src="/arrowr.svg" alt="Right arrow" className="w-5" />
              </div>
              <div className="text-center md:mr-3 text-white md:p-2 bg-[#191919] rounded-xl h-10 w-32 p-1 md:w-40 tracking-tighter text-xs md:text-[16px] md:h-14">
                ETH Oscillator Agent
                <p className="text-green-400">37.82%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[url(/down.svg)] bg-no-repeat w-full bg-cover h-[200px] -mt-8  overflow-hidden">
        <div ref={footerRef} className="flex mt-10 items-center justify-center gap-4">
          <a href="/waitlist" ><AnimatedButton txt={'Join Waitlist'}/></a>
          <a href="https://x.com/coinharbourxyz" target="_blank">
          <button className="md:w-42 w-36 text-center text-xs md:text-[16px] flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3">
            <p>Follow us on X</p>
            <div className="bg-black rounded-4xl p-1">
              <img src="/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
            </div>
          </button>
          </a>
         
        </div>
      </footer>

      <style>{`
        .rotate-img {
          transition: transform 0.3s ease;
        }
        button:hover .rotate-img {
          transform: rotate(45deg);
        }
      `}</style>
    </main>
  );
};

export default Home;


