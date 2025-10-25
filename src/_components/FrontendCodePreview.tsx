'use client'

import { motion } from 'framer-motion'
import React from "react"
import { renderColoredCode } from '../helpers/renderColoredCode'

const FrontendCodePreview = () => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [typedText, setTypedText] = React.useState('')

    const fullCode = `import React from 'react'
import { Button } from '@/components'

export default function App() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  return (
    <div className="container">
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>
        Click me
      </Button>
    </div>
  )
}`

    const initialCode = `import React from 'react'
import { Button } from '@/components'

export default function App() {
  return <Button /> `

    React.useEffect(() => {
        if (!isHovered) {
            setTypedText('')
            return
        }

        let currentIndex = 0
        const startTyping = () => {
            const interval = setInterval(() => {
                if (currentIndex <= fullCode.length) {
                    setTypedText(fullCode.slice(0, currentIndex))
                    currentIndex++
                } else {
                    currentIndex = 0
                }
            }, 30)
            return interval
        }

        const interval = startTyping()
        return () => clearInterval(interval)
    }, [isHovered, fullCode])

    const displayCode = isHovered ? typedText : initialCode

    

    return (
        <div
            className="pointer-events-auto w-full relative select-none cursor-pointer"
            style={{
                height: isHovered ? '26rem' : '10rem',
                transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute w-full inset-x-0 top-0 isolate overflow-visible px-10 pt-8 z-20"
                animate={{
                    y: isHovered ? -60 : 0
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                }}
                style={{ transform: 'scale(0.98)' }}
            >
                <motion.div
                    className="rounded-3xl bg-gray-800 p-1 relative"
                    animate={{
                        height: isHovered ? '26rem' : '10.5rem',
                        opacity: isHovered ? 1 : 0.5
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{
                        boxShadow: '0 1px 0 0 rgb(255 255 255 / 0.05) inset, 0px 2px 5px 0 rgb(0 0 0 / 0.40)',
                        backgroundImage: 'linear-gradient(180deg, rgb(255 255 255 / 0.05) 0%, rgb(255 255 255 / 0) 67.19%)'
                    }}
                >

                    <motion.div
                        className="relative overflow-y-hidden rounded-2xl bg-gray-950/50 px-5 pt-4 ring-2 ring-inset ring-black/50"
                        animate={{
                            height: isHovered ? '25.2rem' : '10rem'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                    >
                        <div className="text-[12px] space-y-1 text-gray-400">
                            {renderColoredCode(displayCode)}
                            {isHovered && typedText.length > 0 && typedText.length < fullCode.length && (
                                <span className="inline-block w-1.5 h-3.5 bg-amber-500 animate-pulse ml-0.5"></span>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FrontendCodePreview;