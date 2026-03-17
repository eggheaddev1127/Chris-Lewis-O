export const skills = {
    filters: [
        { name: "Languages", filter: "language" },
        { name: "Backend", filter: "backend" },
        { name: "Frontend", filter: "frontend" },
        { name: "Databases & Caching", filter: "database" },
        { name: "Cloud & Infrastructure", filter: "cloud" },
        { name: "Data & ML", filter: "data-ml" },
        { name: "Monitoring", filter: "monitoring" },
        { name: "Dev Tools", filter: "devtools" },
    ],
    skillset: [
        // Programming Languages
        { name: "Python", category: "language", icon: "devicon-python-plain colored" },
        { name: "Ruby", category: "language", icon: "devicon-ruby-plain colored" },
        { name: "TypeScript", category: "language", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", category: "language", icon: "devicon-javascript-plain colored" },
        { name: "Node.js", category: "language", icon: "devicon-nodejs-plain colored" },
        { name: "PHP", category: "language", icon: "devicon-php-plain colored" },

        // Backend
        { name: "Ruby on Rails", category: "backend", icon: "devicon-rails-plain colored" },
        { name: "Django", category: "backend", icon: "devicon-django-plain colored" },
        { name: "FastAPI", category: "backend", icon: "devicon-fastapi-plain colored" },
        { name: "Laravel", category: "backend", icon: "devicon-laravel-plain colored" },
        { name: "Symfony", category: "backend", icon: "devicon-symfony-plain colored" },
        { name: "Express.js", category: "backend", icon: "devicon-express-original colored" },
        { name: "GraphQL", category: "backend", icon: "devicon-graphql-plain colored" },
        { name: "REST API", category: "backend" },
        { name: "gRPC", category: "backend" },
        { name: "JWT", category: "backend" },
        { name: "OAuth 2.0", category: "backend" },

        // Frontend
        { name: "React", category: "frontend", icon: "devicon-react-original colored" },
        { name: "Angular", category: "frontend", icon: "devicon-angularjs-plain colored" },
        { name: "Vue.js", category: "frontend", icon: "devicon-vuejs-plain colored" },
        { name: "Next.js", category: "frontend", icon: "devicon-nextjs-plain colored" },
        { name: "Redux", category: "frontend", icon: "devicon-redux-original colored" },
        { name: "RxJS", category: "frontend" },
        { name: "NgRx", category: "frontend" },
        { name: "Vuex", category: "frontend" },
        { name: "Material UI", category: "frontend" },
        { name: "Bootstrap", category: "frontend", icon: "devicon-bootstrap-plain colored" },
        { name: "Sass/SCSS", category: "frontend", icon: "devicon-sass-original colored" },

        // Databases & Caching
        { name: "PostgreSQL", category: "database", icon: "devicon-postgresql-plain colored" },
        { name: "MongoDB", category: "database", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", category: "database", icon: "devicon-mysql-plain colored" },
        { name: "Redis", category: "database", icon: "devicon-redis-plain colored" },
        { name: "Elasticsearch", category: "database", icon: "devicon-elasticsearch-plain colored" },

        // Cloud & Infrastructure
        { name: "AWS", category: "cloud", icon: "devicon-amazonwebservices-plain colored" },
        { name: "GCP", category: "cloud", icon: "devicon-googlecloud-plain colored" },
        { name: "Kubernetes", category: "cloud", icon: "devicon-kubernetes-plain colored" },
        { name: "Docker", category: "cloud", icon: "devicon-docker-plain colored" },
        { name: "Terraform", category: "cloud", icon: "devicon-terraform-plain colored" },
        { name: "Ansible", category: "cloud", icon: "devicon-ansible-plain colored" },
        { name: "Helm", category: "cloud" },
        { name: "ArgoCD", category: "cloud" },

        // Data & ML
        { name: "Apache Spark", category: "data-ml" },
        { name: "Apache Kafka", category: "data-ml", icon: "devicon-apachekafka-original colored" },
        { name: "Apache Airflow", category: "data-ml" },
        { name: "TensorFlow Serving", category: "data-ml", icon: "devicon-tensorflow-original colored" },
        { name: "MLflow", category: "data-ml" },
        { name: "OpenAI APIs", category: "data-ml", icon: "devicon-openai-original colored" },
        { name: "LangChain", category: "data-ml" },

        // Monitoring & Observability
        { name: "Prometheus", category: "monitoring" },
        { name: "Grafana", category: "monitoring", icon: "devicon-grafana-original colored" },
        { name: "Datadog APM", category: "monitoring" },
        { name: "ELK Stack", category: "monitoring" },
        { name: "Jaeger", category: "monitoring" },
        { name: "PagerDuty", category: "monitoring" },
        { name: "CloudWatch", category: "monitoring" },

        // Development Tools
        { name: "GitHub Actions", category: "devtools", icon: "devicon-github-original colored" },
        { name: "Jenkins", category: "devtools", icon: "devicon-jenkins-line colored" },
        { name: "Webpack", category: "devtools", icon: "devicon-webpack-plain colored" },
        { name: "Jest", category: "devtools", icon: "devicon-jest-plain colored" },
        { name: "Cypress", category: "devtools", icon: "devicon-cypressio-plain colored" },
        { name: "PHPUnit", category: "devtools" },
        { name: "Storybook", category: "devtools", icon: "devicon-storybook-plain colored" },
    ]
};
