import { Check, Copy } from "lucide-react"
import React from "react"

interface CodeBlockProps {
  code: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const colorizeCode = (code: string) => {
    return code
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-green-400">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(
        /\b(const|let|var|await|async|function|return|import|from|class|new|if|else|for|while|switch|case|break|continue|throw|try|catch)\b/g,
        '<span class="text-blue-400 font-semibold">$1</span>'
      )
      .replace(
        /\b(true|false|null|undefined)\b/g,
        '<span class="text-orange-400">$1</span>'
      )
      .replace(/(\b\w+)(?=\()/g, '<span class="text-pink-400">$1</span>')
  }

  return (
    <div className="relative bg-[#0a0e1a] rounded-lg p-6 overflow-x-auto mb-6 border border-zinc-800">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        title="Copy code">
        {copied ? (
          <Check className="h-5 w-5 text-green-400" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </button>

      <pre className="text-sm leading-relaxed font-mono text-gray-300 m-0 whitespace-pre-wrap wrap-break-words">
        <code dangerouslySetInnerHTML={{ __html: colorizeCode(code) }} />
      </pre>
    </div>
  )
}

export default CodeBlock
