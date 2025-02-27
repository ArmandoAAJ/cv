import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Armando Arlan Joergensen",
  initials: "AAJ",
  location: "São Paulo, Brasil, GMT-3",
  locationLink: "https://www.google.com/maps/place/S%C3%A3o+Paulo",
  about:
    "Front-end development focado na construção de produtos com atenção especial aos detalhes.",
  summary:
    "Como Desenvolvedor Frontend tive o sucesso em atuar em diversos produtos, desde a fase inícial até a implementação. Atualmente, trabalho principalmente com TypeScript, React, React Native. Possuo mais de 5 anos de experiência em trabalhar remotamente com empresas do Brasil.",
  avatarUrl: "https://avatars.githubusercontent.com/u/7575325?v=4",
  contact: {
    email: "armando-a-j@hotmail.com",
    tel: "+55 49 991967878",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ArmandoAAJ",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/armandoaaj/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ArmandoAAJ",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "ILSC Education Group - Vancouver",
      degree: "English School",
      start: "2024 - Junho",
      end: "2025 - Janeiro",
    },
    {
      school: "Rocketseat",
      degree: "Bootcamp GoStack - Node.js, React e React Native",
      start: "2020",
      end: "2020",
    },
    {
      school: "UNOESC - Universidade do Oeste de Santa Catarina",
      degree: "Bacharelado em Ciência da Computação",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Lighthouse",
      link: "https://lighthouseit.com.br/",
      badges: ["Remoto"],
      title: "Desenvolvedor Frontend Web|Mobile",
      start: "2024",
      end: "Emprego Atual",
      description:
        "Desenvolvimento de aplicativos móveis para o setor de varejo utilizando React Native, com foco em alto desempenho e usabilidade. Gerenciamento completo do processo de deploy automatizado para as lojas iOS e Android por meio de pipelines no GitLab. Colaboração ativa com o cliente para identificar e implementar soluções de melhoria no desempenho, na experiência do usuário e na funcionalidade do aplicativo.",
    },
    {
      company: "Dasa",
      link: "https://dasa.com.br/",
      badges: ["Remoto", "1 ano e 4 meses"],
      title: "Desenvolvedor Frontend Web|Mobile Senior",
      start: "2022",
      end: "2024",
      description:
        "Desenvolver novas funcionalidades e aprimorar aplicações web e mobile, utilizando React e React Native. Além disso, criar soluções nativas para Android e iOS, garantindo desempenho e integração otimizados. Responsável por manter e evoluir o Design System, assegurando consistência visual e de interação em toda a plataforma. Desenvolver soluções de arquitetura com ênfase em escalabilidade e performance. Colaborar em debates relacionados a aspectos de negócio e produto. Implementar e aprimorar práticas DevOps para garantir integração contínua, entrega contínua e uma infraestrutura eficiente.",
    },
    {
      company: "Built Code",
      link: "https://www.builtcode.com.br/",
      badges: ["Remoto", "9 meses"],
      title: "Desenvolvedor Frontend Mobile Pleno",
      start: "2021",
      end: "2022",
      description:
        "Manter e aprimorar continuamente as funcionalidades das aplicações móveis utilizando React Native. Proativamente buscar soluções para eventuais problemas nativos que possam surgir. Participar ativamente de discussões técnicas, contribuindo para a evolução e otimização do desenvolvimento. Colaborar com o time de design e produto na busca por soluções de UI/UX, visando aprimorar a experiência do usuário.",
    },
    {
      company: "9bits Soluções Web e Mobile",
      link: "https://www.instagram.com/9bitsapps/",
      badges: ["Remoto", "2 anos e 7 meses"],
      title: "Desenvolvedor Frontend  Web|Mobile Pleno",
      start: "2019",
      end: "2021",
      description:
        "Supervisão eficiente da equipe de suporte ao cliente, garantindo um atendimento de excelência e resolução eficaz de problemas. Constante aprimoramento das funcionalidades das aplicações por meio das tecnologias NextJs e React Native. Foco na criação de experiências de usuário intuitivas e na otimização do desempenho das aplicações. Condução efetiva do processo de implementação de novos parceiros nas lojas de aplicativos iOS e Android.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Swift",
    "Objective-C",
    "Kotlin",
    "Java",
    "Android Studio",
    "XCode",
    "Git",
  ],
  projects: [
    {
      title: "Pedidos Summit",
      techStack: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "GitLab",
        "Tanstack",
      ],
      description:
        "Eccomerce para gerenciamento de controle de pedidos dos representantes.",
      link: {
        label: "Pedidos Summit",
        href: "https://apps.apple.com/br/app/pedidos-summit/id6480311518?l=en-GB",
      },
    },
    {
      title: "Nav - Dasa",
      techStack: ["React Native", "React", "TypeScript", "GraphQL", "Firebase"],
      description: "Seu assistente de saúde pra toda a vida.",
      link: {
        label: "Dasa",
        href: "https://nav.dasa.com.br/",
      },
    },
    {
      title: "Peruzzo Supermercados - 9bits",
      techStack: ["React Native", "React", "TypeScript"],
      description: "Eccomerce de supermercado.",
      link: {
        label: "9bits Soluções Web e Mobile",
        href: "https://compreperuzzo.com.br/alegrete/",
      },
    },
    {
      title: "Super Porecatu - 9bits",
      techStack: ["React Native", "React", "TypeScript"],
      description: "Eccomerce de supermercado.",
      link: {
        label: "9bits Soluções Web e Mobile",
        href: "https://delivery.superporecatu.com.br/",
      },
    },
    {
      title: "Oraculum Sports - Freelancer",
      techStack: ["React Native", "TypeScript"],
      description: "Análise matemática de eventos exportivos.",
      link: {
        label: "Oraculum Sports",
        href: "https://www.oraculumsports.com/",
      },
    },
    {
      title: "ArmandoAAJ",
      techStack: [
        "TypeScript",
        "Next.js",
        "Shadcn/ui",
        "TailwindCss",
        "Vercel",
      ],
      description: "Currículo online.",
      link: {
        label: "Armando Arlan Joergensen",
        href: "https://armandoaaj.vercel.app/",
      },
    },
  ],
} as const;

