/**
 * Dados estruturados do Roadmap Acadêmico e Profissional
 */

window.ROADMAP_DATA = {
  promptUser: "paulo@career-roadmap",
  bootSequence: [
    { text: "Initializing Career Roadmap..." },
    { text: "Loading academic history..." },
    { text: "Analyzing professional background..." },
    { text: "Mapping future possibilities..." },
    { text: "System successfully initialized.", isFinal: true }
  ],

  profile: {
    name: "Paulo",
    previousDegree: "Bacharel em Direito",
    currentDegree: "Ciência da Computação (duração: 04 anos / 08 períodos)",
    institution: "PUC Minas — Campus Poços de Caldas",
    currentSemester: "3º período (1º e 2º períodos concluídos)",
    horizon: "03 anos / 06 semestres restantes (do 3º ao 8º período)",
    objective: "Construir uma carreira na área de Cibersegurança"
  },

  stages: [
    {
      id: "home",
      index: 0,
      code: "00",
      slug: "~",
      dirName: "home",
      path: "~",
      cmd: "home",
      title: "Identificação e visão inicial"
    },
    {
      id: "history",
      index: 1,
      code: "01",
      slug: "history",
      dirName: "/history",
      path: "~/history",
      cmd: "cd history",
      title: "Trajetória anterior à Ciência da Computação",
      experiences: [
        "Bacharel em Direito, formado em 2022.",
        "Experiência na Polícia Civil, em atividades de apoio à escrivania.",
        "Experiência no Judiciário, inicialmente como estagiário na Vara Única da Comarca de Nova Resende.",
        "Posteriormente, atuação profissional no Fórum da Comarca de Nova Resende, como Assistente de Apoio aos Gestores de Unidades Judiciárias."
      ],
      competencies: [
        "Análise crítica.",
        "Organização documental.",
        "Interpretação de informações.",
        "Atenção aos detalhes.",
        "Conhecimento de procedimentos institucionais."
      ]
    },
    {
      id: "transition",
      index: 2,
      code: "02",
      slug: "transition",
      dirName: "/transition",
      path: "~/transition",
      cmd: "cd transition",
      title: "Transição do Direito para a Ciência da Computação",
      highlights: [
        "Interesse por tecnologia e programação.",
        "Ingresso em Ciência da Computação na PUC Minas.",
        "Interesse crescente por segurança da informação.",
        "Possibilidade de unir conhecimentos jurídicos e tecnológicos no futuro."
      ]
    },
    {
      id: "current-status",
      index: 3,
      code: "03",
      slug: "current-status",
      dirName: "/current-status",
      path: "~/current-status",
      cmd: "cd current-status",
      semesterTag: "2º Ano do curso • 1º Semestre do Roadmap",
      title: "3º período — Ciência da Computação (Situação atual)",
      courses: [
        "Arquitetura e Organização de Computadores II.",
        "Laboratório de Arquitetura e Organização de Computadores II.",
        "Robôs, Sensores e Aplicações.",
        "Teoria da Computação e Linguagens Formais.",
        "Filosofia: Razão e Modernidade.",
        "Mentoring III.",
        "Seminários III.",
        "Optativa I."
      ],
      priorities: [
        "Fortalecer a lógica de programação.",
        "Desenvolver projetos práticos.",
        "Organizar e alimentar meu GitHub.",
        "Começar a aprofundar conhecimentos em Linux.",
        "Desenvolver o inglês técnico.",
        "Explorar diferentes áreas da Computação."
      ],
      means: [
        "Graduação: disciplinas do 3º período na PUC Minas.",
        "Sites e prática: Linux Journey, OverTheWire e repositórios no GitHub.",
        "Livros e docs: The Linux Command Line (William Shotts) e documentações em inglês."
      ]
    },
    {
      id: "next-semester",
      index: 4,
      code: "04",
      slug: "next-semester",
      dirName: "/next-semester",
      path: "~/next-semester",
      cmd: "cd next-semester",
      semesterTag: "2º Ano do curso • 2º Semestre do Roadmap",
      title: "4º período — Próxima etapa",
      courses: [
        "Segurança e Criptografia.",
        "Linguagens de Programação.",
        "Data Science & Big Data.",
        "Tecnologia em Ambientes de Informação I."
      ],
      objectives: [
        "Aprofundar os estudos em segurança da informação.",
        "Iniciar ou aprofundar um curso de Linux.",
        "Estudar fundamentos de redes de computadores.",
        "Realizar laboratórios práticos de cibersegurança.",
        "Buscar aproximação acadêmica com professores da área.",
        "Investigar possibilidades de iniciação científica."
      ],
      means: [
        "Graduação: disciplinas do 4º período (destaque para Segurança e Criptografia).",
        "Cursos e sites: curso de Linux, Cisco Networking Academy e TryHackMe (trilhas iniciais).",
        "Livros e pesquisa: Redes de Computadores (Kurose & Ross) e orientação docente para Iniciação Científica."
      ]
    },
    {
      id: "skill-development",
      index: 5,
      code: "05",
      slug: "skill-development",
      dirName: "/skill-development",
      path: "~/skill-development",
      cmd: "cd skill-development",
      semesterTag: "3º Ano do curso • 3º e 4º Semestres do Roadmap",
      title: "5º e 6º períodos — Desenvolvimento técnico",
      plannedEvolution: [
        "Aprofundamento em Linux.",
        "Redes de computadores.",
        "Sistemas operacionais.",
        "Fundamentos de segurança da informação.",
        "Programação e desenvolvimento de projetos.",
        "Laboratórios práticos de segurança.",
        "Participação em comunidades e eventos.",
        "Busca por estágio na área de tecnologia."
      ],
      means: [
        "Graduação: disciplinas do 5º e 6º períodos da PUC Minas.",
        "Sites e laboratórios: TryHackMe, Hack The Box e PortSwigger Web Security Academy.",
        "Livros e docs: Sistemas Operacionais Modernos (Tanenbaum) e guias OWASP.",
        "Prática profissional: estágio na área de tecnologia, eventos e projetos no GitHub."
      ]
    },
    {
      id: "professional-growth",
      index: 6,
      code: "06",
      slug: "professional-growth",
      dirName: "/professional-growth",
      path: "~/professional-growth",
      cmd: "cd professional-growth",
      semesterTag: "4º Ano do curso • 5º e 6º Semestres do Roadmap",
      title: "7º e 8º períodos — Consolidação profissional",
      objectives: [
        "Identificar uma possível especialização dentro da Cibersegurança.",
        "Buscar certificações relevantes.",
        "Consolidar experiência profissional por meio de estágio.",
        "Desenvolver um portfólio técnico.",
        "Buscar oportunidades de iniciação científica.",
        "Desenvolver um Trabalho de Conclusão de Curso relacionado à área, se possível.",
        "Construir networking profissional."
      ],
      means: [
        "Graduação e pesquisa: disciplinas finais, Iniciação Científica e TCC na PUC Minas.",
        "Experiência formal: consolidação no estágio e portfólio técnico no GitHub.",
        "Cursos e certificações: estudo para certificações de entrada (ex.: CompTIA Security+ ou Cisco CCST)."
      ]
    },
    {
      id: "explore-specializations",
      index: 7,
      code: "07",
      slug: "explore-specializations",
      dirName: "/explore-specializations",
      path: "~/explore-specializations",
      cmd: "cd explore-specializations",
      title: "Possíveis caminhos dentro da Cibersegurança",
      areas: [
        {
          name: "Segurança Ofensiva",
          description: "Testes de invasão, identificação de vulnerabilidades e pentest.",
          highlight: false
        },
        {
          name: "Segurança Defensiva",
          description: "Monitoramento, detecção de ameaças e resposta a incidentes.",
          highlight: false
        },
        {
          name: "Computação Forense",
          description: "Investigação digital, análise de evidências e rastreamento de atividades.",
          highlight: true
        },
        {
          name: "Criptografia e Proteção de Dados",
          description: "Proteção de informações, protocolos e mecanismos de segurança.",
          highlight: false
        }
      ],
      intersectionNote: "Possibilidade de explorar a interseção entre Direito, investigação e Computação Forense (em fase de exploração, sem decisão definitiva)."
    },
    {
      id: "future",
      index: 8,
      code: "08",
      slug: "future",
      dirName: "/future",
      path: "~/future",
      cmd: "cd future",
      title: "Visão de futuro (conclusão dos 04 anos de curso)",
      visionObjective: "Construir uma carreira sólida na área de Cibersegurança, combinando formação acadêmica, conhecimento técnico, experiência prática e aprendizado contínuo.",
      summaryMeans: [
        { label: "Graduação (04 anos)", text: "Ciência da Computação na PUC Minas (1º ao 8º período, com 06 semestres planejados do 3º ao 8º), Iniciação Científica e TCC." },
        { label: "Cursos e Labs", text: "Cursos de Linux e Redes (Cisco NetAcad), TryHackMe, Hack The Box e OverTheWire." },
        { label: "Livros e Docs", text: "The Linux Command Line, Redes de Computadores (Kurose), Sistemas Operacionais (Tanenbaum) e docs oficiais." },
        { label: "Prática e Mercado", text: "Projetos no GitHub, comunidades/eventos, estágio em tecnologia e certificações relevantes." }
      ]
    }
  ]
};
