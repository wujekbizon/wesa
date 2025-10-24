export default function CustomersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex relative h-[calc(100vh-80px)] justify-center w-full">
      {children}
    </main>
  )
}
