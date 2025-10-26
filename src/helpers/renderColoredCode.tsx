export const renderColoredCode = (code: string) => {
    const lines = code.split('\n')
    return lines.map((line, i) => {
        // Skip empty lines
        if (line.trim().length === 0) {
            return <div key={i}>&nbsp;</div>
        }

        const indent = line.search(/\S/)
        const spaces = '\u00A0'.repeat(Math.max(0, indent))

        // Import statements
        if (line.includes('import')) {
            // Check if line is complete enough to parse
            if (!line.includes('from') || line.trim().endsWith('from')) {
                return (
                    <div key={i}>
                        <span className="text-gray-500">{line}</span>
                    </div>
                )
            }
            
            const parts = line.split(' ')
            return (
                <div key={i}>
                    <span className="text-purple-400">import</span>{' '}
                    {line.includes('{') ? (
                        <>
                            <span className="text-yellow-400">{parts.slice(1, -2).join(' ')}</span>{' '}
                            <span className="text-purple-400">from</span>{' '}
                            <span className="text-green-400">{parts[parts.length - 1]}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-cyan-400">{parts[1]}</span>{' '}
                            <span className="text-purple-400">from</span>{' '}
                            <span className="text-green-400">{parts[3]}</span>
                        </>
                    )}
                </div>
            )
        }

        // Export default function
        if (line.includes('export default function')) {
            if (!line.includes('()')) {
                return (
                    <div key={i} className="pt-2">
                        <span className="text-gray-500">{line}</span>
                    </div>
                )
            }
            return (
                <div key={i} className="pt-2">
                    <span className="text-blue-400">export default function</span>{' '}
                    <span className="text-yellow-400">{line.split(' ')[3]}</span>
                </div>
            )
        }

        // Function declarations (generic)
        if (line.match(/^\s*function\s+\w+/)) {
            const match = line.match(/function\s+(\w+)/)
            const funcName = match ? match[1] : ''
            return (
                <div key={i} className="pt-2">
                    {spaces}
                    <span className="text-blue-400">function</span>{' '}
                    <span className="text-yellow-400">{funcName}</span>
                    <span className="text-white">{line.substring(line.indexOf(funcName) + funcName.length)}</span>
                </div>
            )
        }

        // Const declarations with useState
        if (line.includes('const') && line.includes('useState')) {
            // Handle array destructuring for useState
            const arrayMatch = line.match(/const\s*\[([^\]]+)\]/)
            if (arrayMatch) {
                const vars = arrayMatch[1].split(',').map(v => v.trim())
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-white">[</span>
                        <span className="text-cyan-400">{vars[0]}</span>
                        {vars[1] && (
                            <>
                                <span className="text-white">, </span>
                                <span className="text-cyan-400">{vars[1]}</span>
                            </>
                        )}
                        <span className="text-white">] = </span>
                        <span className="text-cyan-400">React</span>
                        <span className="text-white">.</span>
                        <span className="text-yellow-400">useState</span>
                        <span className="text-white">(</span>
                        <span className="text-orange-400">{line.match(/useState\(([^)]+)\)/)?.[1] || '0'}</span>
                        <span className="text-white">)</span>
                    </div>
                )
            }
        }

        // Const declarations (generic)
        if (line.includes('const')) {
            const match = line.match(/const\s+(\w+)/)
            const varName = match ? match[1] : ''
            
            // Check if line is complete
            if (!line.includes('=') || line.trim().endsWith('=')) {
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-gray-500">{line.trim()}</span>
                    </div>
                )
            }
            
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-400">{varName}</span>
                    <span className="text-white">{line.substring(line.indexOf(varName) + varName.length)}</span>
                </div>
            )
        }

        // Return statements
        if (line.trim().startsWith('return')) {
            return (
                <div key={i} className="pt-2">
                    {spaces}
                    <span className="text-purple-400">return</span>{' '}
                    {line.includes('<Button') ? (
                        <span className="text-gray-500">&lt;Button /&gt;</span>
                    ) : (
                        <span className="text-white">{line.substring(line.indexOf('return') + 6).trim()}</span>
                    )}
                </div>
            )
        }

        // Function calls like setCount or handleClick
        if (line.match(/^\s*\w+\(/)) {
            const funcMatch = line.match(/^\s*(\w+)/)
            const funcName = funcMatch ? funcMatch[1] : ''
            
            if (line.includes('=>')) {
                // Arrow function
                const parts = line.split('=>')
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-cyan-400">{funcName}</span>
                        <span className="text-white">{parts[0].substring(funcName.length)}</span>
                        <span className="text-white"> =&gt; </span>
                        <span className="text-white">{parts[1]}</span>
                    </div>
                )
            }
        }

        // handleClick or similar function definitions
        if (line.includes('handleClick') || line.match(/const\s+\w+\s*=\s*\(\)/)) {
            const match = line.match(/const\s+(\w+)/)
            const funcName = match ? match[1] : 'handleClick'
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-400">{funcName}</span>
                    <span className="text-white"> = () =&gt; {'{'}</span>
                </div>
            )
        }

        // JSX tags - comprehensive handling
        if (line.includes('<') || line.includes('>')) {
            // Self-closing tags
            if (line.match(/<\w+[^>]*\/>/)) {
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-gray-400">{line.trim()}</span>
                    </div>
                )
            }

            // Opening tags with attributes
            if (line.match(/<\w+\s+\w+/)) {
                const tagMatch = line.match(/<(\w+)/)
                const tagName = tagMatch ? tagMatch[1] : ''
                const afterTag = line.substring(line.indexOf(tagName) + tagName.length)
                
                // Handle onClick and other attributes
                if (line.includes('onClick')) {
                    const beforeOnClick = afterTag.substring(0, afterTag.indexOf('onClick'))
                    const onClickPart = afterTag.substring(afterTag.indexOf('onClick'))
                    
                    return (
                        <div key={i}>
                            {spaces}
                            <span className="text-gray-400">&lt;{tagName}</span>
                            {beforeOnClick && <span className="text-white">{beforeOnClick}</span>}
                            <span className="text-cyan-400">onClick</span>
                            <span className="text-white">=</span>
                            <span className="text-white">{'{'}</span>
                            {line.includes('=>') && (
                                <>
                                    <span className="text-white">() =&gt; </span>
                                    {line.includes('setCount') && (
                                        <>
                                            <span className="text-yellow-400">setCount</span>
                                            <span className="text-white">(</span>
                                            <span className="text-cyan-400">{line.match(/setCount\(([^)]+)\)/)?.[1] || 'count + 1'}</span>
                                            <span className="text-white">)</span>
                                        </>
                                    )}
                                </>
                            )}
                            <span className="text-white">{'}'}</span>
                            <span className="text-gray-400">&gt;</span>
                        </div>
                    )
                }
                
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-gray-400">{line.trim()}</span>
                    </div>
                )
            }

            // JSX with interpolation {count}
            if (line.includes('{') && line.includes('}')) {
                const parts = line.split(/[{}]/)
                return (
                    <div key={i}>
                        {spaces}
                        {parts.map((part, idx) => {
                            if (idx % 2 === 0) {
                                // Outside braces
                                return part.includes('<') || part.includes('>') ? (
                                    <span key={idx} className="text-gray-400">{part}</span>
                                ) : (
                                    <span key={idx} className="text-white">{part}</span>
                                )
                            } else {
                                // Inside braces
                                return (
                                    <span key={idx}>
                                        <span className="text-white">{'{'}</span>
                                        <span className="text-cyan-400">{part}</span>
                                        <span className="text-white">{'}'}</span>
                                    </span>
                                )
                            }
                        })}
                    </div>
                )
            }

            // Simple JSX tags
            if (line.match(/<\/?\w+>/)) {
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-gray-400">{line.trim()}</span>
                    </div>
                )
            }

            // Text content inside JSX
            if (!line.includes('<') && line.trim().length > 0) {
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-green-400">{line.trim()}</span>
                    </div>
                )
            }
        }

        // Closing braces and parentheses
        if (line.trim() === ')' || line.trim() === '}' || line.trim() === '},' || line.trim() === '),' || line.trim() === '])') {
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-white">{line.trim()}</span>
                </div>
            )
        }

        // Default: plain text
        return (
            <div key={i}>
                {spaces}
                <span className="text-white">{line.trim()}</span>
            </div>
        )
    })
}