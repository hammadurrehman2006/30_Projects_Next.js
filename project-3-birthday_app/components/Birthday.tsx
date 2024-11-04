'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FaBirthdayCake} from 'react-icons/fa'
import { GiBalloons } from 'react-icons/gi'
import { setTimeout } from 'timers/promises'

type BirthdayProps = {
  name: string
  age: number
  birthdayMessage: string
}

type ConfettiProps = {
  width: number
  height: number
}

const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })

const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
const balloonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE']

const Birthday: React.FC<BirthdayProps> = ({ name, age, birthdayMessage }) => {
  const [candlesLit, setCandlesLit] = useState<number>(0)
  const [balloonsPoppedCount, setBalloonsPoppedCount] = useState<number>(0)
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<ConfettiProps>({ width: 0, height: 0 })
  const [celebrating, setCelebrating] = useState<boolean>(false)
  const totalCandles = 5
  const totalBalloons = 5

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (candlesLit === totalCandles && balloonsPoppedCount === totalBalloons) {
      setShowConfetti(true)
    }
  }, [candlesLit, balloonsPoppedCount])

  const lightCandle = (index: number) => {
    if (index === candlesLit) {
      setCandlesLit(prev => prev + 1)
    }
  }

  const popBalloon = (index: number) => {
    if (index === balloonsPoppedCount) {
      setBalloonsPoppedCount(prev => prev + 1)
    }
  }
  const celebrate = () => {
    setCelebrating(true)
    setShowConfetti(true)
  
    // Stop confetti after 4 seconds
    window.setTimeout(() => setShowConfetti(false), 4000)
  
    const interval = setInterval(() => {
      setCandlesLit(prev => {
        if (prev < totalCandles) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 500)
  }
  

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="mx-auto overflow-hidden transition-all shadow-blue-600 shadow-lg duration-300 ease-in-out hover:shadow-xl border-2 border-black">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-black">Happy {age}th Birthday!🎉</CardTitle>
            <CardDescription className="text-2xl font-semibold text-gray-600">{name}</CardDescription>
            <p className="text-lg text-gray-500">{birthdayMessage}</p>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Light the candles:</h3>
              <div className="flex justify-center space-x-2">
                {[...Array(totalCandles)].map((_, index) => (
                  <AnimatePresence key={index}>
                    {(celebrating && index <= candlesLit) || (!celebrating && index < candlesLit) ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5, delay: celebrating ? index * 0.5 : 0 }}
                      >
                        <FaBirthdayCake
                          className={`w-8 h-8 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                          style={{ color: candleColors[index % candleColors.length] }}
                          onClick={() => lightCandle(index)}
                        />
                      </motion.div>
                    ) : (
                      <FaBirthdayCake
                        className="w-8 h-8 text-gray-300 cursor-pointer hover:scale-110"
                        onClick={() => lightCandle(index)}
                      />
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Pop the balloons:</h3>
              <div className="flex justify-center space-x-2">
                {[...Array(totalBalloons)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    animate={{ scale: index < balloonsPoppedCount ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GiBalloons
                      className={`w-8 h-8 cursor-pointer hover:scale-110`}
                      style={{ color: index < balloonsPoppedCount ? 'gray' : balloonColors[index % balloonColors.length] }}
                      onClick={() => popBalloon(index)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button onClick={celebrate} className="bg-blue-600 text-white hover:bg-blue-700">
              Celebrate 🎉
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      {showConfetti && (
        <DynamicConfetti
          width={windowSize.width}
          height={windowSize.height}
          colors={confettiColors}
        />
      )}
    </div>
  )
}

export default Birthday
