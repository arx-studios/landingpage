import Link from "next/link"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { Navbar } from "@/components/navbar"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { ScrollCue } from "@/components/scroll-cue"
import { TeamCarousel } from "@/components/ui/profile-card-testimonial-carousel"

export default function Page() {
  return (
    <>
      <ShaderAnimation />
      <div className="relative z-10 flex flex-col">
        <Navbar />

        {/* ── Hero — just the name, nothing else ── */}
        <section className="relative flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              ARX Studios
            </h1>
            <p className="text-white/40 text-sm tracking-[0.35em] uppercase mt-1">
              Coming Soon
            </p>
          </div>
          <ScrollCue />
        </section>

        {/* ── Content — CTA + team ── */}
        <section className="flex flex-col items-center gap-16 px-6 py-24">

          

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-sm">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-white/20 text-xs uppercase tracking-[0.2em]">The Team</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Team carousel */}
          <TeamCarousel />

          {/* Sign-up CTA */}
          {/* <div className="flex flex-col items-center gap-4">
            <p className="text-white/35 text-base">Be the first to know when we launch</p>
            <Link
              href="/?modal=signin"
              scroll={false}
              className="flex items-center gap-3 px-9 py-4 rounded-full bg-white/[0.07] border border-white/[0.15] text-white text-base font-medium backdrop-blur-sm hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] active:scale-[0.98]"
            >
              Get Early Access
            </Link>
          </div> */}

        </section>

      </div>
      <CinematicFooter />
    </>
  )
}
