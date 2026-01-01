import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { supabase } from '@/lib/supabase';
import { PinProtection } from '@/components/admin/PinProtection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Users, Mail, Hammer, MessageSquare } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface PartnerData {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  partnership_type: string;
  message: string;
}

interface NewsletterData {
  id: string;
  created_at: string;
  email: string;
}

interface BuildInquiryData {
  id: string;
  created_at: string;
  name: string;
  email: string;
  expertise: string;
  message: string;
}

interface ContactData {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Admin() {
  const [partners, setPartners] = useState<PartnerData[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterData[]>([]);
  const [buildInquiries, setBuildInquiries] = useState<BuildInquiryData[]>([]);
  const [contact, setContact] = useState<ContactData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      const [partnersRes, newsletterRes, buildRes, contactRes] = await Promise.all([
        supabase.from('partners').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter').select('*').order('created_at', { ascending: false }),
        supabase.from('build_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('contact').select('*').order('created_at', { ascending: false }),
      ]);

      if (partnersRes.error) throw partnersRes.error;
      if (newsletterRes.error) throw newsletterRes.error;
      if (buildRes.error) throw buildRes.error;
      if (contactRes.error) throw contactRes.error;

      setPartners(partnersRes.data || []);
      setNewsletter(newsletterRes.data || []);
      setBuildInquiries(buildRes.data || []);
      setContact(contactRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      </Layout>
    );
  }

  return (
    <PinProtection>
      <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-8">
            <h1 className="mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">View and manage form submissions</p>
          </div>

          <Tabs defaultValue="partners" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="partners" className="gap-2">
                <Users className="w-4 h-4" />
                Partners ({partners.length})
              </TabsTrigger>
              <TabsTrigger value="newsletter" className="gap-2">
                <Mail className="w-4 h-4" />
                Newsletter ({newsletter.length})
              </TabsTrigger>
              <TabsTrigger value="build" className="gap-2">
                <Hammer className="w-4 h-4" />
                Build Inquiries ({buildInquiries.length})
              </TabsTrigger>
              <TabsTrigger value="contact" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact ({contact.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="partners">
              <Card>
                <CardHeader>
                  <CardTitle>Partner Applications</CardTitle>
                  <CardDescription>Submissions from the partner form</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {partners.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center text-muted-foreground">
                              No submissions yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          partners.map((partner) => (
                            <TableRow key={partner.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(partner.created_at)}
                              </TableCell>
                              <TableCell className="font-medium">{partner.name}</TableCell>
                              <TableCell>{partner.email}</TableCell>
                              <TableCell>{partner.company || '-'}</TableCell>
                              <TableCell className="capitalize">{partner.partnership_type || '-'}</TableCell>
                              <TableCell className="max-w-md truncate">{partner.message}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Subscriptions</CardTitle>
                  <CardDescription>Email addresses subscribed to updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Email</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {newsletter.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={2} className="text-center text-muted-foreground">
                              No subscriptions yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          newsletter.map((sub) => (
                            <TableRow key={sub.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(sub.created_at)}
                              </TableCell>
                              <TableCell>{sub.email}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="build">
              <Card>
                <CardHeader>
                  <CardTitle>Build With Us Inquiries</CardTitle>
                  <CardDescription>Applications to build ventures together</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Expertise</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {buildInquiries.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center text-muted-foreground">
                              No inquiries yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          buildInquiries.map((inquiry) => (
                            <TableRow key={inquiry.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(inquiry.created_at)}
                              </TableCell>
                              <TableCell className="font-medium">{inquiry.name}</TableCell>
                              <TableCell>{inquiry.email}</TableCell>
                              <TableCell>{inquiry.expertise || '-'}</TableCell>
                              <TableCell className="max-w-md truncate">{inquiry.message}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Messages</CardTitle>
                  <CardDescription>General contact form submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contact.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center text-muted-foreground">
                              No messages yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          contact.map((msg) => (
                            <TableRow key={msg.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(msg.created_at)}
                              </TableCell>
                              <TableCell className="font-medium">{msg.name}</TableCell>
                              <TableCell>{msg.email}</TableCell>
                              <TableCell>{msg.subject || '-'}</TableCell>
                              <TableCell className="max-w-md truncate">{msg.message}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
    </PinProtection>
  );
}
