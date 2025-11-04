export const renderColoredYaml = (code: string) => {
    const lines = code.split('\n')
    return lines.map((line, i) => {
        // Skip empty lines
        if (line.trim().length === 0) {
            return <div key={i}>&nbsp;</div>
        }

        const indent = line.search(/\S/)
        const spaces = '\u00A0'.repeat(Math.max(0, indent))

        // Comments
        if (line.trim().startsWith('#')) {
            return (
                <div key={i}>
                    {spaces}
                    <span className="text-gray-500">{line.trim()}</span>
                </div>
            )
        }

        // Key-value pairs
        if (line.includes(':')) {
            const colonIndex = line.indexOf(':')
            const key = line.substring(0, colonIndex)
            const value = line.substring(colonIndex + 1).trim()

            // Render the key
            const keyIndent = key.search(/\S/)
            const keySpaces = '\u00A0'.repeat(Math.max(0, keyIndent))
            const keyText = key.trim()

            // Check if value is numeric
            const isNumeric = /^\d+$/.test(value)
            // Check if value is quoted string
            const isQuotedString = value.startsWith('"') || value.startsWith("'")

            return (
                <div key={i}>
                    {keySpaces}
                    <span className="text-blue-400">{keyText}</span>
                    <span className="text-white">: </span>
                    {value.length > 0 && (
                        <span className={
                            isNumeric ? "text-green-400" :
                            isQuotedString ? "text-amber-400" :
                            "text-amber-400"
                        }>
                            {value}
                        </span>
                    )}
                </div>
            )
        }

        // List items (starting with -)
        if (line.trim().startsWith('-')) {
            const dashIndex = line.indexOf('-')
            const itemSpaces = '\u00A0'.repeat(Math.max(0, dashIndex))
            const itemContent = line.substring(dashIndex + 1).trim()

            // Check if list item has key-value
            if (itemContent.includes(':')) {
                const colonIndex = itemContent.indexOf(':')
                const key = itemContent.substring(0, colonIndex)
                const value = itemContent.substring(colonIndex + 1).trim()

                return (
                    <div key={i}>
                        {itemSpaces}
                        <span className="text-white">- </span>
                        <span className="text-blue-400">{key}</span>
                        <span className="text-white">: </span>
                        <span className="text-amber-400">{value}</span>
                    </div>
                )
            }

            return (
                <div key={i}>
                    {itemSpaces}
                    <span className="text-white">- </span>
                    <span className="text-amber-400">{itemContent}</span>
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
