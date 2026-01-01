import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

interface PinProtectionProps {
  children: React.ReactNode;
}

// TODO: Replace with your desired PIN - this should match what you set in .env
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || 'admin123';

export function PinProtection({ children }: PinProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated in session storage
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (pin === ADMIN_PIN) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
        toast.success('Access granted');
      } else {
        toast.error('Incorrect PIN');
        setPin('');
      }
      setIsLoading(false);
    }, 500);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-muted-foreground" />
          </div>
          <CardTitle>Admin Access</CardTitle>
          <CardDescription>Enter PIN to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
              disabled={isLoading}
            />
            <Button type="submit" className="w-full" disabled={isLoading || !pin}>
              {isLoading ? 'Verifying...' : 'Access Dashboard'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
