import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// PlusMinusIcon Component
interface PlusMinusIconProps {
  active: boolean;
}

const PlusMinusIcon: React.FC<PlusMinusIconProps> = ({ active }) => {
  const containerStyle = {
    position: "relative" as const,
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };

  const lineStyle = {
    position: "absolute" as const,
    top: "50%",
    left: 0,
    width: "100%",
    height: "3px",
  };

  // Horizontal line (the "before" element)
  const horizontalAnimation = active
    ? { 
        rotate: -90, 
        opacity: 0, 
        backgroundColor: "#ADFF00", 
        transition: { duration: 0.35 } 
      }
    : { 
        rotate: 0, 
        opacity: 1, 
        backgroundColor: "#333", 
        transition: { duration: 0.35 } 
      };

  // Vertical line (the "after" element) animates with keyframes for multiple rounds.
  // Inactive: rotate(90). Active: animate from 90 to -720 degrees (a total change of -810°),
  // which is equivalent to 2 full spins plus a -90° final change (so the line becomes horizontal).
  const verticalAnimation = active
    ? {
        rotate: [90, -270, -540, -720],
        backgroundColor: "#ADFF00",
        transition: { duration: 0.35, times: [0, 0.33, 0.66, 1] },
      }
    : {
        rotate: 90,
        backgroundColor: "#333",
        transition: { duration: 0.35 },
      };

  return (
    <motion.div style={containerStyle}>
      <motion.span style={lineStyle} animate={horizontalAnimation} />
      <motion.span style={lineStyle} animate={verticalAnimation} />
    </motion.div>
  );
};

// FAQAccordion Component & Data
interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    number: "01",
    question: "What is CoinHarbour, and how does it work?",
    answer:
      "CoinHarbour is an automated investment platform offering exclusive access to algorithm-driven portfolios and curated investment baskets. Our technology manages your investments effortlessly, ensuring optimized returns.",
  },
  {
    id: "02",
    number: "02",
    question: "Is CoinHarbour suitable for beginners in investing?",
    answer: "Yes, CoinHarbour is designed to be accessible for both beginners and experienced investors.",
  },
  {
    id: "03",
    number: "03",
    question: "How does CoinHarbour ensure the safety of my investments?",
    answer:
      "We use advanced risk management strategies, open source contracts, and audited expertise to safeguard and grow your assets. Your wealth is safe in our harbour.",
  },
  {
    id: "04",
    number: "04",
    question: "Do I need to pay any upfront fees or sign up for a subscription?",
    answer: "Contact our support team for detailed information about our fee structure.",
  },
  {
    id: "05",
    number: "05",
    question: "Can I withdraw my money anytime with CoinHarbour?",
    answer: "Yes, you have full control over your investments and can withdraw at any time.",
  },
  {
    id: "06",
    number: "06",
    question: "How much time does it take to start investing with CoinHarbour?",
    answer: "The process is quick and straightforward, typically taking just a few minutes to get started.",
  },
  {
    id: "07",
    number: "07",
    question: "Is CoinHarbour non-custodial?",
    answer: "Please refer to our documentation for detailed information about our custody model.",
  },
  {
    id: "08",
    number: "08",
    question: "Can I connect my crypto wallet to CoinHarbour?",
    answer: "Yes, we support various crypto wallet connections for seamless integration.",
  },
];

export default function FAQAccordion() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  // Group items: 1–4 in group1, 5–8 in group2
  const group1 = faqData.slice(0, 4);
  const group2 = faqData.slice(4);

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Parent flex container for two groups */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Group 1 */}
          <div className="flex-1 flex flex-col gap-6">
            {group1.map((item) => (
              <motion.div key={item.id} className="rounded-lg bg-zinc-900/50 p-6">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${activeId === item.id ? "text-[#ADFF00]" : "text-zinc-500"}`}>
                      {item.number}
                    </span>
                    <h3 className={`text-left text-lg ${activeId === item.id ? "text-[#ADFF00]" : "text-white"}`}>
                      {item.question}
                    </h3>
                  </div>
                  <PlusMinusIcon active={activeId === item.id} />
                </button>
                <AnimatePresence mode="wait">
                  {activeId === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-zinc-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {/* Group 2 */}
          <div className="flex-1 flex flex-col gap-6">
            {group2.map((item) => (
              <motion.div key={item.id} className="rounded-lg bg-zinc-900/50 p-6">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${activeId === item.id ? "text-[#ADFF00]" : "text-zinc-500"}`}>
                      {item.number}
                    </span>
                    <h3 className={`text-left text-lg ${activeId === item.id ? "text-[#ADFF00]" : "text-white"}`}>
                      {item.question}
                    </h3>
                  </div>
                  <PlusMinusIcon active={activeId === item.id} />
                </button>
                <AnimatePresence mode="wait">
                  {activeId === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-zinc-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
