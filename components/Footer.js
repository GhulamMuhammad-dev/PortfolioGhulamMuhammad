"use client";

export default function Footer() {
  return (
    <footer className="footer-section relative overflow-hidden" style={{ background: "#7eb89a" }}>

      {/* 
        Black "arch" bridge from the hero section above.
        This is the semi-circle that peeks over the top edge of the green section.
        On desktop it's a wide rectangle with a dark image/block bridging the two sections.
        We use a pseudo-arch via an SVG or border-radius trick.
      */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-black hidden md:block"
        style={{
          width: "160px",
          height: "50px",
          borderBottomLeftRadius: "9999px",
          borderBottomRightRadius: "9999px",
        }}
      />

      {/* Mobile: full-width rounded top arch */}
      <div
        className="absolute top-0 left-0 w-full bg-black block md:hidden"
        style={{
          height: "60px",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
        }}
      />

      {/* ─── DESKTOP LAYOUT ──────────────────────────────────────────── */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 px-16 pt-28 pb-16 max-w-6xl mx-auto">

        {/* Left column: heading + body */}
        <div>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
              fontSize: "clamp(2.8rem, 4.5vw, 4rem)",
              letterSpacing: "0.04em",
              color: "#0d3d36",
              lineHeight: 1.0,
            }}
          >
            Your product deserves to be understood.
          </h2>
          <p
            className="mt-5"
            style={{
              color: "#0d3d36",
              fontSize: "1rem",
              lineHeight: "1.65",
              maxWidth: "420px",
              opacity: 0.85,
            }}
          >
            You invested months maybe years building an incredible product. Don't
            let unclear messaging keep it from reaching the people it's built for.
          </p>
        </div>

        {/* Right column: tagline + CTA */}
        <div className="flex flex-col justify-center gap-5">
          <p
            className="font-bold"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
              color: "#0d3d36",
              fontSize: "1.3rem",
              letterSpacing: "0.02em",
              lineHeight: "1.4",
            }}
          >
            Let's create a story that turns understanding into growth.
          </p>

          <ContactButton />

          <p style={{ color: "#0d3d36", fontSize: "0.85rem", opacity: 0.7 }}>
            ghulammuhammad.dev@gmail.com
          </p>
        </div>
      </div>

      {/* Desktop footer bar */}
      <div className="hidden md:flex justify-end px-16 pb-8 max-w-6xl mx-auto">
        <SocialPill />
      </div>

      {/* ─── MOBILE LAYOUT ───────────────────────────────────────────── */}
      <div className="block md:hidden px-5 pt-20 pb-10">

        <h2
          className="font-black uppercase leading-none"
          style={{
            fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
            fontSize: "clamp(2.6rem, 10vw, 3.2rem)",
            letterSpacing: "0.04em",
            color: "#0d3d36",
            lineHeight: 1.0,
          }}
        >
          Your product deserves to be understood.
        </h2>

        <p
          className="mt-5"
          style={{
            color: "#0d3d36",
            fontSize: "1rem",
            lineHeight: "1.65",
            opacity: 0.85,
          }}
        >
          You invested months maybe years building an incredible product. Don't
          let unclear messaging keep it from reaching the people it's built for.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <ContactButton fullWidth />
          <p style={{ color: "#0d3d36", fontSize: "0.85rem", opacity: 0.75 }}>
            ghulammuhammad.dev@gmail.com
          </p>
          <p
            className="font-bold mt-2"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
              color: "#0d3d36",
              fontSize: "1.1rem",
              letterSpacing: "0.02em",
              lineHeight: "1.5",
            }}
          >
            Let's create a story that turns understanding into growth.
          </p>
        </div>

        {/* Mobile footer social bar */}
        <div className="mt-10">
          <SocialPill />
        </div>
      </div>
    </footer>
  );
}

/* ─── Sub-components ───────────────────────────────────────────────────── */

function ContactButton({ fullWidth = false }) {
  return (
    <a
      href="mailto:ghulammuhammad.dev@gmail.com"
      className={`flex items-center gap-3 bg-white rounded-xl px-6 py-4 font-black uppercase tracking-wider transition-opacity hover:opacity-90 ${
        fullWidth ? "w-full justify-start" : "w-fit"
      }`}
      style={{
        fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
        fontSize: "1.1rem",
        letterSpacing: "0.12em",
        color: "#111",
        textDecoration: "none",
      }}
    >
      {/* Envelope icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      Contact Me
    </a>
  );
}

function SocialPill() {
  const iconColor = "#fff";

  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded-full w-fit"
      style={{ background: "#111" }}
    >
      {/* LinkedIn */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill={iconColor}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      {/* X / Twitter */}
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
        <svg width="16" height="16" viewBox="0 0 24 24" fill={iconColor}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill={iconColor} stroke="none"/>
        </svg>
      </a>
    </div>
  );
}