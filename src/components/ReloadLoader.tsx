import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import coffeeMachineImg from "../assets/coffeebg2.png"
import logoImg from "../assets/logo.png"

// Coffee machine image component
const CoffeeMachineImage = ({ progress }: { progress: number }) => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Coffee Machine Image */}
      <div className="relative">
        <img 
          src={coffeeMachineImg} 
          alt="Coffee Machine" 
          className="w-96 h-96 object-contain"
        />
      </div>
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
        return prev + 3
      })
    }, duration / 100)

    return () => clearInterval(interval)
  }, [onComplete, duration])

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800 z-[99999999999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? "-100vh" : 0 }}
      transition={{ duration: isExiting ? 0.8 : 0, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center text-amber-50">
        {/* Cafe Logo */}
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src={logoImg} 
            alt="Caffeine Cove Logo" 
            className="w-48 h-auto mx-auto mb-4 filter brightness-0 saturate-100"
            style={{
              filter: 'brightness(0) saturate(100%) invert(84%) sepia(18%) saturate(425%) hue-rotate(347deg) brightness(102%) contrast(96%)'
            }}
          />
          <p className="text-lg md:text-xl font-light tracking-wide"
             style={{ color: '#F3E8D3' }}>
            Brewing your perfect experience...
          </p>
        </motion.div>
        
        <CoffeeMachineImage progress={progress} />
        
        <div className="mt-1 text-3xl font-bold"
             style={{ color: '#F3E8D3' }}>
          {progress}%
        </div>
        
        {/* Simple sleek progress bar */}
        <div className="mt-1 w-80 relative">
          {/* Clean progress container - made thicker */}
          <div className="relative h-5 bg-amber-900/30 rounded-full overflow-hidden border border-amber-700/20">
            {/* Progress fill - dark coffee to caramel gradient */}
            <motion.div
              className="h-full bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ width: { duration: 0.3, ease: "easeOut" } }}
            />
            
            {/* Stage divider lines inside progress bar */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* 25% line for Grinding */}
              <div className="absolute top-0 h-full w-0.5 bg-amber-800/60" style={{ left: '25%' }}></div>
              {/* 50% line for Brewing */}
              <div className="absolute top-0 h-full w-0.5 bg-amber-800/60" style={{ left: '50%' }}></div>
              {/* 75% line for Frothing */}
              <div className="absolute top-0 h-full w-0.5 bg-amber-800/60" style={{ left: '75%' }}></div>
            </div>
          </div>
          
          {/* Stage compartments with words centered in their sections */}
          <div className="absolute -bottom-8 left-0 right-0 flex text-xs"
               style={{ color: '#F3E8D3' }}>
            
            {/* Grinding compartment - centered in 0-25% */}
            <div className="flex-1 flex justify-center items-center" style={{ width: '25%' }}>
              <motion.span animate={{ opacity: progress >= 25 ? 1 : 0.4 }}>☕ Grinding</motion.span>
            </div>
            
            {/* Brewing compartment - centered in 25-50% */}
            <div className="flex-1 flex justify-center items-center" style={{ width: '25%' }}>
              <motion.span animate={{ opacity: progress >= 50 ? 1 : 0.4 }}>🫘 Brewing</motion.span>
            </div>
            
            {/* Frothing compartment - centered in 50-75% */}
            <div className="flex-1 flex justify-center items-center" style={{ width: '25%' }}>
              <motion.span animate={{ opacity: progress >= 75 ? 1 : 0.4 }}>🥛 Frothing</motion.span>
            </div>
            
            {/* Ready compartment - centered in 75-100% */}
            <div className="flex-1 flex justify-center items-center" style={{ width: '25%' }}>
              <motion.span animate={{ opacity: progress >= 100 ? 1 : 0.4 }}>✨ Ready!</motion.span>
            </div>
          </div>
        </div>
        
        {/* Dynamic brewing message */}
        <motion.p
          className="mt-12 text-center max-w-md text-base font-medium"
          style={{ color: '#F3E8D3' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {progress < 25 && "Selecting premium beans..."}
          {progress >= 25 && progress < 50 && "Grinding to perfection..."}
          {progress >= 50 && progress < 75 && "Extracting rich flavors..."}
          {progress >= 75 && progress < 100 && "Adding the perfect foam..."}
          {progress >= 100 && "Your perfect cup is ready! ☕"}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default ReloadLoader