import SearchForm from "../general/SearchForm";

const Hero = ({ query }: { readonly query: string | undefined }) => {
  return (
    <section className="py-12 md:py-20  relative overflow-hidden font-work-sans  ">
      <div className="absolute inset-0 bg-primary pattern opacity-90"></div>
      <div className="max-container padding-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in flexCenter flex-col gap-2">
          <h1 className=" heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            PITCH YOUR Project,
            <br />
            CONNECT WITH ENTREPRENEURS
          </h1>
          <p className="text-lg md:text-xl text-white/95">
            Connect with mentors who want to help you grow, or find
            collaborators to bring your vision to life.
          </p>
          <SearchForm query={query} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
