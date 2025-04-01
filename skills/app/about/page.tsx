import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircleDollarSign,
  Clock,
  HandHeart,
  Rocket,
  StarIcon,
  Users,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-primary pattern  ">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="heading mb-6">About Mentorly</h1>
          <p className="sub-heading mb-8">
            Connecting passionate creators with mentors and collaborators to
            bring great ideas to life
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="max-container padding-container ">
          <h2 className="text-30-bold text-center mb-10">Our Mission</h2>
          <div className="bg-primary-50 border-[3px] border-primary-400 p-8 rounded-[22px] shadow-100 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
            <p className="text-16-medium text-black-100 mb-4">
              At Mentorly, we believe that great ideas deserve to be built, but
              we also know that building something meaningful often requires
              guidance and collaboration.
            </p>
            <p className="text-16-medium text-black-100 mb-4">
              Our platform connects ambitious creators with experienced mentors
              and enthusiastic collaborators who can help turn concepts into
              reality.
            </p>
            <p className="text-16-medium text-black-100">
              Whether you&apos;re a developer seeking feedback, a designer
              looking for technical partners, or an experienced professional
              wanting to give back - Mentorly creates the connections that help
              ideas flourish.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-30-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-[3px] border-black p-6 rounded-[22px] shadow-100 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-20-medium mb-3">Share Your Project</h3>
              <p className="text-black-100">
                Create a detailed project listing explaining your vision and
                what kind of help you&apos;re looking for.
              </p>
            </div>

            <div className="bg-white border-[3px] border-black p-6 rounded-[22px] shadow-100 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-20-medium mb-3">Connect with Others</h3>
              <p className="text-black-100">
                Browse mentors and potential collaborators or receive
                applications from interested partners.
              </p>
            </div>

            <div className="bg-white border-[3px] border-black p-6 rounded-[22px] shadow-100 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-20-medium mb-3">Build Together</h3>
              <p className="text-black-100">
                Collaborate effectively through our platform to bring your
                project to life with the right support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-30-bold text-center mb-12">
            Benefits of Using Mentorly
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <StarIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-20-medium mb-2">Quality Connections</h3>
                <p className="text-black-100">
                  Our platform focuses on meaningful connections rather than
                  quantity, helping you find the right match for your project
                  needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-20-medium mb-2">Save Time</h3>
                <p className="text-black-100">
                  No more searching through multiple platforms or networks to
                  find the right collaborators or mentors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-20-medium mb-2">Community Support</h3>
                <p className="text-black-100">
                  Join a community of like-minded creators and mentors who are
                  passionate about building and learning together.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-20-medium mb-2">Free to Use</h3>
                <p className="text-black-100">
                  Our core platform is completely free to use, making it
                  accessible to creators at any stage of their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-30-extrabold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="sub-heading mb-8 max-w-2xl mx-auto">
            Join our community of innovators, mentors, and collaborators to turn
            your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white hover:bg-white/90 text-primary border-[3px] border-black shadow-100"
              size="lg"
              asChild
            >
              <Link href="/create-project">
                Share Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 border-[3px]"
              size="lg"
              asChild
            >
              <Link href="/projects">Browse Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
