'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'outline';
}

export function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-block rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap ${
        variant === 'outline'
          ? 'border border-gray-600 text-gray-300 hover:border-gray-400'
          : 'bg-gray-900 text-white border border-gray-700 hover:bg-gray-800'
      } transition-colors duration-200`}
    >
      {name}
    </motion.span>
  );
}
