import { useState } from 'react';
import { User, Code, Palette, Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'approach', label: 'Approach', icon: Target },
    { id: 'passion', label: 'Passion', icon: Heart },
  ];

  const stats = [
    { number: '8+', label: 'Years Experience', icon: Code },
    { number: '150+', label: 'Projects Completed', icon: Lightbulb },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '95%', label: 'Success Rate', icon: Target },
  ];

  const skills = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], color: 'from-green-500 to-emerald-500' },
    { category: 'Design', skills: ['Figma', 'Adobe XD', 'Framer', 'Prototyping'], color: 'from-purple-500 to-pink-500' },
    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel'], color: 'from-orange-500 to-red-500' },
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          My journey into development started 8 years ago when I built my first website for a local business. 
          What began as curiosity evolved into a passion for creating digital experiences that truly matter.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I've had the privilege of working with startups, enterprises, and everything in between, 
          helping them transform ideas into powerful digital solutions that drive real business results.
        </p>
        <div className="glass-card">
          <h4 className="text-xl font-semibold mb-4">Core Values</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {['Innovation', 'Quality', 'Collaboration', 'Growth'].map((value) => (
              <div key={value} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    approach: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I believe in a user-centered approach to development. Every project starts with understanding 
          the problem we're solving and the people we're solving it for.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Research First', desc: 'Understanding user needs and business goals' },
            { title: 'Iterative Design', desc: 'Continuous improvement through feedback' },
            { title: 'Clean Code', desc: 'Maintainable, scalable, and efficient solutions' },
            { title: 'Collaboration', desc: 'Working closely with teams and stakeholders' },
          ].map((item, index) => (
            <div key={index} className="glass p-4 rounded-xl">
              <h5 className="font-semibold text-primary mb-2">{item.title}</h5>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    passion: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          What drives me is the intersection of technology and human experience. I'm passionate about 
          creating solutions that not only work beautifully but also make a positive impact.
        </p>
        <div className="glass-card">
          <h4 className="text-xl font-semibold mb-4">Beyond Code</h4>
          <div className="space-y-4">
            {[
              'Mentoring junior developers and giving back to the community',
              'Exploring emerging technologies like AI and Web3',
              'Contributing to open-source projects',
              'Speaking at tech conferences and meetups',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-xs text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a mission to create exceptional digital experiences 
            that bridge the gap between design and functionality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Tabs */}
          <div className="reveal">
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8 glass p-2 rounded-2xl w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-primary text-white shadow-glow'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {tabContent[activeTab as keyof typeof tabContent]}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="reveal">
            <h3 className="text-3xl font-bold mb-8">Skills & Expertise</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color}`} />
                    <h4 className="text-xl font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted/50 rounded-full text-sm font-medium hover:bg-muted transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;