import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import logoImg from "../assets/logo.png"

// Simple Perfect Loading Animation
const SimpleLoader = ({ progress }: { progress: number }) => {
  const [currentRotation, setCurrentRotation] = useState(0)
  const [isCompleting, setIsCompleting] = useState(false)
  const [completionRotation, setCompletionRotation] = useState(0)
  const [stoppedAt, setStoppedAt] = useState(0)
  
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setCurrentRotation(prev => {
          const newRotation = (prev + 6) % 360
          setStoppedAt(newRotation) // Keep track of where we stopped
          return newRotation
        })
      }, 25) // ~40fps
      
      return () => clearInterval(interval)
    } else if (progress === 100 && !isCompleting) {
      // Start completion animation from where we stopped
      setIsCompleting(true)
      setCompletionRotation(0) // Start completion progress from 0
      
      const completionInterval = setInterval(() => {
        setCompletionRotation(prev => {
          if (prev >= 360) {
            clearInterval(completionInterval)
            return 360
          }
          return prev + 8 // Faster completion
        })
      }, 16) // ~60fps for smooth completion
    }
  }, [progress, isCompleting, stoppedAt])
  
  return (
    <div className="flex items-center justify-center">
      {/* Simple Elegant Spinner */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-4 border-coffee/20 rounded-full"
        />
        
        {/* Always show the completion ring, but control its visibility */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: isCompleting 
              ? `conic-gradient(from ${stoppedAt}deg, #6F4E37 0deg, #6F4E37 ${completionRotation}deg, transparent ${completionRotation}deg, transparent 360deg)`
              : `conic-gradient(from ${stoppedAt}deg, #6F4E37 0deg, #6F4E37 45deg, transparent 45deg, transparent 360deg)`, // Show current spinner position
            borderRadius: '50%'
          }}
        >
          {/* Inner cutout to create ring effect */}
          <div className="absolute inset-1 bg-gradient-to-br from-soft-beige via-muted-sand to-marble-white rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}

// Enhanced Professional Background Elements
const ProfessionalBackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating coffee bean shapes */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${15 + (i % 4) * 20}%`
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{
            duration: 5 + (i * 0.4),
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-coffee/25 rounded-full shadow-sm" />
        </motion.div>
      ))}
      
      {/* Enhanced geometric patterns */}
      <div className="absolute top-1/5 left-1/5 opacity-8">
        <motion.div 
          className="w-40 h-40 sm:w-48 sm:h-48 border-2 border-coffee/8 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute bottom-1/5 right-1/5 opacity-8">
        <motion.div 
          className="w-32 h-32 sm:w-36 sm:h-36 border border-natural-wood/12 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Additional professional elements */}
      <div className="absolute top-1/2 left-1/6 opacity-6">
        <motion.div 
          className="w-6 h-6 sm:w-8 sm:h-8 border border-coffee/10 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute top-1/3 right-1/6 opacity-6">
        <motion.div 
          className="w-4 h-4 sm:w-6 sm:h-6 bg-natural-wood/15 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
  const [isCompleted, setIsCompleted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [completionFinished, setCompletionFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Set completed state and wait for completion animation
          setTimeout(() => {
            setIsCompleted(true)
            // Wait for circle completion animation to finish
            setTimeout(() => {
              setCompletionFinished(true)
              // Start exit animation after completion
              setTimeout(() => {
                setIsExiting(true)
                // Call onComplete after slide-up animation starts
                setTimeout(() => {
                  onComplete?.()
                }, 800) // Match the slide-up animation duration
              }, 300) // Brief pause after completion
            }, 1000) // Time for completion animation
          }, 100)
          return 100
        }
        return prev + 3
      })
    }, duration / 100)

    return () => clearInterval(interval)
  }, [onComplete, duration])

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-soft-beige via-muted-sand to-marble-white z-[99999999999]"
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isExiting ? 0 : 1,
        y: isExiting ? -window.innerHeight : 0
      }}
      transition={{ 
        duration: isExiting ? 0.8 : 0, 
        ease: isExiting ? [0.4, 0, 0.2, 1] : "linear"
      }}
    >
      {/* Professional Background Elements */}
      <ProfessionalBackgroundElements />
      
      {/* Enhanced Professional Texture Pattern */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(111, 78, 55, 0.12) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(200, 164, 113, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 50% 10%, rgba(111, 78, 55, 0.08) 0%, transparent 20%),
            radial-gradient(circle at 10% 80%, rgba(200, 164, 113, 0.06) 0%, transparent 25%)
          `,
          backgroundSize: '80px 80px, 120px 120px, 60px 60px, 100px 100px'
        }}
      />
      
      {/* Simple Main Container */}
      <div className="flex flex-col items-center justify-center space-y-6 px-6">
        
        {/* Simple Loading Animation and Percentage */}
        <motion.div 
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: isCompleted ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            scale: { duration: isCompleted ? 0.3 : 0.6 }
          }}
        >
          {/* Simple Perfect Loading Animation */}
          <SimpleLoader progress={progress} />
          
          {/* Clean Progress Percentage */}
          <motion.div 
            className="text-center"
            animate={{ 
              opacity: progress < 100 ? [0.8, 1, 0.8] : 1,
              scale: isCompleted ? 1.2 : 1
            }}
            transition={{
              opacity: { duration: 2, repeat: progress < 100 ? Infinity : 0, ease: "easeInOut" },
              scale: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-coffee tabular-nums font-outfit">
              {progress.toString().padStart(2, '0')}%
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Warm Café Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-coffee/5 via-transparent to-coffee/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-natural-wood/3 via-transparent to-walnut-brown/8 pointer-events-none" />
    </motion.div>
  )
}

export default ReloadLoader