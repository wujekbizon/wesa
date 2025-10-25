export const renderColoredCode = (code: string) => {
    const lines = code.split('\n')
    return lines.map((line, i) => {
        // Skip empty or incomplete lines during typing
        if (line.trim().length === 0) {
            return <div key={i}>&nbsp;</div>
        }

        if (line.includes('import')) {
            // Check if the line is complete enough to parse
            if (!line.includes('from') || line.trim().endsWith('from')) {
                // Line is incomplete, show as-is in gray
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
        } else if (line.includes('export default function')) {
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
        } else if (line.includes('const')) {
            const match = line.match(/const\s+(\w+)/)
            const varName = match ? match[1] : ''
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            
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
                    {line.includes('useState') && (
                        <>
                            {' = '}
                            <span className="text-cyan-400">React</span>
                            <span className="text-white">.</span>
                            <span className="text-yellow-400">useState</span>
                            <span className="text-white">(</span>
                            <span className="text-orange-400">0</span>
                            <span className="text-white">)</span>
                        </>
                    )}
                </div>
            )
        } else if (line.trim().startsWith('return')) {
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">return</span>{' '}
                    {line.includes('<Button') ? (
                        <span className="text-gray-500">&lt;Button /&gt;</span>
                    ) : (
                        <span className="text-white">(</span>
                    )}
                </div>
            )
        } else if (line.includes('setCount')) {
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-cyan-400">setCount</span>
                    <span className="text-white">(</span>
                    <span className="text-purple-400">prev</span>
                    <span className="text-white"> =&gt; </span>
                    <span className="text-purple-400">prev</span>
                    <span className="text-white"> + </span>
                    <span className="text-orange-400">1</span>
                    <span className="text-white">)</span>
                </div>
            )
        } else if (line.includes('<div') || line.includes('<h1') || line.includes('<p') || line.includes('<Button')) {
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-gray-500">{line.trim()}</span>
                </div>
            )
        } else if (line.includes('handleClick')) {
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-400">handleClick</span>
                    <span className="text-white"> = () =&gt; {'{'}</span>
                </div>
            )
        } else {
            const indent = line.search(/\S/)
            const spaces = '\u00A0'.repeat(Math.max(0, indent))
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-white">{line.trim()}</span>
                </div>
            )
        }
    })
}