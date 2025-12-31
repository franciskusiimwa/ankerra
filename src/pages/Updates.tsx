import { Layout } from '@/components/layout/Layout';
import { NewsletterForm } from '@/components/shared/NewsletterForm';

const Updates = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Updates</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Stay in the Loop
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We share occasional updates on what we're building, what we're learning, and where we're headed.
            </p>
            <p className="leading-relaxed text-foreground font-medium mb-12">
              No noise. No spam. Only thoughtful reflections and progress.
            </p>
            
            <div className="p-8 md:p-12 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Updates</h3>
              <p className="text-muted-foreground mb-6">
                Enter your email to receive occasional updates from us.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Updates;
