import { ShaderAnimation } from "@/components/ui/shader-animation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleSignInButton } from "@/components/google-sign-in-button"

export default function Page() {
  return (
    <>
      <ShaderAnimation />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-center gap-12 px-6 py-20">

          {/* Hero */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              ARX Studios
            </h1>
            <p className="text-white/40 text-sm tracking-[0.35em] uppercase mt-1">
              Coming Soon
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-white/35 text-base">Be the first to know when we launch</p>
            <GoogleSignInButton />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-sm">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-white/20 text-xs uppercase tracking-[0.2em]">About</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Founder card */}
          <div className="flex flex-col items-center gap-3 w-full max-w-lg">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em]">The Founder</p>
            <div className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/[0.12] flex items-center justify-center text-white/50 font-medium text-base flex-shrink-0 select-none">
                AR
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-white/90 font-medium text-base">Ayushman Das</p>
                <p className="text-white/35 text-sm">Founder & CEO, ARX Studios</p>
                <p className="text-white/25 text-sm mt-2 leading-relaxed">
                  Passionate about building the future of digital experiences.
                  Previously led design at DRDO & TCrest. Now creating something new
                  at the intersection of art and technology.
                </p>
              </div>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  )
}
