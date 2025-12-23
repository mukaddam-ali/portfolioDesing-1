'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ContactForm } from '@/components/contact-form'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from 'next-themes'
import './portfolio.css'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Lightbulb,
  Users,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects')
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Panel', 'Real-time Updates'],
      github: 'https://github.com/mukaddam-ali',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'File Attachments', 'Notifications'],
      github: 'https://github.com/mukaddam-ali',
      demo: '#',
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content generation platform with multiple models, custom templates, and content optimization.',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Zod', 'React Hook Form'],
      features: ['AI Integration', 'Template System', 'Content History', 'Export Options', 'Custom Models'],
      github: 'https://github.com/mukaddam-ali',
      demo: '#',
      category: 'AI/ML'
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with end-to-end encryption, file sharing, and multi-room support.',
      technologies: ['Socket.io', 'Express', 'Redis', 'MongoDB', 'JWT', 'WebRTC'],
      features: ['End-to-end Encryption', 'File Sharing', 'Voice/Video Calls', 'Room Management', 'Message History'],
      github: 'https://github.com/mukaddam-ali',
      demo: '#',
      category: 'Real-time'
    }
  ]

  const skills = {
    'Frontend': [
      { name: 'React/Next.js', level: 90, icon: Code },
      { name: 'TypeScript', level: 85, icon: Code },
      { name: 'Tailwind CSS', level: 88, icon: Palette },
      { name: 'HTML/CSS', level: 95, icon: Globe },
      { name: 'JavaScript', level: 92, icon: Code }
    ],
    'Backend': [
      { name: 'Node.js', level: 85, icon: Server },
      { name: 'Express.js', level: 80, icon: Server },
      { name: 'Python', level: 75, icon: Terminal },
      { name: 'REST APIs', level: 88, icon: Database },
      { name: 'GraphQL', level: 70, icon: GitBranch }
    ],
    'Database': [
      { name: 'PostgreSQL', level: 82, icon: Database },
      { name: 'MongoDB', level: 78, icon: Database },
      { name: 'Prisma ORM', level: 85, icon: Database },
      { name: 'Redis', level: 70, icon: Database }
    ],
    'Tools & Others': [
      { name: 'Git/GitHub', level: 90, icon: GitBranch },
      { name: 'Docker', level: 75, icon: Server },
      { name: 'AWS', level: 70, icon: Cloud },
      { name: 'Vercel', level: 85, icon: Globe },
      { name: 'Figma', level: 72, icon: Palette }
    ]
  }

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Company',
      period: 'Summer 2024',
      description: 'Developed and maintained web applications using React and Node.js. Implemented RESTful APIs and improved application performance by 30%.',
      achievements: [
        'Built responsive UI components with React and TypeScript',
        'Developed RESTful APIs using Node.js and Express',
        'Optimized database queries reducing response time by 40%',
        'Collaborated with cross-functional team using Agile methodology'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Campus Tech Club',
      period: '2023 - Present',
      description: 'Lead developer for various student projects, mentoring junior developers and managing technical implementations.',
      achievements: [
        'Led development of 5+ student projects',
        'Mentored 10+ junior developers',
        'Implemented CI/CD pipelines for project deployments',
        'Conducted technical workshops and code reviews'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Sam Houston State University',
      period: '2021 - 2025 (Expected)',
      gpa: '3.8/4.0',
      relevant: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems'
      ]
    }
  ]

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
    const Icon = skill.icon
    return (
      <div 
        className="space-y-2"
        style={{
          animation: isVisible ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full skill-progress"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 0.1}s`
            }}
          />
        </div>
      </div>
    )
  }

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card 
      className="group hover-lift"
      style={{
        animation: isVisible ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
      }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-2">{project.description}</CardDescription>
          </div>
          <Badge variant="secondary">{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {project.features.map((feature: string, i: number) => (
              <Badge key={i} variant="default" className="text-xs bg-primary/10 text-primary border-primary/20">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center px-4 relative" style={{
        backgroundImage: `url("${theme === 'dark' ? '/backgroundDarkmode.jpg' : '/background.jpg'}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center space-y-6"
            style={{ animation: isVisible ? 'fadeIn 1s ease-out' : 'none' }}
          >
            <div className="flex justify-center mb-6">
              <Avatar className="w-32 h-32 border-4 border-primary/20 float-animation">
                <AvatarImage src="/Logo.jpeg" alt="Logo" />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  AA
                </AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Ali Almoukaddam</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Engineering Student & Full Stack Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building scalable web applications and solving complex problems. 
              Currently pursuing Computer Science at Sam Houston State University.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="hover-lift pulse-animation" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-4 pt-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/mukaddam-ali" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:alialmoukaddam@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="projects" className="hover-lift">Projects</TabsTrigger>
              <TabsTrigger value="skills" className="hover-lift">Skills</TabsTrigger>
              <TabsTrigger value="experience" className="hover-lift">Experience</TabsTrigger>
              <TabsTrigger value="education" className="hover-lift">Education</TabsTrigger>
              <TabsTrigger value="blog" className="hover-lift">Blog</TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6 tab-content">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">Showcasing my technical skills through real-world applications</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8 tab-content">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
                <p className="text-muted-foreground">Technologies and tools I work with</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, categorySkills]) => (
                  <Card key={category} className="hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category === 'Frontend' && <Palette className="w-5 h-5" />}
                        {category === 'Backend' && <Server className="w-5 h-5" />}
                        {category === 'Database' && <Database className="w-5 h-5" />}
                        {category === 'Tools & Others' && <Lightbulb className="w-5 h-5" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {categorySkills.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
                <p className="text-muted-foreground">My journey in software development</p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary mt-1">
                            {exp.company}
                          </CardDescription>
                          <Badge variant="outline" className="mt-2 w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6 tab-content">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Education</h2>
                <p className="text-muted-foreground">Academic background and achievements</p>
              </div>

              {education.map((edu, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {edu.school}
                    </CardDescription>
                    <div className="flex gap-4 mt-2">
                      <Badge variant="outline">{edu.period}</Badge>
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edu.relevant.map((course, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Blog Tab */}
            <TabsContent value="blog" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Technical Blog</h2>
                <p className="text-muted-foreground">Sharing my knowledge and experiences in software development</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>8 min read</span>
                      <span>•</span>
                      <span>Jan 15, 2024</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Getting Started with Next.js 15 and TypeScript
                    </CardTitle>
                    <CardDescription>
                      Learn how to build modern web applications with Next.js 15, TypeScript, and the App Router.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://medium.com/@username/getting-started-nextjs-15" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>12 min read</span>
                      <span>•</span>
                      <span>Jan 10, 2024</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Building RESTful APIs with Node.js and Express
                    </CardTitle>
                    <CardDescription>
                      Learn how to design and implement RESTful APIs using Node.js and Express with best practices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">API</Badge>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://medium.com/@username/restful-apis-nodejs-express" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>15 min read</span>
                      <span>•</span>
                      <span>Jan 5, 2024</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Mastering React Hooks: A Comprehensive Guide
                    </CardTitle>
                    <CardDescription>
                      Deep dive into React Hooks and learn how to build more functional and reusable components.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Hooks</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://medium.com/@username/react-hooks-guide" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://medium.com/@username" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View All Articles on Medium
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground text-lg">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
          </div>
          
          <ContactForm />
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (214) 830-4727</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Huntsville, TX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/mukaddam-ali</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/username</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Ali Almoukaddam. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
