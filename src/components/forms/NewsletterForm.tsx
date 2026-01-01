import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase, type NewsletterSubscription } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const newsletterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);

    try {
      const subscription: NewsletterSubscription = {
        email: data.email,
      };

      const { error } = await supabase
        .from('newsletter')
        .insert([subscription]);

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          toast.error('Already subscribed', {
            description: 'This email is already on our newsletter list.',
          });
        } else {
          throw error;
        }
      } else {
        // Send email notifications
        await sendEmail({
          type: 'newsletter',
          data: subscription,
        });

        toast.success('Successfully subscribed!', {
          description: 'Thank you for joining our newsletter. Check your email for confirmation.',
        });
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="hero" disabled={isSubmitting} className="shrink-0">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </Form>
  );
}
