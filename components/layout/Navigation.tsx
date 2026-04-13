'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';

export function Navigation() {
  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '💻', label: 'Dev.to', url: '#' },
    { icon: '📎', label: 'Dribbble', url: '#' },
    { icon: '📕', label: 'Blog', url: '#' },
    { icon: '✉️', label: 'Email', url: '#' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-2xl hover:scale-110 transition-transform duration-200"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          © 2025 Naym. All rights reserved.
        </motion.p>
      </Container>
    </footer>
  );
}
