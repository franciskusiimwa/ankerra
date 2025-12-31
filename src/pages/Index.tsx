import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="text-balance max-w-4xl">
              We build ventures with purpose, discipline, and stewardship.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We exist to build and support businesses that solve real problems, serve people well, and endure over time. Our work is grounded in faith, expressed through excellence, and guided by a deep sense of responsibility for the resources, opportunities, and people entrusted to us.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/partner">Partner With Us</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/philosophy">Read Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <SectionHeader title="Who We Are" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We are a venture builder focused on long-term value creation.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              We partner with founders, operators, and institutions to build companies that are both commercially strong and morally grounded. We care deeply about how things are built, not just what is built. We believe that good ventures are formed at the intersection of clarity, discipline, and service.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              This is not a factory for fast exits. It is a place for thoughtful building.
            </p>
          </div>
        </div>
      </section>

      {/* How We Approach Building */}
      <section className="section-padding border-b border-border bg-card">
        <div className="container-narrow">
          <SectionHeader title="How We Approach Building" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We start with real problems, not ideas in search of validation.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              We believe teams matter more than tactics, judgment matters more than speed, and integrity matters more than growth. We favour small, focused teams, deep work, and steady progress over noise and performative innovation.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              Our role is to create the conditions where good builders can do their best work.
            </p>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <SectionHeader title="What We Focus On" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We explore and build ventures in areas where:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Problems are real and persistent',
                'Incentives can be aligned toward good outcomes',
                'Businesses can grow without harming people',
                'Excellence and trust create durable advantage',
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
            <p className="text-muted-foreground mb-8">
              Our ventures span different stages, from early exploration to active building.
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/ventures">
                View Our Ventures
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Partner */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader title="Ways to Partner" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              There are many ways to build with us.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              Some partners bring capital. Others bring time, judgment, skills, or deep domain knowledge. Some join to build full-time. Others contribute alongside existing work.
            </p>
            <p className="leading-relaxed text-foreground font-medium mb-8">
              What matters most is alignment on values, patience for long-term work, and a genuine desire to serve.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
