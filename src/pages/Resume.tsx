import { Download, MapPin, Calendar, Building, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const experience = [
    {
      id: 1,
      title: 'Senior Data Analyst',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead data analysis initiatives for enterprise clients, focusing on predictive analytics and business intelligence solutions.',
      achievements: [
        'Increased client retention by 40% through predictive churn modeling',
        'Built automated reporting system serving 500+ stakeholders',
        'Mentored team of 5 junior analysts and data scientists',
        'Implemented ML pipeline reducing analysis time by 60%'
      ],
      current: true
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataDriven Inc.',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Specialized in customer analytics and marketing performance optimization for e-commerce clients.',
      achievements: [
        'Developed customer segmentation model improving campaign ROI by 45%',
        'Created real-time dashboard for marketing performance tracking',
        'Reduced data processing time by 70% through automation',
        'Collaborated with cross-functional teams on 20+ projects'
      ],
      current: false
    },
    {
      id: 3,
      title: 'Junior Data Analyst',
      company: 'Analytics Pro',
      location: 'Oakland, CA',
      period: '2019 - 2020',
      description: 'Entry-level position focusing on data cleaning, basic analysis, and report generation.',
      achievements: [
        'Processed and cleaned datasets with 1M+ records',
        'Created weekly KPI reports for executive team',
        'Learned advanced SQL and Python for data analysis',
        'Supported senior analysts on client projects'
      ],
      current: false
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Statistics',
      school: 'University of California, Berkeley',
      period: '2017 - 2019',
      details: 'Specialized in Applied Statistics and Data Science',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Mathematics',
      school: 'San Francisco State University',
      period: '2013 - 2017',
      details: 'Minor in Computer Science',
      gpa: '3.7/4.0'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Data Analyst Associate',
      issuer: 'Microsoft',
      date: '2023',
      credential: 'DA-100'
    },
    {
      name: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2022',
      credential: 'TDS-C01'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2022',
      credential: 'GAIQ'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2021',
      credential: 'CLF-C01'
    }
  ];

  const skills = {
    'Programming Languages': ['Python', 'R', 'SQL', 'VBA', 'JavaScript'],
    'Analytics Tools': ['Tableau', 'Power BI', 'Excel', 'SPSS', 'SAS'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery', 'Snowflake'],
    'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud', 'Databricks'],
    'Libraries & Frameworks': ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Plotly']
  };

  const downloadResume = () => {
    // In a real application, this would trigger a PDF download
    alert('Resume download would start here!');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey in data analysis and business intelligence
          </p>
          <Button onClick={downloadResume} size="lg" className="gradient-primary">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section className="animate-slideUp">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                Professional Experience
              </h2>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={job.id} className="relative">
                    {/* Timeline connector */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                    )}
                    
                    <div className="flex gap-6">
                      {/* Timeline dot */}
                      <div className={`w-3 h-3 rounded-full mt-6 flex-shrink-0 ${
                        job.current ? 'bg-primary glow-primary' : 'bg-border'
                      }`}></div>
                      
                      {/* Content */}
                      <div className="glass p-6 rounded-xl flex-1 glass-hover">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {job.title}
                            </h3>
                            <p className="text-accent font-medium">{job.company}</p>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 sm:justify-end">
                              <Calendar className="w-3 h-3" />
                              {job.period}
                            </div>
                            <div className="flex items-center gap-1 sm:justify-end mt-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h2>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="glass p-6 rounded-xl glass-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.details}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 sm:justify-end">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                        <div className="text-accent font-medium mt-1">GPA: {edu.gpa}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <section className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <div className="glass p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-medium text-foreground mb-3 text-sm">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs glass border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <div className="glass p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                      <p className="text-xs text-accent">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          {cert.credential}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="animate-slideUp" style={{ animationDelay: '0.8s' }}>
              <div className="glass p-6 rounded-xl text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Get In Touch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to discuss how my expertise can benefit your organization?
                </p>
                <Button className="w-full gradient-primary">
                  Contact Me
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;