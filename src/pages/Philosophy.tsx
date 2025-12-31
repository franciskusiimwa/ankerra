import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';

const Philosophy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Philosophy</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The principles that guide how we think, decide, and build.
            </p>
          </div>
        </div>
      </section>

      {/* Our Conviction */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <SectionHeader title="Our Conviction" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We believe work is a form of stewardship.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              The resources we are given, whether capital, talent, time, or influence, are not ours to waste. They are to be stewarded carefully, deployed wisely, and multiplied responsibly. This conviction shapes how we choose what to build, who we build with, and how we measure success.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              Our faith informs our posture, but our work is expressed through practical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* How We Decide What to Build */}
      <section className="section-padding border-b border-border bg-card">
        <div className="container-narrow">
          <SectionHeader title="How We Decide What to Build" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We ask hard questions before we commit.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Is the problem real and meaningful?',
                'Does solving it genuinely improve people\'s lives?',
                'Can we build this with integrity, without shortcuts or harm?',
                'Are we the right people to build it well?',
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
              If the answer is unclear, we wait. We believe patience is a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work With Teams */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <SectionHeader title="How We Work With Teams" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We trust teams and hold them accountable.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              We give builders room to think, experiment, and exercise judgment. At the same time, we care deeply about clarity, ownership, and follow-through. Autonomy without responsibility is chaos. Discipline without trust is stagnation.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              We aim for the narrow path between the two.
            </p>
          </div>
        </div>
      </section>

      {/* What We Will Not Do */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader title="What We Will Not Do" />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We will not chase trends for the sake of relevance.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'We will not pursue growth that compromises integrity.',
                'We will not build businesses that extract value without giving it back.',
                'We will not sacrifice people on the altar of speed or ambition.',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-foreground font-medium">
              These are not trade-offs we are willing to make.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophy;
