import { Lock, BarChart3, Users, Bug, Zap, Layers, Shield, Database, GitBranch, TrendingUp } from "lucide-react"

export const methodology = [
  {
    icon: Users,
    title: "Business-First Thinking",
    description:
      "We understand your business model and growth trajectory before touching code.",
  },
  {
    icon: BarChart3,
    title: "Metrics-Driven Design",
    description:
      "Every architectural decision is informed by performance metrics and scalability projections.",
  },
  {
    icon: Lock,
    title: "Risk Mitigation",
    description:
      "We identify potential failure points early and implement graceful degradation strategies.",
  },
]

export const badges = [
  { value: "99.99%", label: "System Uptime" },
  { value: "10M+", label: "Users Supported" },
  { value: "60%", label: "Faster Deployments" },
]

export const challenges = [
  {
    title: "Scaling Bottlenecks",
    description:
      "Monolithic systems that break under load, requiring expensive vertical scaling.",
    solution:
      "We architect distributed microservices and implement auto-scaling to ensure smooth performance under any load.",
    icon: Zap,
  },
  {
    title: "Technical Debt",
    description:
      "Legacy code and quick fixes compound over time, making changes risky and slow.",
    solution:
      "We modernize codebases using modular refactoring and introduce CI/CD pipelines to reduce debt over time.",
    icon: Bug,
  },
  {
    title: "Team Friction",
    description:
      "Large codebases where changes conflict, slowing down development teams.",
    solution:
      "We enable domain-driven design and micro frontends to decouple workstreams and improve collaboration.",
    icon: Users,
  },
]

export  const capabilities = [
  {
    icon: Layers,
    title: "Scalable System Design",
    description: "Architectures that evolve seamlessly from MVP to enterprise scale.",
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "Security patterns, data protection, and compliance built in from day one.",
    color: "from-emerald-500/80 to-teal-500/80"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Systems designed for speed, throughput, and efficient scaling.",
    color: "from-slate-500/80 to-zinc-500/80"
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Solutions",
    description: "Adaptable architectures built for longevity and emerging technologies.",
    color: "from-purple-500/80 to-indigo-500/80"
  },
  {
    icon: GitBranch,
    title: "Microservices Expertise",
    description: "Distributed systems for independent scaling and continuous delivery.",
    color: "from-indigo-500/80 to-blue-500/80"
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Reliable modeling, storage, and real-time processing pipelines.",
    color: "from-slate-500/80 to-gray-500/80"
  }
];

export const technologies = [
  { name: "AWS / Azure / GCP", category: "Cloud Infrastructure", icon: "☁️" },
  { name: "Kubernetes & Docker", category: "Containerization", icon: "📦" },
  { name: "Redis & Kafka", category: "Caching & Messaging", icon: "⚡" },
  { name: "PostgreSQL & MongoDB", category: "Database Systems", icon: "🗄️" },
  { name: "GraphQL & REST", category: "API Design", icon: "🔌" },
  { name: "Terraform & CI/CD", category: "DevOps & Automation", icon: "🔧" }
];

export const PARTICLES = [
  { id: 0, left: "15%", top: "20%", duration: 12, delay: 0 },
  { id: 1, left: "85%", top: "15%", duration: 14, delay: 1 },
  { id: 2, left: "25%", top: "75%", duration: 10, delay: 2 },
  { id: 3, left: "70%", top: "60%", duration: 16, delay: 0.5 },
  { id: 4, left: "45%", top: "30%", duration: 11, delay: 3 },
  { id: 5, left: "60%", top: "85%", duration: 13, delay: 1.5 },
  { id: 6, left: "10%", top: "50%", duration: 15, delay: 2.5 },
  { id: 7, left: "90%", top: "40%", duration: 9, delay: 4 },
  { id: 8, left: "35%", top: "10%", duration: 14, delay: 0.8 },
  { id: 9, left: "75%", top: "90%", duration: 12, delay: 3.5 },
  { id: 10, left: "50%", top: "55%", duration: 11, delay: 1.2 },
  { id: 11, left: "20%", top: "65%", duration: 13, delay: 2.8 },
  { id: 12, left: "80%", top: "25%", duration: 10, delay: 4.2 },
  { id: 13, left: "40%", top: "80%", duration: 15, delay: 1.8 },
  { id: 14, left: "65%", top: "35%", duration: 12, delay: 3.2 },
];