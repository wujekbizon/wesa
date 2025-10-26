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

export const codeExampleTypescript = `function getUserData(id) {
  const user = fetchUser(id)
  return user.name.toUpperCase()
}`

export const outputLinesNode = [
  "<!DOCTYPE html>",
  "<html>",
  "  <head>",
  "    <title>Streaming Content</title>",
  '    <meta charset="utf-8">',
  "  </head>",
  "  <body>",
  "    <header>",
  "      <h1>Real-time Stream</h1>",
  "    </header>",
  "    <main>",
  "      <p>Content delivered as it arrives</p>",
  "    </main>",
  "  </body>",
  "</html>",
];

export const rustCodeLines = [
  "fn process_data(data: Vec<i32>) {",
  "  let shared = Arc::new(Mutex::new(data));",
  "  let handles: Vec<_> = (0..4)",
  "    .map(|_| thread::spawn(...))",
  "}",
];