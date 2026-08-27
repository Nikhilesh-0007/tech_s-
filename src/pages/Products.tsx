import { motion } from 'framer-motion';
import { sbnProducts, sbnProfile } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { Card } from '../components/ui/Card';
import { IconBadge } from '../components/ui/IconBadge';
import { Button } from '../components/ui/Button';
import { MessageSquare } from 'lucide-react';

export function Products() {
  const getWhatsAppLink = (categoryName: string) => {
    const message = `Hello CIS Tech Solutions, I am interested in your ${categoryName} hardware listings. Please share available models, pre-owned stock, and price details.`;
    return `https://wa.me/91${sbnProfile.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="bg-deep-green text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <Container className="relative z-10">
          <SectionEyebrow dark={true}>Products Catalog</SectionEyebrow>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight tracking-tight">
            New & Refurbished Networking Gear
          </h1>
          <p className="font-sans text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            PAN-India sourcing for routers, managed switch configurations, SFP modules, and high-density computing servers.
          </p>
        </Container>
      </section>

      {/* 2. Products Grid */}
      <section className="py-20 bg-white border-b border-border-green/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sbnProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(0.2, idx * 0.05) }}
              >
                <Card className="group h-full flex flex-col justify-between hover:border-primary-green p-0 overflow-hidden">
                  {/* Image container */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <IconBadge name={prod.iconName} size="sm" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark-text group-hover:text-primary-green transition-colors mb-3">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-6">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Inquiry Actions */}
                    <div className="mt-4">
                      <a
                        href={getWhatsAppLink(prod.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full"
                      >
                        <Button
                          variant="primary"
                          className="w-full py-2.5 text-xs flex items-center justify-center gap-2 shadow-sm"
                        >
                          <MessageSquare size={14} />
                          <span>Request WhatsApp Quote</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Products;
