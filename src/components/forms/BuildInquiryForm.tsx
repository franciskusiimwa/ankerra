import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase, type BuildInquiry } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const buildInquiryFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  expertise: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type BuildInquiryFormValues = z.infer<typeof buildInquiryFormSchema>;

export function BuildInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BuildInquiryFormValues>({
    resolver: zodResolver(buildInquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      expertise: '',
      message: '',
    },
  });

  const onSubmit = async (data: BuildInquiryFormValues) => {
    setIsSubmitting(true);

    try {
      const inquiry: BuildInquiry = {
        name: data.name,
        email: data.email,
        expertise: data.expertise,
        message: data.message,
      };

      const { error } = await supabase
        .from('build_inquiries')
        .insert([inquiry]);

      if (error) throw error;

      // Send email notifications
      await sendEmail({
        type: 'build_inquiry',
        data: inquiry,
      });

      toast.success('Thank you for your interest!', {
        description: 'We\'ll review your submission and get back to you soon. Check your email for confirmation.',
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Areas of Expertise</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Engineering, Design, Operations..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your interest in building with us..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
