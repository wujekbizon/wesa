import { Heart, Sparkles, Target } from "lucide-react"

export const hq = {
  name: "WESA HQ - Poland",
  x: 52,
  y: 40,
  color: "#ff0000",
}

export const clients = [
  {
    name: "Poland",
    project: "Educational Software",
    x: 48,
    y: 50,
    color: "#ff5100",
  },
  {
    name: "USA",
    project: "Digital interfaces for EVs",
    x: 15,
    y: 44,
    color: "#894e89",
  },
  {
    name: "Australia",
    project: "Intelligent AI agents tools",
    x: 78,
    y: 72,
    color: "#FFD700",
  },
]

export const keyFeatures = [
  {
    icon: Target,
    title: "Smart Learning System",
    description: "Adaptive testing platform that evolves with each learner",
    highlight: "10500+ questions",
  },
  {
    icon: Heart,
    title: "Medical Procedures",
    description: "Step-by-step guides for critical healthcare situations",
    highlight: "31 procedures",
  },
  {
    icon: Sparkles,
    title: "Progress Tracking",
    description: "Real-time analytics and performance insights",
    highlight: "Live data",
  },
]

export const stats = [
  { label: "Questions", value: 10500, color: "text-amber-400", suffix: "+" },
  { label: "Procedures", value: 31, color: "text-orange-400" },
  { label: "Users", value: 4500, color: "text-yellow-400", suffix: "+" },
]
