import { cn } from '@/lib/utils';

interface VentureCardProps {
  name: string;
  description: string;
  status: 'exploring' | 'building' | 'active';
  problem: string;
  support?: string;
}

const statusStyles = {
  exploring: {
    label: 'Exploring',
    className: 'bg-muted text-muted-foreground',
  },
  building: {
    label: 'Building',
    className: 'bg-primary/10 text-primary',
  },
  active: {
    label: 'Active',
    className: 'bg-primary text-primary-foreground',
  },
};

export function VentureCard({
  name,
  description,
  status,
  problem,
  support,
}: VentureCardProps) {
  const statusInfo = statusStyles[status];

  return (
    <article className="group p-6 md:p-8 bg-card border border-border rounded-lg hover:shadow-soft transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span
          className={cn(
            'px-3 py-1 text-xs font-medium rounded-full shrink-0',
            statusInfo.className
          )}
        >
          {statusInfo.label}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="space-y-4 pt-4 border-t border-border">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            Problem
          </p>
          <p className="text-sm">{problem}</p>
        </div>
        
        {support && (
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              Support Needed
            </p>
            <p className="text-sm">{support}</p>
          </div>
        )}
      </div>
    </article>
  );
}
