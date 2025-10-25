export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-[calc(100vh-80px)]">
      {children}
    </main>
  )
}
