export const fullCodeReact = `
import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
`

export const fullCodeNext = `// app/products/page.tsx
export default async function Products() {
  const res = await fetch('/api/products')
  const products = await res.json()
  
  return <ProductList items={products} />
}`