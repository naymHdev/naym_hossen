'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';
import { TechBadge } from '../common/TechBadge';
import { skills } from '@/lib/data/skills';

export function SkillsSection() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Daily Googles" />

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <TechBadge key={skill.id} name={skill.name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
