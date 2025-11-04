'use client'

import { motion } from 'framer-motion'
import React from "react"
import { renderColoredYaml } from '../helpers/renderColoredYaml'

const DevOpsCodePreview = () => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [typedText, setTypedText] = React.useState('')

    const fullCode = `# kubernetes/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wesa-api
  namespace: production
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  selector:
    matchLabels:
      app: wesa-api
  template:
    metadata:
      labels:
        app: wesa-api
    spec:
      containers:
      - name: api
        image: wesa/api:v1.2.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"`

    const initialCode = `# kubernetes/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wesa-api
  namespace: production`

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
                    {/* Window chrome - macOS traffic lights and filename */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono ml-2">deployment.yml</span>
                    </div>

                    <motion.div
                        className="relative overflow-y-hidden rounded-2xl bg-gray-950/50 px-5 pt-10 ring-2 ring-inset ring-black/50"
                        animate={{
                            height: isHovered ? '25.2rem' : '10rem'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                    >
                        <div className="text-[12px] space-y-1 text-gray-400 font-mono">
                            {renderColoredYaml(displayCode)}
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

export default DevOpsCodePreview;
