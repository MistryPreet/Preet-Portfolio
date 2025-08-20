import { useEffect, useState } from 'react';
import { ChevronDown, Database, BarChart3, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Data Analyst | AI Enthusiast | Final Year IT Student';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById('content');
    content?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fadeIn">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
              Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Preet Mistry</span>
            </h1>
            
            <div className="h-16 mb-8">
              <p className="font-display text-xl md:text-2xl text-muted-foreground font-mono">
                {typedText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about turning raw data into meaningful insights.  
              Skilled in analytics, AI, and visualization to help businesses make smarter, data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="gradient-primary hover:scale-105 transition-transform">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass glass-hover">
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="glass p-6 rounded-xl text-center animate-float">
                <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl text-center animate-float" style={{ animationDelay: '1s' }}>
                <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5TB+</div>
                <div className="text-sm text-muted-foreground">Data Analyzed</div>
              </div>
              <div className="glass p-6 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
                <TrendingUp className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Content Section */}
      <section id="content" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Turning Data Into <span className="text-accent">Real Business Value</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a final year IT student from Gujarat, I specialize in Data Analytics and AI.  
              My focus is on creating solutions that help organizations unlock insights,  
              improve efficiency, and achieve strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl glass-hover animate-slideUp">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Data Processing</h3>
              <p className="text-muted-foreground">
                Experienced with ETL, SQL, and Python for cleaning, transforming, and optimizing data pipelines.
              </p>
            </div>

            <div className="glass p-8 rounded-xl glass-hover animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Visualization</h3>
              <p className="text-muted-foreground">
                Skilled in building dashboards with Power BI, Tableau, and Python libraries to simplify decision-making.
              </p>
            </div>

            <div className="glass p-8 rounded-xl glass-hover animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">AI & Insights</h3>
              <p className="text-muted-foreground">
                Exploring AI and predictive models to turn data into actionable strategies that drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
