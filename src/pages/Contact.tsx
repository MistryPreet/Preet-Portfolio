import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'preetmistry899@gmail.com',
      href: 'mailto:preetmistry899@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7600215496',
      href: 'tel:+91 7600215496'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/alexjohnson',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/alexjohnson',
      color: 'hover:text-gray-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/alexjohnson',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how we can work together 
            to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-xl animate-slideUp">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-border/50 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-border/50 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-border/50 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-border/50 focus:border-primary resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <div className="glass p-6 rounded-xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-3 rounded-lg glass-hover transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass rounded-lg flex items-center justify-center glass-hover transition-all duration-200 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-6 rounded-xl animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Availability
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-muted-foreground">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-muted-foreground">Open to consulting opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">Considering full-time roles</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-sm text-primary font-medium">Response Time</div>
                <div className="text-xs text-muted-foreground">
                  I typically respond within 24 hours during business days
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass p-6 rounded-xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Let's Create Impact
              </h3>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Projects Completed:</span>
                  <span className="text-accent font-medium">50+</span>
                </div>
                <div className="flex justify-between">
                  <span>Client Satisfaction:</span>
                  <span className="text-accent font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Rate:</span>
                  <span className="text-accent font-medium">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;