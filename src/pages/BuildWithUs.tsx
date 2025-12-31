import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';

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
                  <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                    LinkedIn Profile (optional)
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    What type of engagement interests you?
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="fulltime">Full-time role</option>
                    <option value="parttime">Part-time role</option>
                    <option value="project">Project-based</option>
                    <option value="open">Open to discussion</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="background" className="block text-sm font-medium mb-2">
                    Tell us about your background and what you bring
                  </label>
                  <textarea
                    id="background"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    placeholder="Share your experience, skills, and what kind of work energizes you..."
                  />
                </div>
                <div>
                  <label htmlFor="why" className="block text-sm font-medium mb-2">
                    Why does this work resonate with you?
                  </label>
                  <textarea
                    id="why"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    placeholder="What draws you to this approach to building?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuildWithUs;
