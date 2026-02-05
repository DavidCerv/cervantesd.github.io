import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="max-w-4xl w-full mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Building digital experiences that matter.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer focused on creating intuitive, performant, and beautiful web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="group inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background/50 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/0" />
        </div>
      </section>

      {/* Featured Projects Section Preview */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Selected Works</h2>
              <p className="text-muted-foreground">A showcase of my recent technical projects.</p>
            </div>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4 decoration-primary">
              View all projects &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="aspect-video w-full bg-muted/50 group-hover:bg-muted transition-colors flex items-center justify-center">
                  <span className="text-muted-foreground/50">Project Preview {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Project Title {item}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A brief description of the project and the technologies used to build it.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} David Cervantes. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
