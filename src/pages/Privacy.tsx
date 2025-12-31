import { Layout } from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Privacy Policy</h1>
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
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information you provide directly to us, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Name and contact information when you submit a form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Email address when you subscribe to updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Any other information you choose to provide</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to respond to your inquiries, send you updates you've requested, and improve our services. We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy or our practices, please contact us at hello@venturebuilder.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
