import { Layout } from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl prose prose-neutral">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided for informational purposes only. The content on this site is not intended to constitute professional advice. You should seek appropriate professional advice before making any decisions based on information from this site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content, features, and functionality of this website are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date at the top of this page.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at hello@venturebuilder.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
