import HowItWorks from "@/components/sections/HowItWorks";
import ReadySection from "@/components/sections/ReadySection";
import { CircleDollarSign, Clock, Rocket, StarIcon, Users } from "lucide-react";

const About = () => {
  const guideCards = [
    {
      id: 1,
      heading: "Share Your Project",
      desc: "Create a detailed project listing explaining your vision and what kind of help you're looking for.",
      icon: <Rocket className="h-8 w-8" />,
    },
    {
      id: 2,
      heading: "Connect with Others",
      desc: "Browse mentors and potential collaborators or receive applications from interested partners.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: 3,
      heading: "Build Together",
      desc: "  Collaborate effectively through our platform to bring your project to life with the right support.",
      icon: <CircleDollarSign className="h-8 w-8 " />,
    },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section className="py-28 bg-primary pattern  ">
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
          <div className=" border-[3px] border-primary-400 p-8 rounded-[22px] shadow-100 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
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
      <div className="border-y border-primary-400">
        <HowItWorks guideCards={guideCards} />
      </div>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-container padding-container">
          <h2 className="text-30-bold text-center mb-12">
            Benefits of Using Mentorly
          </h2>
          <div className="grid md:grid-cols-2 gap-10 ">
            <div className="flex gap-4 ">
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

      <ReadySection />
    </main>
  );
};

export default About;
