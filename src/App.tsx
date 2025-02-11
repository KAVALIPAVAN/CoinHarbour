
import { useEffect, useRef } from "react";
import logo from "../public/logo.png";
import FloatingDots from "./animation";
import AnimatedButton from "./components/AnimatedButton";
import gsap from "gsap";

const App: React.FC = () => {
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
        duration: 1.5,
        stagger: 0.3,
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
          duration: 1.2,
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
          duration: 0.8,
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
          duration: 1.2,
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
          duration: 1,
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
          duration: 1,
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
          duration: 0.8,
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
    <main className="bg-[#050505] min-h-screen overflow-hidden">
      {/* Background Section */}
      <div className="bg-[url(../public/up.svg)] flex md:justify-between relative w-full h-[30%] bg-cover bg-no-repeat">
        <div ref={bgLeftRef}>
          <img
            src="../public/left.svg"
            alt="Left design"
            className="lg:-mt-52 lg:-ml-28 md:-m-16 md:ml-0 w-[950px] md:w-[800px]"
          />
        </div>
        <img src={logo} alt="Logo" className="w-36 absolute top-7 mx-6 md:mx-24" />
        <div ref={bgRightRef} className="lg:-mr-20">
          <img
            src="../public/right.svg"
            alt="Right design"
            className="lg:-mt-52 lg:-mr-32 md:-m-16 md:mr-0 w-[950px] md:w-[800px]"
          />
        </div>
      </div>

      {/* Floating Dots Section */}
      <div ref={floatingDotsRef} className="flex flex-col items-center -mt-18">
        <FloatingDots>
          <div className="bg-[url(../public/glow.svg)] h-[120px] bg-center bg-contain bg-no-repeat mt-10 flex justify-center items-center">
            <img src="../public/minilogo.svg" alt="Mini logo" className="w-[45px] h-[45px]" />
          </div>
        </FloatingDots>
        <p ref={subtitleRef} className="rounded-xl bg-[#0f0f0f] text-white text-center text-sm p-1">
          Let your Assets Earn for You
        </p>
      </div>

      {/* Investment Section */}
      <section className="lg:-mt-20">
        <div ref={firstCardsRef} className="w-full flex justify-center items-center md:gap-[25%] overflow-hidden">
          <div className="flex flex-col">
            <div className="w-full flex justify-end">
              <img src="../public/arrowl.svg" alt="Left arrow" className="w-5" />
            </div>
            <div className="text-center md:mr-3 text-white md:p-2 bg-[#191919] rounded-xl w-40 h-14">
              Crypto Index Fund
              <p className="text-green-400">12.9%</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full flex">
              <img src="../public/arrowr.svg" alt="Right arrow" className="w-5" />
            </div>
            <div className="text-center md:ml-3 text-white p-2 bg-[#191919] rounded-xl w-44 h-14">
              Memecoins Basket
              <p className="text-green-400">879.71%</p>
            </div>
          </div>
        </div>

        <div ref={headingRef} className="mt-2 text-center">
          <div className="md:text-5xl/snug text-3xl font-bold text-white">
            <h1>One Click ETFs</h1>
            <h1>& AI Strategies</h1>
          </div>
          <p className="text-[#999999] text-[18px] mt-2">
            Invest in index funds, thematic baskets, & Quant strategies, or <br />
            create your own. All on-chain.
          </p>
        </div>

        <div ref={secondCardsRef} className="flex items-center justify-between">
          <div className="flex md:w-[70%] mx-auto justify-between items-center">
            <div className="flex flex-col xl:-mt-32 md:ml-16">
              <div className="w-full flex justify-end">
                <img src="../public/arrowl.svg" alt="Left arrow" className="w-5" />
              </div>
              <div className="text-center mr-3 text-white p-2 bg-[#191919] rounded-xl w-32 h-14">
                US Coins ETF
                <p className="text-green-400">63.49%</p>
              </div>
            </div>
            <div className="flex flex-col  xl:-mt-32">
              <div className="w-full flex">
                <img src="../public/arrowr.svg" alt="Right arrow" className="w-5" />
              </div>
              <div className="text-center ml-3 text-white p-2 bg-[#191919] rounded-xl w-44 h-14">
                ETH Oscillator Agent
                <p className="text-green-400">37.82%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[url(../public/down.svg)] bg-no-repeat w-full bg-cover h-[200px] -mt-5 overflow-hidden">
        <div ref={footerRef} className="flex mt-10 items-center justify-center gap-4">
          <AnimatedButton />
          <button className="w-42 text-center flex items-center justify-center cursor-pointer h-12 rounded-4xl gap-2 bg-[#0f0f0f] text-[#a1e00d] p-3">
            <p>Follow us on X</p>
            <div className="bg-black rounded-4xl p-1">
              <img src="../public/cross.svg" alt="Cross icon" className="rotate-img text-[20px]" />
            </div>
          </button>
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

export default App;


