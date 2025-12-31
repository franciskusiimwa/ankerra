import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';

const Vision = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Vision</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Where we are heading and what we hope to leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* The Long View */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <SectionHeader title="The Long View" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Our vision is to help build enduring businesses that contribute meaningfully to society.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              We are not in a hurry to become large. We are committed to becoming good. We measure progress not only by what is built, but by the quality of decisions made along the way and the kind of leaders formed in the process.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              We want the ventures that emerge from this builder to be known for clarity, trustworthiness, and excellence over decades, not quarters.
            </p>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="section-padding border-b border-border bg-card">
        <div className="container-narrow">
          <SectionHeader title="What Success Looks Like" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Success looks like businesses that:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Solve important problems well',
                'Treat customers, employees, and partners with dignity',
                'Generate healthy returns without distortion or harm',
                'Outlive their founders',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-foreground font-medium">
              It also looks like people who grow in judgment, character, and responsibility through the act of building.
            </p>
          </div>
        </div>
      </section>

      {/* An Open Invitation */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader title="An Open Invitation" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We do not believe we are meant to build alone.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-8">
              This work invites partners who are thoughtful, patient, and willing to carry responsibility. If this vision resonates with you, there is likely a place to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/partner">Partner With Us</Link>
              </Button>
              <Button asChild variant="outline" className="group">
                <Link to="/updates">
                  Join Our Updates
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
