'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export function ContactSection() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Move
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Want to chat? Just shoot me a dm with a{' '}
            <a
              href="https://whatsapp.com"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              direct question on whatsapp
            </a>{' '}
            and I&apos;ll respond whenever I can. I&apos;ll definitely overthink before replying
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
