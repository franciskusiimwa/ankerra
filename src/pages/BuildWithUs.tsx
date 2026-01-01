import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BuildInquiryForm } from '@/components/forms/BuildInquiryForm';

const BuildWithUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Build With Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Who We Are Looking For
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We are looking for builders.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-6">
              People who take responsibility, think clearly, and care about doing things well. People who can hold tension, make decisions with incomplete information, and stay grounded when things are uncertain.
            </p>
            <p className="leading-relaxed text-foreground font-medium mb-6">
              Roles may be full-time, part-time, or project-based.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              If this sounds like you, we encourage you to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader title="Apply to Build With Us" />
          <div className="max-w-2xl">
            {/* Build Inquiry Form */}
            <div className="bg-background border border-border rounded-lg p-6 md:p-8">
              <BuildInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuildWithUs;
