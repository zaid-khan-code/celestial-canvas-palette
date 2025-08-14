import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Twitter, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer & UI/UX Designer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-premium">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-3xl floating-slow" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 reveal">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-accent font-medium">
              <Sparkles size={20} className="animate-pulse-glow" />
              <span>Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient block">Alex Johnson</span>
            </h1>
            
            <div className="h-16 flex items-center">
              <p className="text-xl lg:text-2xl text-muted-foreground">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I create exceptional digital experiences that combine beautiful design with 
            powerful functionality. Passionate about crafting solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-premium flex items-center space-x-2 relative z-10">
              <Download size={20} />
              <span>Download CV</span>
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 rounded-full border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown size={20} />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="glass p-3 rounded-lg hover:scale-110 transition-all duration-300 hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="relative parallax-container">
          <div className="relative z-10 space-y-6">
            {/* Main Profile Card */}
            <div className="glass-card floating max-w-md mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Alex Johnson</h3>
                  <p className="text-muted-foreground">Senior Developer</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-semibold">8+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-semibold">150+ Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-accent rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Preview Card */}
            <div className="glass-card floating-delayed ml-12">
              <h4 className="font-semibold mb-3">Top Skills</h4>
              <div className="space-y-2">
                {['React & Next.js', 'Node.js & Python', 'UI/UX Design'].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{skill}</span>
                    <div className="w-16 h-2 bg-muted rounded-full">
                      <div 
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${90 + index * 3}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Card */}
            <div className="glass-card floating-slow mr-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold">Award Winner</h4>
                <p className="text-sm text-muted-foreground">Best Developer 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;