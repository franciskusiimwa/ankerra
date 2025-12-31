import { Layout } from '@/components/layout/Layout';
import { VentureCard } from '@/components/shared/VentureCard';

const ventures = [
  {
    name: 'Essential Access',
    description: 'A venture focused on improving access to essential services through better systems and incentives.',
    status: 'exploring' as const,
    problem: 'Many communities lack reliable access to essential services due to fragmented systems and misaligned incentives.',
    support: 'Domain expertise in healthcare logistics, regulatory navigation, and local partnerships.',
  },
  {
    name: 'Workforce Integrity',
    description: 'A business designed to professionalize an overlooked sector while improving outcomes for customers and workers.',
    status: 'building' as const,
    problem: 'Certain service industries suffer from lack of professionalization, leading to poor outcomes for both workers and customers.',
    support: 'Operational leaders with experience in service industries, training, and quality systems.',
  },
  {
    name: 'Stewardship Capital',
    description: 'An investment approach that aligns long-term capital with businesses built on enduring principles.',
    status: 'exploring' as const,
    problem: 'Short-term capital pressure often undermines businesses that would otherwise create lasting value.',
    support: 'Patient capital partners and advisors with experience in alternative investment structures.',
  },
];

const Ventures = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h1 className="mb-6">Ventures</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              What We Are Building
            </p>
          </div>
        </div>
      </section>

      {/* Ventures List */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-muted-foreground max-w-2xl mb-12">
            Below are ventures we are exploring or actively building. Some are early. Some are further along. All are grounded in real problems and long-term intent.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ventures.map((venture, index) => (
              <VentureCard key={index} {...venture} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ventures;
