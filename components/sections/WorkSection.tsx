'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceCard } from '../common/ExperienceCard';
import { workExperience } from '@/lib/data/experience';

export function WorkSection() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Hired Anyway" />

        <div className="space-y-2">
          {workExperience.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
