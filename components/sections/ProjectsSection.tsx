'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../common/ProjectCard';
import { projects } from '@/lib/data/projects';

export function ProjectsSection() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle
          title="Stuff I Didn't Ruin"
          subtitle="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
