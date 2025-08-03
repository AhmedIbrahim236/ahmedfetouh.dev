import AnimatedParticles from "@/components/AnimatedParticles";
import Code from "@/components/Code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10" />
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <AnimatedParticles />
      <div className="h-full w-full flex flex-col items-center justify-center space-y-6 text-center px-4 md:px-6">
        <Badge variant="secondary">Software Engineer & Developer</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
          Hi, I&apos;m
          <span className="text-gradient"> Ahmed Fetouh</span>
          <span className="animate-bounce-subtle inline-block">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          I build innovative, high-performance web applications with clean,
          maintainable code.
        </p>
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          <Button className="group rounded-full inline-flex gap-2 items-center justify-center !px-8 h-11 text-md font-medium">
            View my work
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            className="rounded-full inline-flex gap-2 items-center dark:hover:bg-accent justify-center !px-8 h-11 text-md font-medium"
            variant="outline"
          >
            Contact me
          </Button>
        </div>
        <Code />
      </div>
    </section>
  );
};

export default Hero;
