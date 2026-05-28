"use client"

type AnimatedHeadingProps = {
  text?: string
  className?: string
}

/**
 * AnimatedHeading
 * - Soft backlit radial glow behind text
 * - Gentle floating and glow pulse (disabled for prefers-reduced-motion)
 * - Underline expands on hover for an interactive but minimal effect
 */
export default function AnimatedHeading({ text = "A Unified Care Experience", className = "" }: AnimatedHeadingProps) {
  return (
    <div className={`group relative inline-block ${className}`} aria-label="A Unified Care Experience">
      {/* Backlit glow (behind the text) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-x-10 -inset-y-4 -z-10
          rounded-[56px]
          bg-[radial-gradient(ellipse_at_center,_rgba(83,84,66,0.20)_0%,_rgba(206,196,160,0.30)_30%,_rgba(234,222,198,0)_70%)]
          blur-2xl
          opacity-90
        "
      />

      {/* Heading text with subtle glow + float */}
      <h1
        className="
          text-noir-brown font-bold tracking-tight
          text-4xl md:text-5xl lg:text-6xl leading-tight
          transition-transform duration-500
          motion-safe:animate-nw-glow motion-safe:group-hover:translate-y-[-2px]
          motion-safe:animate-nw-float
          motion-reduce:animate-none
        "
      >
        {text}
      </h1>

      {/* Premium underline that grows on hover */}
      <span
        aria-hidden="true"
        className="
          absolute left-0 -bottom-2 h-[3px] w-1/2
          rounded-full
          bg-gradient-to-r from-noir-olive to-noir-brown
          opacity-80
          transition-all duration-500 ease-out
          group-hover:w-full
        "
      />
    </div>
  )
}
