import { Code2, Palette, Zap } from "lucide-react";

export const techCategories: TechCategory[] = [
    {
        category: 'Frontend',
        items: [
            {
                name: 'React',
                color: 'text-cyan-600',
                description: 'Component-based UI',
                visual: 'react'
            },
            {
                name: 'Next.js',
                color: 'text-gray-900',
                description: 'React framework',
                visual: 'nextjs'
            },
        ]
    },
    {
        category: 'Backend & Languages',
        items: [
            {
                name: 'TypeScript',
                color: 'text-blue-600',
                description: 'Typed superset',
                visual: 'typescript'
            },
            {
                name: 'Node.js',
                color: 'text-green-600',
                description: 'JavaScript runtime',
                visual: 'nodejs'
            },
            {
                name: 'Python',
                color: 'text-yellow-600',
                description: 'Versatile language',
                visual: 'python'
            },
            {
                name: 'Rust',
                color: 'text-orange-600',
                description: 'Memory-safe',
                visual: 'rust'
            },
            {
                name: 'C++',
                color: 'text-pink-600',
                description: 'High-performance',
                visual: 'cpp'
            },
        ]
    },
    {
        category: 'Infrastructure',
        items: [
            {
                name: 'PostgreSQL',
                color: 'text-blue-600',
                description: 'Relational database',
                visual: 'postgres'
            },
            {
                name: 'Docker',
                color: 'text-blue-600',
                description: 'Container platform',
                visual: 'docker'
            },
            {
                name: 'Kubernetes',
                color: 'text-cyan-600',
                description: 'Orchestration',
                visual: 'kubernetes'
            },
        ]
    }
]

export const trainingDataTokens = [
    { text: "Machine", type: "text" as const },
    { text: "learning", type: "text" as const },
    { text: "models", type: "text" as const },
    { text: "def", type: "code" as const },
    { text: "train", type: "code" as const },
    { text: "neural", type: "data" as const },
    { text: "network", type: "data" as const },
    { text: "AI", type: "text" as const },
    { text: "processes", type: "text" as const },
    { text: "data", type: "data" as const },
];

export const techStack = [
    {
      icon: Zap,
      title: 'Next.js 16',
      subtitle: 'The Foundation',
      features: [
        'Turbopack: 5-10x faster builds',
        '"use cache" for optimal performance',
        'React 19.2 with View Transitions',
        'Built-in SEO optimization'
      ],
      color: 'cyan',
      why: 'Blazing-fast development, optimal production performance'
    },
    {
      icon: Code2,
      title: 'React 19.2',
      subtitle: '+ TypeScript',
      features: [
        'Activity components for seamless UX',
        'Partial Pre-rendering',
        'Type-safe development',
        'Modern hooks & patterns'
      ],
      color: 'blue',
      why: 'Bulletproof code, faster iterations, fewer bugs'
    },
    {
      icon: Palette,
      title: 'Tailwind v4',
      subtitle: '+ Modern Tooling',
      features: [
        '5x faster builds',
        'CSS-first configuration',
        'Framer Motion animations',
        'Component libraries'
      ],
      color: 'purple',
      why: 'Rapid UI development, premium user experience'
    }
  ];

  export const metrics = [
    { label: 'Page Load', value: '<1s'},
    { label: 'Mobile-First', value: '100%' },
    { label: 'Time-to-Market', value: '3x' },
    { label: 'Conversion Boost', value: '+7%' }
  ];