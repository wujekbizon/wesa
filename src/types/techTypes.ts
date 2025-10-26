type TechVisualType = 'react' | 'nextjs' | 'vue' | 'tailwind' | 'typescript' | 'nodejs' | 'python' | 'rust' | 'cpp' | 'postgres' | 'docker' | 'kubernetes';

interface TechItem {
    name: string;
    color: string;
    description: string;
    visual: TechVisualType;
}

interface TechCategory {
    category: string;
    items: TechItem[];
}