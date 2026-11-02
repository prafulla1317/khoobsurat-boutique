import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionCatalog } from './components/CollectionCatalog';
import { BespokeStudio } from './components/BespokeStudio';
import { MeasurementGuide } from './components/MeasurementGuide';
import { CraftsmanshipStory } from './components/CraftsmanshipStory';
import { Testimonials } from './components/Testimonials';
import { StoreLocation } from './components/StoreLocation';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ProductItem } from './types';
import { BOUTIQUE_INFO } from './data/boutiqueData';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#241A1A]">
      {/* Top Header */}
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
        <CollectionCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
        <BespokeStudio />
        <MeasurementGuide />
        <CraftsmanshipStory />
        <Testimonials />
        <StoreLocation onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenConsultation={() => {
          setSelectedProduct(null);
          setIsConsultationOpen(true);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating Quick WhatsApp Action Button (Discreet, 15% mobile sticky cap compliant) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/91${BOUTIQUE_INFO.rawPhone}?text=${encodeURIComponent('Hello Sunita ji, I have an inquiry for Khoobsurat Boutique Raipur.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all"
          aria-label="Direct WhatsApp Chat with Sunita Jadwani"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide uppercase pr-1 text-[#0A3D18]">
            Chat with Sunita Jadwani
          </span>
        </a>
      </aside>
    </div>
  );
}
