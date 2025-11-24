import { motion } from "framer-motion";

export default function Logo({ size = 64, className = "", title = "Bogus Resume logo" }) {
  const stroke = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      aria-label={title}
      role="img"
    >
      {/* Monogram (B + R) */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        style={{ display: "block" }}
      >
        {/* Background circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke="#000"
          strokeWidth="4"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Letter B */}
        <motion.path
          d="M32 25 L32 75 M32 25 L48 25 Q58 25 58 37.5 Q58 50 48 50 L32 50 M32 50 L48 50 Q58 50 58 62.5 Q58 75 48 75 L32 75"
          stroke="#000"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={stroke}
          initial="hidden"
          animate="visible"
        />

        {/* Letter R - diagonal leg from center of B */}
        <motion.path
          d="M48 50 L65 75"
          stroke="#000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={stroke}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.35 }}
        />
      </motion.svg>

      {/* Text block */}
      <div className="leading-tight text-left" style={{ lineHeight: 1 }}>
        <motion.div
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-extrabold text-[18px]"
          style={{ color: "#000" }}
        >
          Bogus
        </motion.div>

        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-[12px] uppercase tracking-wide font-medium"
          style={{ color: "#000" }}
        >
          Resume
        </motion.div>
      </div>
    </motion.div>
  );
}