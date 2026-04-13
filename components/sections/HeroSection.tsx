"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import naYm from "@/public/naym.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-3"
            >
              Hi, I&apos;m Naym{" "}
              <span className="inline-block animate-wave">👋</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-gray-100 mb-6"
            >
              Building scalable, practical, and intelligent software
            </motion.p>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-linear-to-br from-blue-500 to-purple-600 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-5xl font-bold text-white">
                <Image
                  src={naYm}
                  alt="Naym"
                  width={1200}
                  height={1200}
                  priority
                  className=" object-cover h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        :global(.animate-wave) {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
}
