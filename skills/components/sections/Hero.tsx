import SearchForm from "../general/SearchForm";

const Hero = ({ query }: { readonly query: string | undefined }) => {
  return (
    <section className="py-12 md:py-20  relative overflow-hidden font-work-sans  ">
      <div className="absolute inset-0 bg-primary pattern opacity-90"></div>
      <div className="max-container padding-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in flexCenter flex-col gap-2">
          <h1 className=" heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            PITCH YOUR STARTUP,
            <br />
            CONNECT WITH ENTREPRENEURS
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Connect with mentors who want to help you grow, or find
            collaborators to bring your vision to life.
          </p>
          <SearchForm query={query} />
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search startup..."
                className="rounded-full w-full sm:w-64 md:w-80 pl-10 pr-4 py-2 text-sm bg-primary-100/95 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-black "
              />
            </div>
            <Button
              className=" border dark:bg-secondary-500 dark:hover:bg-secondary-600 bg-white text-black dark:border-secondary-600 dark:text-white border-primary-600 text-brand-pink hover:bg-primary-400 hover:border-primary-700 hover:text-white transition-colors duration-200 ease-in-out"
              size="lg"
              asChild
            >
              <Link href="/projects">
                Browse Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
