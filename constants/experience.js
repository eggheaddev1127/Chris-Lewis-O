export const experience = [
    {
        date: "Apr 2023 – Present",
        title: "Senior Software Engineer, AI",
        company: "Airbnb",
        description: [
            "Built scalable Ruby on Rails / Python (Django, FastAPI) microservices for Airbnb's booking platform and host management system, implementing GraphQL APIs, PostgreSQL sharding, and Redis Cluster caching to handle 150M+ users with sub-200ms response times.",
            "Developed React frontend components for search and discovery features, integrating Python-based ML models using TensorFlow Serving and Apache Kafka streams for dynamic pricing algorithms and personalized recommendations.",
            "Architected real-time data pipelines using Apache Spark, Apache Airflow, and Kubernetes to process booking analytics and pricing optimization data, implementing feature stores with MLflow for A/B testing frameworks.",
            "Integrated OpenAI APIs and LangChain for AI-powered host messaging tools and automated listing descriptions, building prompt engineering workflows and semantic search using Elasticsearch and vector embeddings serving millions of properties.",
            "Built real-time monitoring and alerting systems using PagerDuty integration, CloudWatch metrics, and custom dashboards — implementing SLO tracking and error budgets that improved system reliability from 99.5% to 99.9% uptime.",
            "Automated infrastructure with Terraform and GitHub Actions (CI/CD, IaC, security scanning), integrating GitHub Advanced Security for dependency and secret hygiene across repos."
        ]
    },
    {
        date: "Jun 2020 – Mar 2023",
        title: "Senior Frontend Engineer",
        company: "Adobe",
        description: [
            "Led Angular 9/10 and React 16 development for Adobe Advertising Cloud and Adobe Analytics dashboards, implementing TypeScript, RxJS, NgRx state management, and server-side rendering with Next.js to achieve Core Web Vitals scores above 95.",
            "Built real-time campaign management interfaces using D3.js, Chart.js, WebSocket connections, and Progressive Web App features for Adobe DSP (Demand Side Platform), handling $500M+ monthly ad spend with sub-second data updates.",
            "Optimized SEO performance for Adobe Experience Manager sites through structured data markup, schema.org implementation, lazy loading with Intersection Observer, and JavaScript bundling strategies — increasing organic traffic by 45%.",
            "Established design systems using Storybook, Sass/SCSS, CSS Grid, Flexbox, and Adobe Spectrum components, implementing WCAG 2.1 AA accessibility standards with automated testing via Jest, Cypress, and Lighthouse CI."
        ]
    },
    {
        date: "Jul 2017 – May 2020",
        title: "Full Stack Engineer",
        company: "SoFi",
        description: [
            "Developed SoFi's loan origination platform using Ruby on Rails, MERN stack (MongoDB, Express.js, React, Node.js), JWT authentication, and OAuth 2.0 — integrating Plaid APIs, Stripe payments, and Experian credit APIs for PCI DSS compliant financial workflows.",
            "Built personal finance dashboard and investment tracking features using Material-UI and Chart.js, connecting WebSocket real-time data feeds for stock prices and portfolio analytics serving 2M+ active users.",
            "Implemented platform engineering infrastructure using Docker containers, Kubernetes clusters, AWS EKS, Terraform, Ansible, and Helm charts — establishing CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD for blue-green deployments.",
            "Designed observability stack using Prometheus, Grafana, Datadog APM, AWS CloudWatch, ELK Stack (Elasticsearch, Logstash, Kibana), and distributed tracing with Jaeger, maintaining 99.95% uptime for critical payment and loan servicing APIs."
        ]
    },
    {
        date: "Jul 2015 – Jun 2017",
        title: "Full Stack Engineer",
        company: "Epic Systems",
        description: [
            "Developed Epic's MyChart patient portal and provider workflow tools using PHP 7+, Laravel 5, Symfony 3, MySQL, and HIPAA-compliant architecture — managing electronic health records for 500+ healthcare facilities and 10M+ patient records.",
            "Created WordPress multisite solutions for healthcare provider websites using Advanced Custom Fields, WooCommerce, custom post types, and REST API integrations, implementing Vue.js components for appointment scheduling and patient communication.",
            "Built HL7 FHIR APIs for electronic health record integration using Laravel API resources, PHPUnit testing, MySQL stored procedures, and Redis session management — ensuring data accuracy and interoperability across healthcare systems.",
            "Modernized legacy jQuery interfaces to Vue.js SPA with Vuex state management, Vue Router, Webpack bundling, and Sass preprocessing, improving page load times by 60% while maintaining backwards compatibility."
        ]
    }
];
