import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase, type PartnerSubmission } from '@/lib/supabase';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const partnerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  partnership_type: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type PartnerFormValues = z.infer<typeof partnerFormSchema>;

export function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      partnership_type: '',
      message: '',
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
    setIsSubmitting(true);

    try {
      const submission: PartnerSubmission = {
        name: data.name,
        email: data.email,
        company: data.company,
        partnership_type: data.partnership_type,
        message: data.message,
      };

      const { error } = await supabase
        .from('partners')
        .insert([submission]);

      if (error) throw error;

      // Send email notifications
      await sendEmail({
        type: 'partner',
        data: submission,
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
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your company (optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="partnership_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a partnership type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="capital">Capital Partner</SelectItem>
                  <SelectItem value="operator">Operating Partner</SelectItem>
                  <SelectItem value="strategic">Strategic Partner</SelectItem>
                  <SelectItem value="advisor">Advisor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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
                  placeholder="Tell us about your interest in partnering..."
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
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </Form>
  );
}
