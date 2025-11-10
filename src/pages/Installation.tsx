import React from "react"
import CodeBlock from "../components/CodeBlock"
import NoteBox from "../components/NoteBox"

const Installation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-slate-950 text-white">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Installation</h1>
        <p className="mb-6">
          Install <span className="font-semibold text-white">Sense Audio</span>{" "}
          via npm or yarn:
        </p>
        <CodeBlock code="npm install sense-audio" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <p className="mb-6">Here's a simple example to get you started:</p>
        <CodeBlock
          code={`import SenseAudio from 'sense-audio';

                  // Initialize audio context
                  const audio = new SenseAudio();

                  // Load an audio file
                  await audio.load('path/to/audio.mp3');

                  // Play the audio
                  audio.play();

                  // Get audio data
                  const waveform = audio.getWaveform();
                  const spectrum = audio.getSpectrum();`
              }
        />
      </section>

      {/* Reusable Note Component */}
      <NoteBox>
        Ensure your browser supports the{" "}
        <span className="font-medium">Web Audio API</span> for full
        functionality. Most modern browsers already support it.
      </NoteBox>
    </div>
  )
}

export default Installation
