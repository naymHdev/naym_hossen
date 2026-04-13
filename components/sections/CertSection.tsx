'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';
import { certifications } from '@/lib/data/certifications';

export function CertSection() {
  return (
    <section className="py-12 md:py-20 border-b border-gray-800">
      <Container>
        <SectionTitle title="Useless Papers" />

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between items-start p-4 rounded-lg border border-gray-700 hover:border-gray-500 bg-gray-900/30 transition-all duration-200"
            >
              <div>
                <h3 className="text-white font-semibold">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.organization}</p>
              </div>
              <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
