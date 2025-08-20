import { useState } from 'react';
import { ExternalLink, Github, Eye, Database, BarChart3, Brain, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction Model',
      description: 'Built a machine learning model to predict customer churn with 92% accuracy, helping reduce churn by 35%.',
      longDescription: 'Developed a comprehensive churn prediction system using Python, scikit-learn, and advanced feature engineering. Implemented multiple algorithms including Random Forest, XGBoost, and Neural Networks to identify at-risk customers.',
      tools: ['Python', 'scikit-learn', 'pandas', 'Tableau', 'SQL'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      stats: { impact: '35% churn reduction', accuracy: '92%', data: '500K customers' },
      category: 'Machine Learning'
    },
    {
      id: 2,
      title: 'Sales Performance Dashboard',
      description: 'Interactive Power BI dashboard providing real-time insights into sales performance across multiple regions.',
      longDescription: 'Created a comprehensive sales analytics platform with automated data refresh, KPI tracking, and predictive sales forecasting. Integrated multiple data sources and implemented role-based access control.',
      tools: ['Power BI', 'SQL Server', 'DAX', 'Python', 'Azure'],
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      stats: { users: '200+ users', regions: '15 regions', metrics: '50+ KPIs' },
      category: 'Business Intelligence'
    },
    {
      id: 3,   
      title: 'Supply Chain Optimization',
      description: 'Optimized inventory management using advanced analytics, resulting in 20% cost reduction.',
      longDescription: 'Analyzed supply chain data to identify bottlenecks and inefficiencies. Implemented demand forecasting models and inventory optimization algorithms to reduce costs while maintaining service levels.',
      tools: ['R', 'SQL', 'Tableau', 'Excel', 'SAP'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      stats: { savings: '$2.5M annually', efficiency: '+20%', locations: '50 warehouses' },
      category: 'Operations Analytics'
    },
    {
      id: 4,
      title: 'Customer Segmentation Analysis',
      description: 'RFM analysis and clustering to identify high-value customer segments for targeted marketing.',
      longDescription: 'Performed comprehensive customer segmentation using RFM analysis, K-means clustering, and behavioral analytics. Created targeted marketing strategies for each segment, improving campaign effectiveness.',
      tools: ['Python', 'scikit-learn', 'Plotly', 'SQL', 'Google Analytics'],
      icon: Users,
      color: 'from-orange-500 to-red-500',
      stats: { segments: '8 segments', lift: '+45% campaign ROI', customers: '1M+ analyzed' },
      category: 'Marketing Analytics'
    },
    {
      id: 5,
      title: 'Financial Risk Assessment',
      description: 'Credit risk modeling and fraud detection system for a fintech startup.',
      longDescription: 'Developed machine learning models for credit scoring and fraud detection. Implemented real-time risk assessment algorithms with automated decision-making capabilities.',
      tools: ['Python', 'TensorFlow', 'SQL', 'AWS', 'Docker'],
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      stats: { accuracy: '94% fraud detection', risk: '30% risk reduction', transactions: '10M+ daily' },
      category: 'Financial Analytics'
    },
    {
      id: 6,
      title: 'Healthcare Data Pipeline',
      description: 'ETL pipeline processing patient data for clinical research and outcomes analysis.',
      longDescription: 'Built a robust data processing pipeline for healthcare data, ensuring HIPAA compliance while enabling advanced analytics for clinical research and patient outcome prediction.',
      tools: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker', 'Kubernetes'],
      icon: Database,
      color: 'from-teal-500 to-blue-500',
      stats: { records: '5M+ patient records', compliance: 'HIPAA compliant', uptime: '99.9%' },
      category: 'Data Engineering'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of data-driven solutions that have delivered measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="relative group animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass p-6 rounded-xl glass-hover h-full transition-all duration-300 group-hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-muted-foreground capitalize">{key}:</span>
                        <span className="text-accent font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="outline" 
                        className="text-xs glass border-primary/20"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="glass">
                      <Github className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="glass">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Hover overlay with additional info */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/95 to-transparent rounded-xl flex items-end p-6 transition-opacity duration-300">
                    <div className="w-full">
                      <div className="text-xs text-accent font-medium mb-2">Quick Stats</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-surface/50 rounded p-2 text-center">
                            <div className="text-foreground font-medium">{value}</div>
                            <div className="text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              These are just a few highlights from my portfolio. I'd love to discuss how 
              similar data-driven solutions could benefit your organization.
            </p>
            <Button size="lg" className="gradient-primary">
              Let's Talk About Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;