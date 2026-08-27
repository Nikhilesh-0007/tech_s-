import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '../lib/validation';
import { sbnProfile } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    console.log('Submitted consultation request:', data);

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesList = [
    'Structured Cabling',
    'Network Infrastructure',
    'Server & Data Center Solutions',
    'Network Security',
    'CCTV & Surveillance',
    'Wi-Fi & Wireless Solutions',
    'Access Control Systems',
    'Cloud & Business Solutions',
    'IT Support & Maintenance',
    'Other / Consultation Request',
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="bg-soft-bg py-10 md:py-14 border-b border-border-green/20">
        <Container>
          <SectionEyebrow>Contact Us</SectionEyebrow>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4 leading-tight tracking-tight">
            Consult With Our Engineers
          </h1>
          <p className="font-sans text-body-text max-w-2xl text-sm sm:text-base leading-relaxed">
            Reach out via phone, email, or WhatsApp. We provide pan-India hardware shipments and technical configurations.
          </p>
        </Container>
      </section>

      {/* 2. Contact Split Info + Form */}
      <section className="py-20 bg-white border-b border-border-green/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Info Col */}
            <div className="lg:col-span-5 flex flex-col">
              <SectionEyebrow>Direct Office Lines</SectionEyebrow>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-text mb-6">
                Ready to Reduce Your Network Capex?
              </h2>
              
              <div className="flex flex-col gap-6">
                {/* Phone support */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-light-green text-primary-green flex items-center justify-center shrink-0 border border-border-green/30">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-body-text tracking-wider mb-1">
                      Phone Support
                    </h4>
                    {sbnProfile.phones.map((phone, idx) => (
                      <p key={idx} className="font-sans text-sm font-semibold text-dark-text">
                        <a href={`tel:+91${phone}`} className="hover:text-primary-green transition-colors">
                          +91 {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-light-green text-primary-green flex items-center justify-center shrink-0 border border-border-green/30">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-body-text tracking-wider mb-1">
                      WhatsApp Direct
                    </h4>
                    <p className="font-sans text-sm font-semibold text-dark-text">
                      <a
                        href={`https://wa.me/91${sbnProfile.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary-green transition-colors"
                      >
                        +91 {sbnProfile.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email support */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-light-green text-primary-green flex items-center justify-center shrink-0 border border-border-green/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-body-text tracking-wider mb-1">
                      Email Inquiries
                    </h4>
                    {sbnProfile.emails.map((email, idx) => (
                      <p key={idx} className="font-sans text-sm font-semibold text-dark-text">
                        <a href={`mailto:${email}`} className="hover:text-primary-green transition-colors">
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-light-green text-primary-green flex items-center justify-center shrink-0 border border-border-green/30">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-body-text tracking-wider mb-1">
                      Corporate Address
                    </h4>
                    <p className="font-sans text-sm font-semibold text-dark-text leading-snug">
                      {sbnProfile.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-light-green text-primary-green flex items-center justify-center shrink-0 border border-border-green/30">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-body-text tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="font-sans text-sm font-semibold text-dark-text leading-snug">
                      {sbnProfile.hours.days}
                      <br />
                      {sbnProfile.hours.time}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-7 bg-soft-bg border border-border-green/60 p-6 md:p-8 rounded-[12px] shadow-premium-green min-h-[500px] flex flex-col justify-center">
              {submitStatus === 'success' ? (
                <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-light-green text-primary-green flex items-center justify-center border border-border-green">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-dark-text">
                    Consultation Request Received
                  </h3>
                  <p className="font-sans text-sm text-body-text max-w-md leading-relaxed">
                    Thank you! Your quote/consultation details have been logged. Our network coordinators will verify stock and contact you shortly.
                  </p>
                  <Button variant="primary" onClick={() => setSubmitStatus('idle')} className="mt-6">
                    Request Another Quote
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-[8px] flex gap-3 items-center text-sm">
                      <AlertCircle className="shrink-0" size={18} />
                      <span>Submission failure. Please verify inputs and network connection.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-heading font-bold text-xs text-dark-text">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Rajesh Kumar"
                        {...register('name')}
                        className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors ${
                          errors.name ? 'border-red-500' : 'border-border-green/80'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-semibold">{errors.name.message}</span>
                      )}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="font-heading font-bold text-xs text-dark-text">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Acme Corp"
                        {...register('company')}
                        className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors ${
                          errors.company ? 'border-red-500' : 'border-border-green/80'
                        }`}
                      />
                      {errors.company && (
                        <span className="text-red-500 text-xs font-semibold">{errors.company.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-heading font-bold text-xs text-dark-text">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +91 63623 14041"
                        {...register('phone')}
                        className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-border-green/80'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-xs font-semibold">{errors.phone.message}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-heading font-bold text-xs text-dark-text">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. rajesh@acme.com"
                        {...register('email')}
                        className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors ${
                          errors.email ? 'border-red-500' : 'border-border-green/80'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-semibold">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="font-heading font-bold text-xs text-dark-text">
                      Required Technology Service *
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      defaultValue=""
                      className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors cursor-pointer appearance-none ${
                        errors.service ? 'border-red-500' : 'border-border-green/80'
                      }`}
                    >
                      <option value="" disabled>Select hardware/service type...</option>
                      {servicesList.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-red-500 text-xs font-semibold">{errors.service.message}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-heading font-bold text-xs text-dark-text">
                      Scope / Hardware Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Specify switch series (e.g. Cisco Catalyst 9300), server CPUs, RAM capacities, optical pigtails, or support contracts..."
                      {...register('message')}
                      className={`w-full px-4 py-2.5 bg-white border rounded-[8px] text-sm focus:border-primary-green transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-border-green/80'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs font-semibold">{errors.message.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full h-11 flex justify-center items-center shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Logging Inquiry...</span>
                      </>
                    ) : (
                      <span>Request Quote / Callback</span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Google Map section */}
      <section className="h-[450px] w-full bg-soft-bg relative border-b border-border-green/20">
        <iframe
          title="CIS Tech Solutions BTM Layout Google Map Locator"
          src={sbnProfile.maps.embed}
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
export default Contact;
