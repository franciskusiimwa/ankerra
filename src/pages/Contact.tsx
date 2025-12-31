import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Contact</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Get in Touch
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              If you'd like to start a conversation, the best way is to reach out directly.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:hello@venturebuilder.com"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-muted-foreground">hello@venturebuilder.com</p>
                </div>
              </a>

              {/* Calendly */}
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-lg">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Book a Conversation</p>
                    <p className="text-sm text-muted-foreground">Schedule a time that works for you</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  Open Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
