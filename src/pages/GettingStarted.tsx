import React from "react"
import CodeBlock from "../components/CodeBlock"

const GettingStarted: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-black">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
        <p className="mb-6">
          This guide will help you quickly set up{" "}
          <span className="font-semibold">Sense Audio</span> and start working
          with audio files in your project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Install the Package</h2>
        <p className="mb-4">
          Use your preferred package manager to install{" "}
          <span className="font-medium">sense-audio</span>:
        </p>
        <CodeBlock code="npm install sense-audio" />
        <p className="mt-2 text-sm mb-4">or using yarn:</p>
        <CodeBlock code="yarn add sense-audio" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          2. Import and Initialize
        </h2>
        <p className="mb-4">
          After installing, import and create an instance of{" "}
          <span className="font-medium">SenseAudio</span>:
        </p>
        <CodeBlock
          code={`import SenseAudio from 'sense-audio';

const audio = new SenseAudio();`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Load and Play Audio</h2>
        <p className="mb-4">
          You can load an audio file from a URL or local path, then play it:
        </p>
        <CodeBlock
          code={`await audio.load('path/to/audio.mp3');
audio.play();`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Analyze Audio</h2>
        <p className="mb-4">
          Once your audio is loaded, you can extract useful information such as
          waveform and spectrum data:
        </p>
        <CodeBlock
          code={`const waveform = audio.getWaveform();
const spectrum = audio.getSpectrum();`}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">You’re All Set 🎉</h2>
        <p>
          You’ve successfully installed and initialized{" "}
          <span className="font-semibold">Sense Audio</span>. You can now build
          visualizations, create sound effects, or experiment with real-time
          audio analysis.
        </p>
      </section>
    </div>
  )
}

export default GettingStarted
