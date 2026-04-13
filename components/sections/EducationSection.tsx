'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceCard } from '../common/ExperienceCard';
import { education } from '@/lib/data/education';

export function EducationSection() {
  return (
    <section className="py-12 md:py-20 border-b border-gray-800">
      <Container>
        <SectionTitle title="Marriage Aid" />

        <div className="space-y-2">
          {education.map((edu, index) => (
            <ExperienceCard
              key={edu.id}
              company={edu.institution}
              position={`${edu.degree}`}
              startDate={edu.startDate}
              endDate={edu.endDate}
              logo={edu.logo}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
