'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../common/SectionTitle';

export function AboutSection() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Me, Basically" />

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            A Full Stack Web Application Developer focused on SaaS development, AI automation
            and agentic workflows to help businesses save time and reduce costs by eliminating
            repetitive tasks.
          </p>

          <p>
            Enthusiastic about solving developer challenges through rich packages and browser
            extensions. I also write technical blogs at{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              AverageDevBlog
            </a>
            , sharing insights on modern web and AI technologies.
          </p>
        </div>
      </Container>
    </section>
  );
}
