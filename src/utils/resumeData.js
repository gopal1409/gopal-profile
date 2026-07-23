/**
 * Complete Resume Data
 * Extracted from Gopal Das Resume
 */

export const personalInfo = {
  name: 'Gopal Das',
  title:
    'DevOps Consultant | Enterprise DevOps Architect | CI/CD & Cloud Transformation Specialist',
  email: 'gopal1409@gmail.com',
  phone: '+91-9537126262',
  linkedin: 'https://linkedin.com/in/gopaldevops',
  location: 'India',
  availability: 'Open for Remote & Global Assignments',
  company: 'Be Cloud Tech',
  role: 'CIO & Senior Solution Architect',
  period: '2001 – Present',
  summary: `Senior DevOps Consultant and Enterprise Solution Architect with 28+ years of experience in designing, implementing, and governing enterprise-scale DevOps transformation programs across telecom, banking, retail, healthcare, government, and technology sectors.`,
};

export const stats = [
  { value: 28, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Training Programs' },
  { value: 1000, suffix: '+', label: 'Repos Migrated' },
  { value: 25, suffix: '+', label: 'Fortune 500 Clients' },
];

export const expertise = [
  {
    icon: 'Cloud',
    title: 'Cloud Architecture & Engineering',
    items: [
      'AWS, Azure, GCP Multi-Cloud Design',
      'Kubernetes Platform Architecture',
      'Cloud-Native Application Architecture',
      'Hybrid & Enterprise Cloud Transformation',
      'High Availability & Disaster Recovery',
      'Cloud Governance & Cost Optimization',
    ],
  },
  {
    icon: 'Sync',
    title: 'Enterprise DevOps & CI/CD',
    items: [
      'GitHub Enterprise Strategy & Governance',
      'GitLab CI/CD Pipeline Architecture',
      'Azure DevOps Implementation',
      'Jenkins Enterprise CI/CD',
      'GitOps using ArgoCD & Helm',
      'Multi-Environment Release Governance',
    ],
  },
  {
    icon: 'GitHub',
    title: 'Version Control & SCM Modernization',
    items: [
      'GitHub/GitLab Enterprise Implementation',
      'SVN to Git Migration (1000+ repos)',
      'Branch Protection & Merge Governance',
      'Pull Request & Code Review Best Practices',
      'Git Flow / Trunk-Based Development',
      'Repository Access & Security Governance',
    ],
  },
  {
    icon: 'Security',
    title: 'DevSecOps & Quality Engineering',
    items: [
      'Secure CI/CD Implementation',
      'DevSecOps Pipeline Creation using GitOps',
      'Snyk, AquaSec, Trivy Integration',
      'SonarQube Quality Gates',
      'Shift-Left Security Practices',
      'Container Security Governance',
    ],
  },
  {
    icon: 'SmartToy',
    title: 'AIOps & Intelligent Operations',
    items: [
      'AI-Driven Monitoring & Observability',
      'Predictive Scaling & Intelligent Automation',
      'LLM-Powered Incident Management & RCA',
      'AI-Based Threat Detection & Drift Enforcement',
      'LangChain & Ollama Automation Workflows',
      'Real-time Anomaly Detection',
    ],
  },
  {
    icon: 'School',
    title: 'Enterprise Training & Enablement',
    items: [
      'Architect & Leadership DevOps Enablement',
      'Foundation to Advanced DevOps Programs',
      'Hands-on CI/CD Workshops',
      'Governance & Release Strategy Training',
      'Practical Implementation-Based Learning',
      'Scalable DevOps Capability Building',
    ],
  },
];

export const skills = [
  {
    category: 'Version Control',
    icon: 'GitHub',
    technologies: ['GitHub', 'GitLab', 'Bitbucket', 'SVN', 'Azure DevOps', 'Perforce'],
  },
  {
    category: 'CI/CD Tools',
    icon: 'Sync',
    technologies: [
      'GitLab CI',
      'Jenkins',
      'Azure DevOps',
      'Bamboo',
      'TeamCity',
      'ArgoCD',
      'Spinnaker',
    ],
  },
  {
    category: 'Container Platforms',
    icon: 'ViewInAr',
    technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Docker Swarm', 'Helm'],
  },
  {
    category: 'IaC & Automation',
    icon: 'Construction',
    technologies: [
      'Terraform',
      'Ansible',
      'CloudFormation',
      'Puppet',
      'Chef',
      'Ansible Tower',
      'Vault',
      'Consul',
    ],
  },
  {
    category: 'Cloud Platforms',
    icon: 'Cloud',
    technologies: ['AWS', 'Azure', 'GCP', 'AliCloud'],
  },
  {
    category: 'Security & DevSecOps',
    icon: 'Security',
    technologies: ['Snyk', 'AquaSec', 'Twistlock', 'Trivy', 'SonarQube', 'Falco', 'KubeArmor'],
  },
  {
    category: 'Monitoring & Observability',
    icon: 'Assessment',
    technologies: [
      'Prometheus',
      'Grafana',
      'ELK Stack',
      'OpenTelemetry',
      'Loki',
      'Splunk',
      'Zabbix',
    ],
  },
  {
    category: 'Build & Scripting',
    icon: 'Code',
    technologies: ['Maven', 'Gradle', 'MSBuild', 'Shell', 'PowerShell', 'Perl', 'Python'],
  },
];

export const certifications = [
  { name: 'Certified Kubernetes Administrator', abbr: 'CKA', issuer: 'CNCF', color: '#326CE5' },
  { name: 'Docker Certified Associate', abbr: 'DCA', issuer: 'Docker', color: '#2496ED' },
  { name: 'Terraform Certified Associate', abbr: 'TCA', issuer: 'HashiCorp', color: '#844FBA' },
  { name: 'GitLab Solution Architect', abbr: 'GLSA', issuer: 'GitLab', color: '#FC6D26' },
  { name: 'AWS Solution Architect', abbr: 'AWS SA', issuer: 'AWS', color: '#FF9900' },
  { name: 'Azure Solution Architect', abbr: 'AZ SA', issuer: 'Microsoft', color: '#0078D4' },
  { name: 'GCP Cloud Architect', abbr: 'GCP CA', issuer: 'Google', color: '#4285F4' },
  { name: 'Kubernetes Security Specialist', abbr: 'CKS', issuer: 'CNCF', color: '#326CE5' },
];

export const experience = [
  {
    company: 'Be Cloud Tech',
    role: 'CIO & Senior Solution Architect',
    period: '2001 – Present',
    location: 'India',
    highlights: [
      'Led enterprise DevOps transformation initiatives for telecom, banking, healthcare, retail, and government organizations',
      'Designed and implemented GitHub and GitLab-based CI/CD platforms with enterprise governance',
      'Established standardized branching strategies, repository governance, merge approval workflows, and release management frameworks',
      'Architected enterprise-scale GitLab CI/CD pipelines with automated testing, security scanning, deployment orchestration, and compliance controls',
      'Designed and implemented DevSecOps pipelines using GitOps methodologies with Azure DevOps, ArgoCD, Kubernetes',
      'Migrated 1000+ repositories from SVN to GitHub/GitLab with full history retention and governance standardization',
      'Implemented GitOps delivery pipelines using ArgoCD, Helm, Kubernetes, and OpenShift',
      'Built secure DevSecOps pipelines integrating SonarQube, AquaSec, Snyk, Trivy, and automated policy enforcement',
      'Created air-gapped Kubernetes platforms and secure deployment pipelines for government organizations',
      'Delivered 500+ enterprise training programs across DevOps, GitHub, GitLab, Kubernetes, IaC, Cloud, and DevSecOps',
    ],
  },
];

export const projects = [
  {
    title: 'Enterprise GitLab DevOps Platform Implementation',
    duration: '1 Year',
    tools: ['GitLab', 'GitLab Runner', 'Kubernetes', 'Docker', 'AquaSec'],
    description:
      'Implemented GitLab as a centralized enterprise DevOps platform with standardized CI/CD templates, governance-driven release models, and integrated security scanning.',
    outcomes: [
      'Centralized DevOps platform for 500+ developers',
      'Standardized CI/CD templates reducing pipeline setup time by 80%',
      'Integrated security scanning and compliance controls',
      'Governance-driven release and deployment models',
    ],
  },
  {
    title: 'Enterprise DevSecOps Pipeline using GitOps & Azure DevOps',
    duration: '6 Months',
    tools: ['Azure DevOps', 'GitOps', 'ArgoCD', 'Kubernetes', 'Terraform', 'SonarQube', 'Snyk'],
    description:
      'Designed and implemented enterprise DevSecOps pipelines using Azure DevOps with GitOps-driven deployment automation.',
    outcomes: [
      'GitOps-driven deployment automation using ArgoCD and Kubernetes',
      'Automated code quality validation and vulnerability scanning',
      'Secure CI/CD governance and automated release controls',
      'Scalable deployment workflows with Terraform and Ansible IaC',
    ],
  },
  {
    title: 'SVN to Git Migration for 1000+ Repositories',
    duration: '3 Months',
    tools: ['SVN', 'Git', 'Shell Scripting'],
    description:
      'Migrated enterprise repositories from SVN to Git with full history retention, branching standards, and repository governance.',
    outcomes: [
      'Migrated 1000+ repositories with full history retention',
      'Defined branching standards and repository governance',
      'Preserved full source control history and user mappings',
      'Zero downtime migration strategy',
    ],
  },
  {
    title: 'Air-Gapped Kubernetes Platform Deployment',
    duration: '1 Week',
    tools: ['Kubernetes', 'Apache Airflow'],
    description:
      'Designed and deployed a fully disconnected Kubernetes platform for government organizations with strict security requirements.',
    outcomes: [
      'Fully disconnected Kubernetes platform',
      'Secure deployment workflows in restricted environments',
      'Apache Airflow deployed in air-gapped infrastructure',
      'Government-grade security compliance achieved',
    ],
  },
  {
    title: 'Enterprise Service Mesh & Monitoring Platform',
    duration: '3 Months',
    tools: ['OpenShift', 'Istio', 'Jenkins', 'Nexus', 'EFK'],
    description:
      'Implemented service mesh architecture for enterprise microservices with observability, monitoring, and traffic governance.',
    outcomes: [
      'Service mesh architecture for enterprise microservices',
      'Full observability, monitoring, and traffic governance',
      'CI/CD integrated with enterprise monitoring standards',
      'Production-ready observability pipelines',
    ],
  },
  {
    title: 'GitHub-Based CI/CD for Cloud-Native Deployments',
    duration: '2 Months',
    tools: ['GitHub', 'AWS', 'GCP', 'ArgoCD', 'JIRA'],
    description:
      'Automated deployment pipelines across AWS and GCP environments using GitHub workflows and GitOps principles.',
    outcomes: [
      'Multi-cloud deployment automation across AWS and GCP',
      'GitHub workflows with deployment governance',
      'Scalable cloud-native CI/CD practices',
      'Integrated issue tracking and release workflows',
    ],
  },
];

export const clients = [
  'IBM',
  'Accenture',
  'Deloitte',
  'Siemens',
  'Ericsson',
  'Walmart',
  'Barclays',
  'HSBC',
  'Fidelity',
  'Intel',
  'British Telecom',
  'Infosys',
  'TCS',
  'Cognizant',
  'Tech Mahindra',
  'UBS',
  'Wells Fargo',
  'Capital One',
  'Orange',
  'Volkswagen Finance',
  'Schneider Electric',
  'Mercedes Benz',
  'VMware',
  'NEC Technologies',
  'Palo Alto Networks',
  'Optum',
  'Synechron',
  'Viacom18',
];

export const services = [
  {
    title: 'Enterprise DevOps Consulting',
    description:
      'End-to-end DevOps transformation strategy, assessment, and implementation for large-scale enterprises.',
    icon: 'Business',
    features: ['Maturity Assessment', 'Roadmap Design', 'Implementation', 'Governance Framework'],
  },
  {
    title: 'CI/CD Implementation',
    description:
      'Design and implement enterprise-grade CI/CD pipelines using GitHub, GitLab, Azure DevOps, and Jenkins.',
    icon: 'Sync',
    features: [
      'Pipeline Architecture',
      'GitOps Setup',
      'Security Integration',
      'Release Automation',
    ],
  },
  {
    title: 'Cloud & Kubernetes Transformation',
    description:
      'Architect and deploy cloud-native solutions on AWS, Azure, GCP with Kubernetes platform engineering.',
    icon: 'Cloud',
    features: [
      'Multi-Cloud Strategy',
      'K8s Platform Design',
      'IaC Implementation',
      'Cost Optimization',
    ],
  },
  {
    title: 'DevSecOps Pipeline Creation',
    description:
      'Integrate security into every stage of the software delivery lifecycle with automated compliance.',
    icon: 'Security',
    features: [
      'Shift-Left Security',
      'Vulnerability Scanning',
      'Policy Enforcement',
      'Compliance Automation',
    ],
  },
  {
    title: 'SCM Migration & Modernization',
    description:
      'Migrate legacy version control systems to modern Git-based platforms with full history preservation.',
    icon: 'SwapHoriz',
    features: [
      'SVN to Git Migration',
      'Repository Governance',
      'Workflow Optimization',
      'Team Training',
    ],
  },
  {
    title: 'Corporate Training Programs',
    description:
      'Hands-on, implementation-focused training for architects, leads, and developers at all levels.',
    icon: 'School',
    features: ['Custom Curriculum', 'Hands-on Labs', 'Real Scenarios', 'Certification Prep'],
  },
];

export const trainingPrograms = [
  {
    title: 'Technology Training Curriculum',
    level: 'Foundation to Advanced',
    duration: '5 Days',
    objectives: [
      'Understand modern cloud deployment models',
      'Build secure CI/CD pipelines',
      'Secure APIs and microservices',
      'Implement cloud security best practices',
      'Protect data at rest and in transit',
      'Perform cloud risk assessments',
      'Build ML data pipelines',
      'Deploy AI/ML workloads on Kubernetes',
      'Understand MLOps and CI/CD for Machine Learning',
      'Deploy cloud-native applications using containers and Kubernetes',
    ],
    modules: [
      {
        name: 'Day 1 - Cloud Fundamentals & Cloud Deployment Models',
        sections: [
          {
            title: 'Cloud Computing Fundamentals',
            topics: [
              'Cloud Computing Evolution',
              'Public, Private, Hybrid, Multi-Cloud',
              'Cloud Service Models: IaaS, PaaS, SaaS, FaaS',
              'Shared Responsibility Model',
            ],
            lab: 'Create AWS/Azure/GCP account, launch virtual machines, configure networking, and use storage services.',
          },
          {
            title: 'Cloud Deployment Models',
            topics: [
              'Enterprise Cloud Architecture',
              'Landing Zones',
              'Multi-Account Strategy',
              'Cloud Governance',
              'Cost Optimization',
              'High Availability',
              'Disaster Recovery',
            ],
            lab: 'Design production cloud architecture, build VPC/VNet, configure load balancer, and enable auto scaling.',
          },
          {
            title: 'Infrastructure as Code',
            topics: [
              'Terraform',
              'Modules',
              'Variables',
              'State Management',
              'Remote Backend',
              'Workspaces',
              'Best Practices',
            ],
            lab: 'Deploy complete infrastructure using Terraform.',
          },
        ],
      },
      {
        name: 'Day 2 - CI/CD, DevSecOps & Cloud Security',
        sections: [
          {
            title: 'CI/CD',
            topics: [
              'CI/CD Architecture',
              'Git Workflow',
              'GitHub Actions',
              'Jenkins',
              'GitLab CI',
              'Azure DevOps Pipelines',
            ],
            lab: 'Build a CI pipeline and deploy to Kubernetes.',
          },
          {
            title: 'DevSecOps',
            topics: [
              'Shift Left Security',
              'SAST',
              'DAST',
              'SCA',
              'Container Scanning',
              'IaC Scanning',
              'Trivy',
              'Checkov',
              'tfsec',
              'CodeQL',
              'OWASP Dependency Check',
              'GitHub Advanced Security',
            ],
            lab: 'Scan Terraform code, scan Docker images, configure GitHub Security, and generate SBOM.',
          },
          {
            title: 'Threat Modeling',
            topics: ['STRIDE', 'DREAD', 'MITRE ATT&CK', 'OWASP Top 10', 'Threat Modeling Process'],
            lab: 'Threat modeling workshop.',
          },
        ],
      },
      {
        name: 'Day 3 - Security, APIs & Data Protection',
        sections: [
          {
            title: 'Microservices Security',
            topics: [
              'Microservice Architecture',
              'API Gateway',
              'Service Mesh',
              'Zero Trust',
              'Identity Management',
            ],
            lab: 'Deploy microservices on Kubernetes.',
          },
          {
            title: 'API Security',
            topics: [
              'REST API',
              'GraphQL',
              'Authentication',
              'Authorization',
              'OAuth2',
              'OpenID Connect',
              'JWT',
              'API Rate Limiting',
            ],
            lab: 'Secure REST APIs.',
          },
          {
            title: 'Data Protection',
            topics: [
              'Data at Rest',
              'Encryption',
              'KMS',
              'Secrets Management',
              'Data in Transit',
              'TLS',
              'HTTPS',
              'Certificates',
              'Mutual TLS',
            ],
            lab: 'Configure TLS, encrypt databases, and secure secrets using Vault.',
          },
          {
            title: 'Risk Assessment',
            topics: ['Security Frameworks', 'NIST', 'CIS', 'ISO 27001', 'Risk Matrix', 'Compliance'],
            lab: 'Cloud security assessment workshop.',
          },
        ],
      },
      {
        name: 'Day 4 - AI/ML, Data Engineering & MLOps',
        sections: [
          {
            title: 'Data Engineering',
            topics: [
              'ETL',
              'ELT',
              'Data Lakes',
              'Data Warehouses',
              'Batch Processing',
              'Streaming',
            ],
            lab: 'Build a data pipeline.',
          },
          {
            title: 'Machine Learning Lifecycle',
            topics: [
              'Data Collection',
              'Data Preparation',
              'Model Training',
              'Validation',
              'Deployment',
              'Monitoring',
            ],
          },
          {
            title: 'MLOps',
            topics: [
              'ML Pipelines',
              'Feature Store',
              'Model Registry',
              'Experiment Tracking',
              'Continuous Training',
              'MLflow',
              'Kubeflow',
              'Airflow',
              'DVC',
            ],
            lab: 'Deploy an ML pipeline.',
          },
          {
            title: 'CI/CD for ML',
            topics: ['GitOps', 'Model Versioning', 'Automated Deployment', 'Drift Detection'],
            lab: 'Deploy ML model using CI/CD.',
          },
        ],
      },
      {
        name: 'Day 5 - Containers, Kubernetes & Capstone Project',
        sections: [
          {
            title: 'Containers',
            topics: ['Docker Architecture', 'Images', 'Containers', 'Networks', 'Storage', 'Docker Compose'],
            lab: 'Containerize an enterprise application.',
          },
          {
            title: 'Kubernetes',
            topics: [
              'Architecture',
              'Pods',
              'ReplicaSets',
              'Deployments',
              'Services',
              'Ingress',
              'ConfigMaps',
              'Secrets',
              'Persistent Volumes',
            ],
            lab: 'Deploy multi-tier application.',
          },
          {
            title: 'Kubernetes Security',
            topics: [
              'RBAC',
              'Network Policies',
              'Pod Security',
              'Admission Controllers',
              'Image Security',
              'Secret Management',
            ],
            lab: 'Secure Kubernetes cluster.',
          },
          {
            title: 'Final Capstone Project',
            topics: [
              'Infrastructure provisioning with Terraform',
              'Secure Git-based CI/CD pipeline',
              'Containerized microservices',
              'Kubernetes deployment',
              'API security with OAuth/JWT',
              'Data encryption at rest and in transit',
              'Cloud risk assessment',
              'Integrated ML pipeline',
              'MLOps workflow',
              'Production-grade monitoring and logging',
              'Final presentation and architecture review',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'AIOps & Intelligent Kubernetes Operations',
    level: 'Advanced',
    duration: '5 Days',
    modules: [
      {
        name: 'Introduction to AIOps & Kubernetes',
        tools: 'Prometheus, Grafana, Minikube, Helm, IsolationForest',
      },
      {
        name: 'Monitoring & Observability with AI',
        tools: 'OpenTelemetry, ELK, FluentBit, LangChain',
      },
      { name: 'Incident Management & Root Cause Analysis', tools: 'Neo4j, Ollama, LangChain' },
      { name: 'Predictive Scaling & Optimization', tools: 'KEDA, Prophet, Python, HPA' },
      { name: 'Security, Threat Detection & Drift Enforcement', tools: 'Falco, KubeArmor, Ollama' },
    ],
  },
  {
    title: 'Enterprise DevOps for Architects & Leads',
    level: 'Intermediate + Advanced',
    duration: '3 Days',
    modules: [
      { name: 'Enterprise DevOps Governance', tools: 'GitHub Enterprise, GitLab' },
      { name: 'CI/CD Architecture & Scalability', tools: 'GitLab CI, ArgoCD, Helm' },
      { name: 'Release Governance & Compliance', tools: 'SonarQube, Snyk, Policy Engine' },
      { name: 'GitOps & Platform Engineering', tools: 'Kubernetes, Terraform, Ansible' },
    ],
  },
  {
    title: 'Developer-Centric DevOps Bootcamp',
    level: 'Basic + Intermediate + Advanced',
    duration: '5 Days',
    modules: [
      { name: 'Git Workflows & Repository Management', tools: 'GitHub, GitLab, Bitbucket' },
      { name: 'CI/CD Pipeline Development', tools: 'GitLab CI, Jenkins, GitHub Actions' },
      { name: 'Containerization & Orchestration', tools: 'Docker, Kubernetes, Helm' },
      { name: 'Infrastructure as Code', tools: 'Terraform, Ansible, CloudFormation' },
      { name: 'DevSecOps Best Practices', tools: 'Snyk, Trivy, SonarQube' },
    ],
  },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/gopaldevops', icon: 'LinkedIn' },
  { name: 'Email', url: 'mailto:gopal1409@gmail.com', icon: 'Email' },
  { name: 'Phone', url: 'tel:+919537126262', icon: 'Phone' },
];

export default {
  personalInfo,
  stats,
  expertise,
  skills,
  certifications,
  experience,
  projects,
  clients,
  services,
  trainingPrograms,
  socialLinks,
};
