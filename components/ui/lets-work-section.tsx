"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://cal.com/jatin-yadav05/15min", "_blank")
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="relative flex flex-col items-center gap-12 sm:gap-16">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <span
              className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-gray-400 transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <h3
              className="text-2xl sm:text-3xl font-light tracking-tight text-white transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let's talk
            </h3>
          </div>

          {/* Book a call button */}
          <button
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            {/* Left line */}
            <div
              className="h-px w-6 sm:w-8 lg:w-12 bg-gray-700 transition-all duration-500"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />

            {/* Button content */}
            <div
              className="relative flex items-center gap-2 sm:gap-3 overflow-hidden rounded-full border px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 transition-all duration-500"
              style={{
                borderColor: isButtonHovered ? "#fff" : "#444",
                backgroundColor: isButtonHovered ? "#fff" : "transparent",
                boxShadow: isButtonHovered ? "0 0 30px rgba(255,255,255,0.1), 0 10px 40px rgba(255,255,255,0.08)" : "none",
              }}
            >
              <Calendar
                className="size-3.5 sm:size-4 lg:size-5 transition-all duration-500"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#000" : "#fff",
                }}
              />
              <span
                className="text-xs sm:text-sm lg:text-base font-medium tracking-wide transition-all duration-500"
                style={{
                  color: isButtonHovered ? "#000" : "#fff",
                }}
              >
                Book a call
              </span>
              <ArrowUpRight
                className="size-3.5 sm:size-4 lg:size-5 transition-all duration-500"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#000" : "#fff",
                  transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                }}
              />
            </div>

            {/* Right line */}
            <div
              className="h-px w-6 sm:w-8 lg:w-12 bg-gray-700 transition-all duration-500"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />
          </button>

          {/* Subtle subtext */}
          <span
            className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-500 transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            15 min intro call
          </span>
        </div>

        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-400">
            Available for projects
          </span>
        </div>

        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2
              className="relative text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden pb-2">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let's work
                </span>
              </span>
              <span className="block overflow-hidden pb-4">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-gray-400">together</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-2 sm:mt-4 flex size-14 sm:size-16 lg:size-20 items-center justify-center">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "#fff" : isHovered ? "#fff" : "#444",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "#fff" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-5 sm:size-6 lg:size-7 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "#000" : "#fff",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-6 sm:-left-8 lg:-left-16 top-1/2 -translate-y-1/2">
            <div
              className="h-px w-6 sm:w-8 lg:w-12 bg-gray-700 transition-all duration-500"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-6 sm:-right-8 lg:-right-16 top-1/2 -translate-y-1/2">
            <div
              className="h-px w-6 sm:w-8 lg:w-12 bg-gray-700 transition-all duration-500"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        <div
          className="mt-12 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6 text-center transition-all duration-500 delay-100 mb-6 sm:mb-8 px-4"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
          </p>
          <span className="text-xs tracking-widest uppercase text-gray-500">hello@example.com</span>
        </div>
      </div>
    </section>
  )
}
