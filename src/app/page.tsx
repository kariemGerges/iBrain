import React from 'react';
import Hero from '@/app/components/homePage/Hero';
import FeaturesSection from '@/app/components/homePage/FeaturesSection';
import CTASection from '@/app/components/homePage/CTASection';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <FeaturesSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
