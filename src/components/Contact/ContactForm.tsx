import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    // Contact form disabled for frontend-only mode
    setTimeout(() => {
      toast({
        title: "Contact form disabled",
        description: "Contact functionality is currently disabled. Please check back later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-deep-charcoal mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Interested in purchasing a piece or commissioning custom work? I'd
            love to hear from you and discuss how my art can find a place in
            your space.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gray-100 p-12 rounded-lg">
            <i className="fas fa-tools text-4xl text-gray-400 mb-4"></i>
            <h3 className="font-serif text-2xl font-semibold text-gray-600 mb-4">
              Contact Form Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              The contact functionality is currently being developed. Please check back later or reach out through social media.
            </p>
          </div>

          {/* Hidden contact form - keep code for future backend integration */}
          <div className="hidden">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-deep-charcoal mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-deep-charcoal mr-4 w-5"></i>
                    <span className="text-gray-700">contact@tillgrassmann.art</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-deep-charcoal mr-4 w-5"></i>
                    <span className="text-gray-700">+49 176 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-deep-charcoal mr-4 w-5"></i>
                    <span className="text-gray-700">Germany</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-deep-charcoal mb-4">
                    Follow My Work
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-deep-charcoal transition-colors"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-deep-charcoal transition-colors"
                    >
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-deep-charcoal transition-colors"
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="inquiry">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="purchase">
                                Purchase Interest
                              </SelectItem>
                              <SelectItem value="commission">
                                Commission Request
                              </SelectItem>
                              <SelectItem value="exhibition">
                                Exhibition Opportunity
                              </SelectItem>
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell me about your interest in my work..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-deep-charcoal text-white hover:bg-gray-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fas fa-paper-plane ml-2"></i>
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
