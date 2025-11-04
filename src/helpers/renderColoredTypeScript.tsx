export const renderColoredTypeScript = (code: string) => {
    const lines = code.split('\n')
    const keywords = ['import', 'export', 'class', 'async', 'await', 'return', 'from', 'constructor', 'private']

    return lines.map((line, i) => {
        // Skip empty lines
        if (line.trim().length === 0) {
            return <div key={i}>&nbsp;</div>
        }

        const indent = line.search(/\S/)
        const spaces = '\u00A0'.repeat(Math.max(0, indent))

        // Comments
        if (line.trim().startsWith('//')) {
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-gray-500">{line.trim()}</span>
                </div>
            )
        }

        // Import statements
        if (line.includes('import')) {
            // Check if line is complete
            if (!line.includes('from') || line.trim().endsWith('from')) {
                return (
                    <div key={i}>
                        {spaces}
                        <span className="text-gray-500">{line.trim()}</span>
                    </div>
                )
            }

            const parts = line.split(' ')
            return (
                <div key={i}>
                    {spaces}
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

        // Decorator patterns (@Controller, @Get, @Post, @Body, @Param)
        if (line.includes('@')) {
            const decoratorMatch = line.match(/@(\w+)(\([^)]*\))?/)
            if (decoratorMatch) {
                const decorator = decoratorMatch[0]
                const rest = line.substring(line.indexOf(decorator) + decorator.length)

                return (
                    <div key={i} className={line.trim().startsWith('@') ? '' : 'pt-2'}>
                        {spaces}
                        <span className="text-blue-400">{decorator}</span>
                        {rest && <span className="text-white">{rest}</span>}
                    </div>
                )
            }
        }

        // Export class declarations
        if (line.includes('export class')) {
            const match = line.match(/export\s+class\s+(\w+)/)
            const className = match ? match[1] : ''
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">export class</span>{' '}
                    <span className="text-yellow-400">{className}</span>
                    <span className="text-white"> {'{'}</span>
                </div>
            )
        }

        // Constructor
        if (line.includes('constructor')) {
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">constructor</span>
                    <span className="text-white">(</span>
                    {line.includes('private') && (
                        <>
                            <span className="text-purple-400">private</span>
                            <span className="text-white"> </span>
                        </>
                    )}
                    {line.match(/\w+(?=\s*:)/) && (
                        <>
                            <span className="text-cyan-400">{line.match(/\w+(?=\s*:)/)?.[0]}</span>
                            <span className="text-white">: </span>
                        </>
                    )}
                    {line.match(/:\s*(\w+)/) && (
                        <span className="text-yellow-400">{line.match(/:\s*(\w+)/)?.[1]}</span>
                    )}
                    <span className="text-white">) {'{}'}</span>
                </div>
            )
        }

        // Async function declarations
        if (line.includes('async') && (line.includes('findAll') || line.includes('create') || line.includes('findOne'))) {
            const funcMatch = line.match(/(async\s+)?(\w+)\s*\(/)
            const funcName = funcMatch ? funcMatch[2] : ''
            const hasParams = line.includes('@Body') || line.includes('@Param')

            return (
                <div key={i} className="pt-2">
                    {spaces}
                    {line.includes('async') && (
                        <>
                            <span className="text-purple-400">async</span>
                            <span className="text-white"> </span>
                        </>
                    )}
                    <span className="text-yellow-400">{funcName}</span>
                    <span className="text-white">(</span>
                    {hasParams && line.includes('@Body') && (
                        <>
                            <span className="text-blue-400">@Body()</span>
                            <span className="text-white"> </span>
                            {line.match(/@Body\(\)\s+(\w+)/) && (
                                <>
                                    <span className="text-cyan-400">{line.match(/@Body\(\)\s+(\w+)/)?.[1]}</span>
                                    <span className="text-white">: </span>
                                    <span className="text-yellow-400">{line.match(/:\s*(\w+)/)?.[1]}</span>
                                </>
                            )}
                        </>
                    )}
                    {hasParams && line.includes('@Param') && (
                        <>
                            <span className="text-blue-400">@Param('id')</span>
                            <span className="text-white"> </span>
                            {line.match(/@Param[^)]*\)\s+(\w+)/) && (
                                <>
                                    <span className="text-cyan-400">{line.match(/@Param[^)]*\)\s+(\w+)/)?.[1]}</span>
                                    <span className="text-white">: </span>
                                    <span className="text-yellow-400">string</span>
                                </>
                            )}
                        </>
                    )}
                    <span className="text-white">) {'{'}</span>
                </div>
            )
        }

        // Return statements with await
        if (line.trim().startsWith('return')) {
            const afterReturn = line.substring(line.indexOf('return') + 6).trim()

            return (
                <div key={i}>
                    {spaces}
                    <span className="text-purple-400">return</span>
                    <span className="text-white"> </span>
                    {afterReturn.startsWith('await') && (
                        <>
                            <span className="text-purple-400">await</span>
                            <span className="text-white"> </span>
                        </>
                    )}
                    {afterReturn.includes('this.') && (
                        <>
                            <span className="text-purple-400">this</span>
                            <span className="text-white">.</span>
                        </>
                    )}
                    {/* Service method call */}
                    {afterReturn.match(/(?:await\s+)?(?:this\.)?(\w+)\.(\w+)/) && (() => {
                        const match = afterReturn.match(/(?:await\s+)?(?:this\.)?(\w+)\.(\w+)/)
                        const service = match?.[1]
                        const method = match?.[2]
                        return (
                            <>
                                <span className="text-cyan-400">{service}</span>
                                <span className="text-white">.</span>
                                <span className="text-yellow-400">{method}</span>
                                <span className="text-white">(</span>
                                {/* Handle parameters */}
                                {afterReturn.includes('{') && afterReturn.includes('}') && (
                                    <span className="text-white">{'{'}</span>
                                )}
                            </>
                        )
                    })()}
                </div>
            )
        }

        // Object properties in parameters (include, orderBy, etc.)
        if (line.trim().match(/^\w+:/)) {
            const match = line.trim().match(/^(\w+):\s*(.+)/)
            const propName = match?.[1]
            const propValue = match?.[2]

            return (
                <div key={i}>
                    {spaces}
                    <span className="text-cyan-400">{propName}</span>
                    <span className="text-white">: </span>
                    {propValue?.startsWith('[') ? (
                        <span className="text-white">{propValue}</span>
                    ) : propValue?.startsWith('{') ? (
                        <span className="text-white">{propValue}</span>
                    ) : propValue?.startsWith("'") ? (
                        <span className="text-green-400">{propValue}</span>
                    ) : (
                        <span className="text-white">{propValue}</span>
                    )}
                </div>
            )
        }

        // Closing braces
        if (line.trim() === '}' || line.trim() === '})' || line.trim() === '},') {
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
