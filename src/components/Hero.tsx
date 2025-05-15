
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-olive">
              Prince Omuyeh
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 text-lavender">
              Software Engineer | Machine Learning Enthusiast | Game Developer
            </h2>
 
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-olive text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-tan text-foreground px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/3 w-2/3 aspect-square rounded-full overflow-hidden border-4 border-olive">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format"
              alt="Prince Omuyeh (Placeholder)"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
