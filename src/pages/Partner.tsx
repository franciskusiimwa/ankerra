import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';

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
            
            {/* Tally Form Embed - Replace with your actual Tally form URL */}
            <div className="bg-background border border-border rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    How would you like to contribute?
                  </label>
                  <select
                    id="type"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="capital">Capital</option>
                    <option value="expertise">Domain Expertise</option>
                    <option value="time">Time & Skills</option>
                    <option value="advisory">Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about yourself and what draws you to this work
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    placeholder="Share your background, interests, and what resonates with you about our approach..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
