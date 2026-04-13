'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logo?: string;
  index?: number;
}

export function ExperienceCard({
  company,
  position,
  startDate,
  endDate,
  logo,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 mb-6 hover:opacity-80 transition-opacity duration-200"
    >
      {/* Logo/Avatar */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm">
          {logo || company.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-white font-semibold text-lg">{company}</h3>
            <p className="text-gray-400 text-sm">{position}</p>
          </div>
          <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
