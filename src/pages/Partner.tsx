import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PartnerForm } from '@/components/forms/PartnerForm';

const Partner = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Partner</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Build With Us
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Partnership is central to how we work.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              We partner with people who bring capital, skills, time, or wisdom and who are willing to engage thoughtfully. We care deeply about alignment, expectations, and trust from the beginning.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              If you are interested in partnering with us in any capacity, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader title="Get in Touch" />
          <div className="max-w-2xl">
            <p className="text-muted-foreground mb-8">
              Please share a bit about yourself, how you'd like to contribute, and what draws you to this work. We review every submission carefully.
            </p>
            
            {/* Partner Form */}
            <div className="bg-background border border-border rounded-lg p-6 md:p-8">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
