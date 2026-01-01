import { useEffect } from 'react';

interface TallyEmbedProps {
  formId: string;
  transparentBackground?: boolean;
  hideTitle?: boolean;
  alignLeft?: boolean;
}

export function TallyEmbed({ 
  formId, 
  transparentBackground = true,
  hideTitle = true,
  alignLeft = true 
}: TallyEmbedProps) {
  useEffect(() => {
    // Load Tally embed script
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script exists, trigger Tally to load forms
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    }

    return () => {
      // Cleanup is handled by Tally
    };
  }, [formId]);

  const options = [];
  if (transparentBackground) options.push('transparentBackground=1');
  if (hideTitle) options.push('hideTitle=1');
  if (alignLeft) options.push('alignLeft=1');

  return (
    <div className="w-full">
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?${options.join('&')}`}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Tally Form"
        className="w-full min-h-[500px]"
      />
    </div>
  );
}

// Add Tally type to window
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}
