
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, LightbulbIcon, UsersIcon, BookOpenIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        
        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-brand-gray">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Share Your Idea</h3>
                <p className="text-muted-foreground">Create a project listing detailing your vision, goals, and the type of help you need.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-muted-foreground">Get matched with mentors or collaborators who have the expertise you're looking for.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Build Together</h3>
                <p className="text-muted-foreground">Collaborate effectively to bring your project to life with support and guidance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Idea?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our community of innovators, mentors, and collaborators to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white" size="lg" asChild>
                <Link to="/create-project">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark" size="lg" asChild>
                <Link to="/projects">
                  Explore Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
