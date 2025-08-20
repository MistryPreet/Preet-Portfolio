import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({});

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'SQL', level: 92, category: 'Database' },
    { name: 'Power BI', level: 88, category: 'Visualization' },
    { name: 'Tableau', level: 82, category: 'Visualization' },
    { name: 'Excel/VBA', level: 89, category: 'Tools' },
    { name: 'R', level: 75, category: 'Programming' },
    { name: 'Machine Learning', level: 85, category: 'Analytics' },
    { name: 'Statistical Analysis', level: 87, category: 'Analytics' },
  ];

  const certifications = [
    'Microsoft Certified: Data Analyst Associate (In Progress)',
    'Tableau Desktop Specialist (Practice Projects)',
    'Google Analytics Fundamentals',
    'AWS Cloud Practitioner (Learning)',
    'Python for Data Science Certification',
  ];

  const interests = [
    'Data Science', 'Artificial Intelligence', 'Machine Learning',
    'Business Intelligence', 'Predictive Analytics', 
    'Data Visualization', 'Statistical Modeling',
    'Big Data', 'Cloud Computing', 'Automation'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const progress: Record<string, number> = {};
      skills.forEach(skill => {
        progress[skill.name] = skill.level;
      });
      setSkillProgress(progress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Final year IT student and aspiring Data Analyst from Gujarat, India.  
            Passionate about leveraging data, AI, and visualization to create actionable business insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-xl animate-slideUp">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                <div className="w-44 h-44 bg-surface rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">PM</span>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Preet Mistry</h2>
                <p className="text-accent font-medium mb-4">Aspiring Data Analyst | AI Enthusiast</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Based in Gujarat, India. I enjoy solving complex problems using data and technology, 
                  with a focus on analytics, visualization, and building intelligent solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="glass p-8 rounded-xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey with data began during my IT studies, where I discovered the power of 
                  data-driven decision-making. What started with curiosity about numbers evolved into 
                  a deep interest in analytics, AI, and visualization.
                </p>
                <p>
                  I have worked on academic and personal projects in data processing, visualization, 
                  and machine learning, focusing on creating solutions that can simplify decision-making 
                  for organizations. My strength lies in bridging the gap between raw data and actionable insights.
                </p>
                <p>
                  Beyond academics, I am constantly learning new technologies, contributing to practice projects, 
                  and exploring how AI and cloud computing can shape the future of data analytics. 
                  I aspire to grow into a professional who can combine technical skills with business acumen 
                  to deliver real-world impact.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="glass p-8 rounded-xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillProgress[skill.name] || 0} 
                      className="h-2 bg-surface"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass p-8 rounded-xl animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass p-8 rounded-xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="glass text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
