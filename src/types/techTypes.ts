type TechVisualType =
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "python"
  | "rust"
  | "cpp"
  | "postgres"
  | "docker"
  | "kubernetes"

interface TechItem {
  name: string
  color: string
  description: string
  visual: TechVisualType
}

interface TechCategory {
  category: string
  items: TechItem[]
}

interface Chunk {
  id: number
  position: "source" | "transit" | "buffer" | "consumed"
}

interface Token {
  id: number
  text: string
  type: "text" | "code" | "data"
}

interface Message {
  role: "user" | "assistant"
  content: string
}

type Phase = "idle" | "training" | "trained" | "inference" | "complete"

interface Thread {
    id: number;
    x: number;
    y: number;
    color: string;
    active: boolean;
  }
  
  interface OwnedBox {
    id: number;
    scope: "scope1" | "scope2" | "scope3";
    transitioning: boolean;
  }
  
  interface AsyncTask {
    id: number;
    progress: number;
    status: "pending" | "running" | "complete";
    color: string;
  }
  
  type PhaseRust = "idle" | "coding" | "borrowcheck" | "compiling" | "running" | "complete";
  type DemoType = "threads" | "ownership" | "async";