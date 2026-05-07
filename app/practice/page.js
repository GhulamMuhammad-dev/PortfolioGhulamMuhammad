import React from "react";

export default function TextSpacingPractice() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10 space-y-10">
      
      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Tailwind Text Space Practice
        </h1>
        <p className="text-zinc-400">
          Experiment by changing classes and observing behavior.
        </p>
      </div>

      {/* 1. FULL WIDTH VS FIT WIDTH */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          1. Width Control
        </h2>

        <div className="border border-zinc-700 p-4 space-y-4">

          {/* Full Width */}
          <div className="bg-red-500 p-2 w-full">
            w-full → Takes entire parent width
          </div>

          {/* Fit Width */}
          <div className="bg-green-500 p-2 w-fit">
            w-fit → Only fits content
          </div>

          {/* Inline Block */}
          <p className="bg-blue-500 p-2 inline-block">
            inline-block → Shrinks to content
          </p>

          {/* Max Width */}
          <p className="bg-yellow-500 text-black p-2 max-w-sm">
            max-w-sm → Limits paragraph width for readability.
            Try removing max-w-sm and see the difference.
          </p>
        </div>
      </section>

      {/* 2. TEXT WRAPPING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          2. Text Wrapping
        </h2>

        <div className="border border-zinc-700 p-4 w-64 space-y-4">

          <p className="bg-purple-500 p-2 break-words">
            break-words:
            thisisaveryveryveryveryverylongwordthatwillbreakproperly
          </p>

          <p className="bg-pink-500 p-2 break-all">
            break-all:
            thisisaveryveryveryveryverylongwordthatbreakseverywhere
          </p>

          <p className="bg-orange-500 p-2 truncate overflow-hidden whitespace-nowrap">
            truncate: This is a very long sentence that will be truncated.
          </p>

          <p className="bg-cyan-500 p-2 text-nowrap overflow-auto">
            text-nowrap → This text never wraps and may overflow horizontally.
          </p>
        </div>
      </section>

      {/* 3. WHITESPACE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Whitespace Control
        </h2>

        <div className="border border-zinc-700 p-4 space-y-4">

          <p className="bg-zinc-700 p-2 whitespace-normal">
            whitespace-normal → Normal text behavior
          </p>

          <p className="bg-zinc-700 p-2 whitespace-nowrap overflow-auto">
            whitespace-nowrap → This text stays in one single line no matter how long it becomes.
          </p>

          <p className="bg-zinc-700 p-2 whitespace-pre">
{`whitespace-pre
Preserves spaces
and line breaks exactly`}
          </p>

          <p className="bg-zinc-700 p-2 whitespace-pre-wrap">
{`whitespace-pre-wrap
Preserves formatting
but still wraps text if needed`}
          </p>
        </div>
      </section>

      {/* 4. LINE HEIGHT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          4. Line Height
        </h2>

        <div className="border border-zinc-700 p-4 w-64 grid gap-4">

          <p className="bg-red-400 text-black p-2 leading-none">
            leading-none → Very tight line spacing.
            Second line example.
          </p>

          <p className="bg-green-400 text-black p-2 leading-relaxed">
            leading-relaxed → Comfortable readable spacing.
            Second line example.
          </p>

          <p className="bg-blue-400 text-black p-2 leading-loose">
            leading-loose → Large spacing between lines.
            Second line example.
          </p>
        </div>
      </section>

      {/* 5. LETTER SPACING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          5. Letter Spacing
        </h2>

        <div className="border border-zinc-700 p-4 space-y-4">

          <p className="tracking-tight text-xl">
            tracking-tight
          </p>

          <p className="tracking-normal text-xl">
            tracking-normal
          </p>

          <p className="tracking-wide text-xl">
            tracking-wide
          </p>

          <p className="tracking-widest text-xl uppercase">
            tracking-widest
          </p>
        </div>
      </section>

      {/* 6. FLEX STRETCH ISSUE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          6. Flex Stretch Problem
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Problem */}
          <div className="border border-red-500 p-4 flex flex-col gap-2">
            <h3 className="font-bold text-red-400">
              Problem
            </h3>

            <p className="bg-red-500 p-2">
              Child stretches full width
            </p>

            <p className="bg-red-500 p-2">
              Because flex items stretch by default
            </p>
          </div>

          {/* Solution */}
          <div className="border border-green-500 p-4 flex flex-col items-start gap-2">
            <h3 className="font-bold text-green-400">
              Solution
            </h3>

            <p className="bg-green-500 p-2">
              items-start fixes stretching
            </p>

            <p className="bg-green-500 p-2 w-fit">
              w-fit makes width fit content
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE AREA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          7. Your Practice Area
        </h2>

        <div className="border border-dashed border-zinc-500 p-6">
          <p className="
            bg-indigo-500
            p-3
            rounded-lg
            
            /* TRY CHANGING THESE */
            w-fit
            tracking-tight
            leading-relaxed
            whitespace-normal
          ">
            Edit these Tailwind classes and observe how the text changes.
          </p>
        </div>
      </section>

    </div>
  );
}