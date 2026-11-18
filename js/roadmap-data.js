/**
 * Dados estruturados do Roadmap Acadêmico e Profissional
 */

window.ROADMAP_DATA = {
  promptUser: "paulo@career-roadmap",
  bootSequence: [
    { text: "Initializing Career Roadmap..." },
    { text: "Loading academic history..." },
    { text: "Analyzing professional background..." },
    { text: "Mapping 6-semester timeline and milestones..." },
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
        "Ingresso em Ciência da Computação na PUC Minas (1º e 2º períodos concluídos).",
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
      milestones: [
        {
          window: "Início → Metade do 3º Período",
          goal: "Fortalecer a lógica de programação, estruturar o perfil no GitHub e praticar leitura técnica em inglês."
        },
        {
          window: "Metade → Final do 3º Período",
          goal: "Desenvolver projetos práticos das disciplinas, explorar áreas da Computação e iniciar estudos em Linux."
        },
        {
          window: "Meta até o início do 4º Período",
          goal: "Dominar comandos base e estrutura do Linux para chegar preparado na disciplina de Segurança e Criptografia."
        }
      ],
      means: [
        "Graduação: disciplinas do 3º período na PUC Minas.",
        "Sites e prática: Linux Journey, OverTheWire (Bandit) e repositórios no GitHub.",
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
      milestones: [
        {
          window: "Início → Metade do 4º Período",
          goal: "Iniciar curso dedicado de Linux e estudar fundamentos de redes de computadores (modelos OSI e TCP/IP)."
        },
        {
          window: "Metade → Final do 4º Período",
          goal: "Aprofundar os estudos em segurança da informação (Segurança e Criptografia) e iniciar laboratórios práticos."
        },
        {
          window: "Meta até o início do 5º Período",
          goal: "Buscar aproximação acadêmica com professores da área e definir possibilidade de Iniciação Científica."
        }
      ],
      means: [
        "Graduação: disciplinas do 4º período (destaque para Segurança e Criptografia).",
        "Cursos e sites: curso de Linux, Cisco Networking Academy e TryHackMe (trilhas iniciais).",
        "Livros e pesquisa: Redes de Computadores (Kurose & Ross) e contato com docentes para Iniciação Científica."
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
      sem5Milestones: [
        {
          window: "5º Período (1ª metade)",
          goal: "Aprofundar conhecimentos em Sistemas Operacionais e administração de ambientes Linux."
        },
        {
          window: "5º Período (até o final do semestre)",
          goal: "Consolidar base em redes de computadores, fundamentos de segurança e desenvolvimento de projetos práticos."
        }
      ],
      sem6Milestones: [
        {
          window: "6º Período (1ª metade)",
          goal: "Intensificar laboratórios práticos de segurança e participar de comunidades e eventos da área."
        },
        {
          window: "Meta até o final do 6º Período",
          goal: "Conquistar e iniciar estágio na área de tecnologia / segurança da informação."
        }
      ],
      means: [
        "Graduação: disciplinas do 5º e 6º períodos da PUC Minas.",
        "Sites e laboratórios: TryHackMe, Hack The Box e PortSwigger Web Security Academy.",
        "Livros e docs: Sistemas Operacionais Modernos (Tanenbaum) e documentações OWASP.",
        "Prática profissional: busca por estágio em tecnologia, eventos e projetos no GitHub."
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
      sem7Milestones: [
        {
          window: "7º Período (1ª metade)",
          goal: "Consolidar experiência prática por meio do estágio e identificar uma possível especialização na Cibersegurança."
        },
        {
          window: "7º Período (até o final do semestre)",
          goal: "Atuar em Iniciação Científica, definir o tema do TCC relacionado à área e iniciar estudo para certificação."
        }
      ],
      sem8Milestones: [
        {
          window: "8º Período (1ª metade)",
          goal: "Desenvolver o Trabalho de Conclusão de Curso (TCC) e consolidar o portfólio técnico no GitHub."
        },
        {
          window: "Meta até a conclusão do 8º Período",
          goal: "Concluir o TCC, buscar certificação relevante de entrada e fortalecer o networking profissional."
        }
      ],
      means: [
        "Graduação e pesquisa: disciplinas finais, Iniciação Científica e TCC na PUC Minas.",
        "Experiência formal: estágio em tecnologia/segurança e portfólio técnico no GitHub.",
        "Cursos e certificações: preparação para certificações de entrada (ex.: CompTIA Security+ ou Cisco CCST)."
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
      title: "Visão de futuro e meios de aquisição consolidados",
      visionObjective: "Construir uma carreira sólida na área de Cibersegurança, combinando formação acadêmica, conhecimento técnico, experiência prática e aprendizado contínuo.",
      summaryMeans: [
        { label: "Graduação (04 anos)", text: "Ciência da Computação na PUC Minas (1º ao 8º período, com 06 semestres planejados do 3º ao 8º), Iniciação Científica e TCC." },
        { label: "Cursos e Labs", text: "Cursos de Linux e Redes (Cisco NetAcad), TryHackMe, Hack The Box e OverTheWire." },
        { label: "Livros e Docs", text: "The Linux Command Line, Redes de Computadores (Kurose), Sistemas Operacionais (Tanenbaum) e docs oficiais." },
        { label: "Prática e Mercado", text: "Projetos no GitHub, comunidades/eventos, estágio em tecnologia e certificações relevantes." }
      ]
    },
    {
      id: "timeline",
      index: 9,
      code: "09",
      slug: "timeline",
      dirName: "/timeline",
      path: "~/timeline",
      cmd: "cd timeline",
      title: "Resumo geral em linha do tempo (3º ao 8º período — 06 semestres)",
      timelineSteps: [
        {
          sem: "1º Sem • 3º Período (2º Ano)",
          startGoal: "Início/Meio: Lógica, GitHub e Inglês técnico.",
          endTarget: "Meta até o fim do 3º: Base de Linux (Linux Journey/Bandit) e projetos práticos concluídos.",
          means: "PUC Minas • Livro The Linux Command Line • GitHub"
        },
        {
          sem: "2º Sem • 4º Período (2º Ano)",
          startGoal: "Início/Meio: Curso de Linux e Fundamentos de Redes.",
          endTarget: "Meta até o fim do 4º: Segurança e Criptografia, labs iniciais no TryHackMe e contato para IC.",
          means: "PUC Minas • Cisco NetAcad • Livro Redes (Kurose) • TryHackMe"
        },
        {
          sem: "3º Sem • 5º Período (3º Ano)",
          startGoal: "Início/Meio: Sistemas Operacionais e Linux avançado.",
          endTarget: "Meta até o fim do 5º: Segurança em redes, projetos aplicados no GitHub e prática em laboratórios.",
          means: "PUC Minas • Livro SO (Tanenbaum) • TryHackMe"
        },
        {
          sem: "4º Sem • 6º Período (3º Ano)",
          startGoal: "Início/Meio: Labs de vulnerabilidades e participação em eventos/comunidades.",
          endTarget: "Meta até o fim do 6º: Conquistar e iniciar estágio na área de tecnologia / segurança.",
          means: "PUC Minas • Hack The Box • PortSwigger / OWASP • Estágio"
        },
        {
          sem: "5º Sem • 7º Período (4º Ano)",
          startGoal: "Início/Meio: Consolidar estágio e direcionar especialização em Cibersegurança.",
          endTarget: "Meta até o fim do 7º: Iniciação Científica em andamento, tema do TCC definido e base para certificação.",
          means: "PUC Minas (IC) • Estágio • Guias de certificação"
        },
        {
          sem: "6º Sem • 8º Período (4º Ano)",
          startGoal: "Início/Meio: Desenvolvimento do TCC na área e consolidação do portfólio técnico.",
          endTarget: "Meta até a formatura: Defesa do TCC, exame de certificação inicial e transição para atuação profissional.",
          means: "PUC Minas (TCC) • Security+ / Cisco CCST • Portfólio GitHub"
        }
      ]
    }
  ]
};
