'use client';

import { motion } from 'framer-motion';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  index?: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group rounded-lg border border-gray-700 bg-gray-900/50 p-6 backdrop-blur hover:border-gray-500 hover:bg-gray-900/80 transition-all duration-300"
    >
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} variant="outline" />
        ))}
      </div>
    </motion.div>
  );
}
