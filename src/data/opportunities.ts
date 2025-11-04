import {
  LucideIcon,
  Briefcase,
  GitBranch,
  Users,
  Star,
  Package,
  Github,
  FileText,
  Code2,
  Shield,
  ArrowRight
} from 'lucide-react'

// TypeScript Interfaces
export interface Contribution {
  id: string
  type: string
  icon: LucideIcon
  description: string
}

export interface Role {
  id: string
  title: string
}

export interface Opportunity {
  id: string
  type: 'open-position' | 'community'
  title: string
  description: string
  icon: LucideIcon
  theme: 'gold' | 'purple'
  roles?: Role[]
  contributions?: Contribution[]
  ctaText: string
  ctaLink: string
  ctaIcon: LucideIcon
  ctaSecondary?: boolean
}

export interface CommunityStat {
  id: string
  label: string
  value: string
  icon: LucideIcon
}

// Opportunities Data
export const opportunities: Opportunity[] = [
  {
    id: 'open-positions',
    type: 'open-position',
    title: 'Open Positions',
    description: 'We\'re expanding our team. Looking for talented engineers who are passionate about AI, clean architecture, and building products that matter.',
    icon: Briefcase,
    theme: 'gold',
    roles: [
      { id: 'senior-frontend', title: 'Senior Frontend Engineer' },
      { id: 'backend-infra', title: 'Backend/Infrastructure Engineer' },
      { id: 'full-stack', title: 'Full-Stack Developer' },
      { id: 'devops', title: 'DevOps Specialist' },
      { id: 'ai-ml', title: 'AI/ML Engineer' },
      { id: 'solutions-architect', title: 'Solutions Architect' }
    ],
    ctaText: 'View Open Roles',
    ctaLink: '/careers',
    ctaIcon: ArrowRight,
    ctaSecondary: false
  },
  {
    id: 'community-contributors',
    type: 'community',
    title: 'Community Contributors',
    description: 'Join our open-source community. Contribute to projects, share knowledge, and collaborate with developers worldwide.',
    icon: GitBranch,
    theme: 'purple',
    contributions: [
      {
        id: 'maintainers',
        type: 'Open Source Maintainers',
        icon: Github,
        description: 'Help maintain and improve our public repositories'
      },
      {
        id: 'writers',
        type: 'Technical Writers',
        icon: FileText,
        description: 'Create documentation, tutorials, and guides'
      },
      {
        id: 'developers',
        type: 'Package Developers',
        icon: Code2,
        description: 'Build and publish reusable components'
      },
      {
        id: 'reviewers',
        type: 'Code Reviewers',
        icon: Shield,
        description: 'Review PRs and ensure code quality'
      }
    ],
    ctaText: 'Join Community',
    ctaLink: 'https://github.com/wesa',
    ctaIcon: Github,
    ctaSecondary: true
  }
]

// Community Statistics
export const communityStats: CommunityStat[] = [
  {
    id: 'team-members',
    label: 'Team Members',
    value: '50+',
    icon: Users
  },
  {
    id: 'contributors',
    label: 'Contributors',
    value: '200+',
    icon: GitBranch
  },
  {
    id: 'github-stars',
    label: 'GitHub Stars',
    value: '15K+',
    icon: Star
  },
  {
    id: 'open-packages',
    label: 'Open Packages',
    value: '30+',
    icon: Package
  }
]
