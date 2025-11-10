import React from "react"
import { Info } from "lucide-react"

interface NoteBoxProps {
  title?: string
  children: React.ReactNode
}

const NoteBox: React.FC<NoteBoxProps> = ({ title = "Note", children }) => {
  return (
    <section className="bg-slate-950 border border-gray-700 rounded-lg p-6">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Info className="h-5 w-5" />
        {title}
      </h3>
      <div className="text-white text-sm">{children}</div>
    </section>
  )
}

export default NoteBox
