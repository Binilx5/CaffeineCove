import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Coffee, Pizza, Cookie } from "phosphor-react"
import { Croissant } from 'lucide-react'

// Luxury Minimal Background
const LuxuryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0EA] via-[#F8F5F0] to-[#FAF7F2]" />
      
      {/* Elegant corner frames - top left */}
      <motion.div
        className="absolute top-8 sm:top-12 left-8 sm:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M0 0 L0 24 M0 0 L24 0" stroke="#6F4E37" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Top right */}
      <motion.div
        className="absolute top-8 sm:top-12 right-8 sm:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M48 0 L48 24 M48 0 L24 0" stroke="#6F4E37" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Bottom left */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M0 48 L0 24 M0 48 L24 48" stroke="#6F4E37" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Bottom right */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M48 48 L48 24 M48 48 L24 48" stroke="#6F4E37" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Subtle center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(200, 164, 113, 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

interface ReloadLoaderProps {
  onComplete?: () => void
  duration?: number
}

const ReloadLoader: React.FC<ReloadLoaderProps> = ({ onComplete, duration = 500 }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              onComplete?.()
            }, 1000)
          }, 500)
          return 100
        }
        return prev + 2.5
      })
    }, duration / 100)

    return () => clearInterval(interval)
  }, [onComplete, duration])

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen z-[99999999999] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1
      }}
      transition={{
        duration: isExiting ? 1 : 0,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {/* Luxury Background */}
      <LuxuryBackground />

      {/* Main Content - Perfectly Centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-6 sm:px-8">
          
          {/* Centered Content Container */}
          <div className="flex flex-col items-center space-y-16 sm:space-y-20 md:space-y-24">
            
            {/* Brand Name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-light text-coffee tracking-[0.25em] uppercase mb-4">
                Caffeine Cove
              </h1>
              <motion.div
                className="w-20 h-px bg-coffee/40 mx-auto mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.p
                className="text-[10px] sm:text-xs text-coffee/35 font-poppins tracking-[0.35em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Premium Coffee Experience
              </motion.p>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              className="w-full flex flex-col items-center space-y-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Percentage - Smaller Size */}
              <motion.div
                animate={{ scale: progress === 100 ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-outfit font-extralight text-coffee tabular-nums leading-none">
                    {Math.round(progress)}
                  </span>
                  <span className="text-3xl sm:text-4xl font-outfit font-extralight text-coffee/50 ml-2">
                    %
                  </span>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-full max-w-md">
                <div className="relative h-px bg-coffee/12">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C8A471] to-[#6F4E37]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Food & Drink Icons */}
              <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6">
                {/* Coffee */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Coffee size={32} color="#6F4E37" />
                </motion.div>

                {/* Pizza */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Pizza size={32} color="#6F4E37" />
                </motion.div>

                {/* Cookie */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Cookie size={32} color="#6F4E37" />
                </motion.div>

                {/* Coffee Bean - New SVG */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6F4E37" viewBox="0 0 256 256">
                    <path d="M211.75,44.25C195,27.47,170.37,20.79,142.46,25.44c-26.91,4.49-53.87,19.09-75.9,41.12s-36.63,49-41.12,75.9c-4.65,27.91,2,52.51,18.81,69.29C57.54,225.05,75.75,232,96.62,232a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C235.21,85.63,228.53,61,211.75,44.25ZM77.87,77.87C102.56,53.19,133,39.93,159.15,39.93a62.26,62.26,0,0,1,29,6.67A108.48,108.48,0,0,0,157.1,63.54c-19.2,15.16-31.63,36.32-36.94,62.89-9.72,48.58-44.7,65.18-67.48,70.84C28.71,168.76,39.4,116.35,77.87,77.87ZM178.13,178.13c-34.69,34.68-80.71,46.78-110.32,31.27A108.72,108.72,0,0,0,98.9,192.46c19.2-15.16,31.63-36.32,36.94-62.89,9.72-48.58,44.7-65.18,67.48-70.84C227.29,87.24,216.6,139.65,178.13,178.13Z"></path>
                  </svg>
                </motion.div>

                {/* Croissant */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Croissant size={32} color="#6F4E37" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ReloadLoader