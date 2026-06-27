export const profile = {
  name: "Dra. Diana Cruz Martins",
  specialty: "Endocrinologia",
  subtitle: "Endocrinologia, Diabetes e Metabolismo",
  orderNumber: "52907",
  language: "Português",
  currentYear: "2026",
  photo: {
    // VALIDAR: confirmar autorização de utilização antes de publicar.
    src: "./images/diana-cruz-martins-cuf.jpg",
    alt: "Fotografia profissional da Dra. Diana Cruz Martins",
    initials: "DCM",
  },
  secondaryPhoto: {
    // VALIDAR: confirmar autorização de utilização antes de publicar.
    src: "./images/diana-cruz-martins-retrato.jpg",
    alt: "Retrato profissional da Dra. Diana Cruz Martins",
  },
  links: {
    cufProfile: "https://www.cuf.pt/medicos/diana-cruz-martins",
    appointment: "https://www.cuf.pt/medicos/diana-cruz-martins",
    teleconsultation: "https://www.cuf.pt/medicos/diana-cruz-martins",
    // VALIDAR: links profissionais finais antes de publicar.
    linkedin: "https://www.linkedin.com/in/diana-cruz-martins-938741b6/",
    instagram: "https://www.instagram.com/dianamartins__endocrinologista/",
  },
  navigation: [
    { label: "Sobre", href: "#sobre" },
    { label: "Endocrinologia", href: "#endocrinologia" },
    { label: "Áreas", href: "#areas" },
    { label: "Publicações", href: "#publicacoes" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Médica especialista em Endocrinologia",
    title: "Dra. Diana Cruz Martins",
    lead:
      "Acompanhamento médico em doenças hormonais e metabólicas, com uma abordagem clínica rigorosa, clara e centrada na pessoa.",
    badges: ["Endocrinologia", "Diabetes", "Obesidade", "Menopausa", "Lipedema", "Tiroide"],
  },
  about: {
    // VALIDAR: texto biográfico final com a médica antes de publicar.
    title: "Sobre",
    body: [
      "A Dra. Diana Cruz Martins é médica especialista em Endocrinologia, dedicada ao diagnóstico, tratamento e acompanhamento de doenças hormonais e metabólicas. A sua atividade clínica centra-se numa abordagem individualizada, integrando a avaliação médica, a evidência científica e o contexto de cada pessoa.",
      "Ao longo do seu percurso, tem desenvolvido atividade assistencial em Endocrinologia, Diabetes e Metabolismo, com interesse particular em áreas como diabetes, obesidade, doenças da tiroide, menopausa, lipedema e outras patologias endócrinas.",
    ],
    quickFacts: [
      { label: "Especialidade", value: "Endocrinologia" },
      { label: "Ordem dos Médicos", value: "52907" },
      { label: "Idiomas", value: "Português" },
      {
        label: "Atividade CUF",
        value: "Hospital CUF Descobertas - Lisboa e Clínica CUF Montijo",
      },
      {
        label: "Cargo destacado",
        value: "Coordenadora da Unidade do Lipedema, Hospital CUF Descobertas",
      },
    ],
  },
  endocrinology: {
    title: "O que é a Endocrinologia?",
    intro:
      "A Endocrinologia é a especialidade médica dedicada ao estudo, diagnóstico e tratamento das doenças do sistema endócrino - o conjunto de glândulas responsáveis pela produção de hormonas. As hormonas regulam funções essenciais do organismo, como o metabolismo, o crescimento, a reprodução, o peso, a glicose no sangue, a saúde óssea, o ciclo menstrual e o equilíbrio energético.",
    note:
      "Esta informação é geral e não substitui avaliação médica individualizada.",
    areas: [
      {
        title: "Diabetes",
        text:
          "Acompanhamento de diabetes mellitus tipo 1, diabetes mellitus tipo 2 e alterações da glicose.",
      },
      {
        title: "Obesidade e metabolismo",
        text:
          "Avaliação médica do excesso de peso, obesidade, metabolismo e risco cardiometabólico.",
      },
      {
        title: "Tiroide",
        text:
          "Estudo e seguimento de doenças da tiroide, incluindo alterações da função tiroideia e nódulos.",
      },
      {
        title: "Menopausa",
        text:
          "Avaliação endócrina em fases de transição hormonal e sintomas associados à menopausa.",
      },
      {
        title: "Hipófise e suprarrenais",
        text:
          "Diagnóstico e acompanhamento de patologias hormonais menos frequentes, mas clinicamente relevantes.",
      },
      {
        title: "Lipedema",
        text:
          "Avaliação integrada de uma condição crónica caracterizada por alteração da distribuição de gordura, dor, sensação de peso e impacto funcional.",
      },
    ],
  },
  education: {
    title: "Formação académica",
    intro:
      "Percurso académico e diferenciação clínica a validar antes de publicação final.",
    // VALIDAR: não publicar formação académica, anos, sociedades científicas ou diferenciação sem confirmação da Dra. Diana Cruz Martins.
    items: [
      {
        date: "[INSERIR ANOS]",
        title: "Mestrado Integrado em Medicina",
        place: "Faculdade de Medicina da Universidade de Coimbra",
        status: "A validar",
      },
      {
        date: "[INSERIR ANOS]",
        title: "Especialização em Endocrinologia",
        place: "[INSERIR INSTITUIÇÃO / SERVIÇO]",
        status: "A validar",
      },
      {
        date: "[INSERIR]",
        title: "Diferenciação clínica e investigação",
        place: "[INSERIR DOUTORAMENTO / ÁREAS DE INVESTIGAÇÃO, SE CONFIRMADO]",
        status: "A validar",
      },
      {
        date: "[INSERIR]",
        title: "Formação contínua",
        place: "[INSERIR CURSOS, CONGRESSOS E SOCIEDADES CIENTÍFICAS]",
        status: "A validar",
      },
    ],
  },
  clinicalAreas: {
    title: "Áreas de atuação clínica",
    intro:
      "A consulta de Endocrinologia permite avaliar alterações hormonais e metabólicas com impacto na saúde geral, no metabolismo, no peso, na glicose, na função tiroideia e noutras dimensões clínicas.",
    cards: [
      {
        title: "Diabetes",
        items: [
          "Diabetes mellitus tipo 1",
          "Diabetes mellitus tipo 2",
          "Pré-diabetes",
          "Otimização terapêutica",
          "Educação e seguimento clínico",
        ],
      },
      {
        title: "Obesidade e metabolismo",
        items: [
          "Avaliação médica da obesidade",
          "Risco cardiometabólico",
          "Estratégias terapêuticas individualizadas",
          "Acompanhamento multidisciplinar",
        ],
      },
      {
        title: "Tiroide",
        items: [
          "Hipotiroidismo",
          "Hipertiroidismo",
          "Nódulos tiroideus",
          "Alterações hormonais tiroideias",
        ],
      },
      {
        title: "Menopausa",
        items: [
          "Sintomas associados à transição hormonal",
          "Avaliação metabólica",
          "Articulação multidisciplinar quando necessário",
        ],
      },
      {
        title: "Lipedema",
        items: [
          "Avaliação clínica",
          "Diagnóstico diferencial",
          "Relação com alterações hormonais e metabólicas",
          "Acompanhamento integrado",
        ],
      },
      {
        title: "Outras patologias endócrinas",
        items: [
          "Hipófise",
          "Suprarrenais",
          "Metabolismo ósseo",
          "Alterações hormonais diversas",
        ],
      },
    ],
  },
  clinicalActivity: {
    title: "Atividade assistencial",
    intro:
      "A Dra. Diana Cruz Martins desenvolve atividade clínica em unidades CUF, com consultas presenciais e teleconsulta, de acordo com a disponibilidade indicada nos canais oficiais.",
    locations: [
      {
        title: "Hospital CUF Descobertas - Lisboa",
        text:
          "Consultas de Endocrinologia, Diabetes e Menopausa. Unidades associadas: Menopausa, Obesidade e Lipedema.",
        cta: "Marcar na CUF",
        hrefKey: "appointment",
      },
      {
        title: "Clínica CUF Montijo",
        text:
          "Consultas de Endocrinologia e Diabetes, de acordo com disponibilidade da CUF.",
        cta: "Marcar na CUF",
        hrefKey: "appointment",
      },
      {
        title: "Teleconsulta",
        text:
          "Possibilidade de teleconsulta através dos canais de marcação da CUF.",
        cta: "Marcar teleconsulta",
        hrefKey: "teleconsultation",
      },
    ],
    note:
      "As marcações, horários, acordos e disponibilidade devem ser sempre confirmados no site oficial da CUF.",
  },
  publications: {
    title: "Publicações e atividade científica",
    intro:
      "A atividade científica integra o percurso clínico e académico, contribuindo para uma prática médica informada pela evidência.",
    // VALIDAR: lista final de publicações, autores, links e categorias com a médica antes de publicar.
    filters: [
      { label: "Tudo", value: "all" },
      { label: "Artigos", value: "artigo" },
      { label: "Casos clínicos", value: "caso" },
      { label: "Divulgação", value: "divulgacao" },
    ],
    items: [
      {
        title: "Metformin in SARS-CoV-2 infection: A hidden path",
        authors: "Ana Realista Pedrosa, Diana Cruz Martins, Manfredi Rizzo, José Silva-Nunes",
        year: "2023",
        area: "Diabetes, metabolismo, COVID-19",
        type: "artigo",
        link: "",
      },
      {
        title: "Mauriac syndrome: a rare complication in patients with type 1 diabetes mellitus",
        authors:
          "João Oliveira Torres, Diana Cruz Martins, Alexandra Abegão Matias, Nuno Gião, Eduardo Dutra, Rui [completar], José Silva-Nunes",
        year: "2025",
        area: "Diabetes tipo 1, hepatopatia glicogénica",
        type: "caso",
        link: "",
      },
      {
        title: "Transient Thyrotoxicosis with Immune Checkpoint Inhibitors",
        authors: "Diana Cruz Martins e colaboradores",
        year: "2020",
        area: "Tiroide, imunoterapia, endocrinologia oncológica",
        type: "artigo",
        link: "",
      },
      {
        title: "Ritmo circadiano e hormonas - a visão da Endocrinologia",
        authors: "Diana Cruz Martins",
        year: "2023",
        area: "Ritmo circadiano, hormonas, metabolismo",
        type: "divulgacao",
        source: "SPEDM Newsletter",
        link: "",
      },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    note:
      "As respostas apresentadas têm caráter informativo e não substituem avaliação médica individualizada. Em caso de sintomas, deve procurar aconselhamento médico.",
    // VALIDAR: respostas clínicas devem ser escritas ou revistas pela médica antes de publicação.
    items: [
      {
        question: "Quando devo marcar uma consulta de Endocrinologia?",
        answer:
          "Pode fazer sentido marcar consulta quando existem alterações hormonais, diabetes, alterações da tiroide, excesso de peso/obesidade, sintomas associados à menopausa, suspeita de lipedema ou outras alterações metabólicas. A avaliação médica permite enquadrar sintomas, exames e antecedentes clínicos.",
      },
      {
        question: "Que sintomas podem estar associados a doenças da tiroide?",
        answer:
          "Cansaço, alterações de peso, palpitações, intolerância ao frio ou ao calor, alterações do sono, alterações menstruais e alterações do trânsito intestinal podem surgir em algumas doenças tiroideias. Estes sintomas são inespecíficos e devem ser avaliados em contexto clínico.",
      },
      {
        question: "A obesidade é uma doença?",
        answer:
          "A obesidade é uma doença crónica, multifatorial, associada a fatores biológicos, metabólicos, comportamentais, ambientais e genéticos. A abordagem médica deve ser individualizada e livre de estigma.",
      },
      {
        question: "O que é o lipedema?",
        answer:
          "O lipedema é uma condição crónica caracterizada por alteração da distribuição de gordura, frequentemente nos membros inferiores, podendo associar-se a dor, sensação de peso, facilidade em fazer nódoas negras e impacto funcional. O diagnóstico deve ser feito por avaliação clínica.",
      },
      {
        question: "A menopausa deve ser acompanhada por Endocrinologia?",
        answer:
          "Em alguns casos, a avaliação endócrina pode ser útil para enquadrar sintomas, risco metabólico, alterações hormonais e estratégias de acompanhamento, frequentemente em articulação com outras especialidades.",
      },
      {
        question: "A teleconsulta substitui sempre a consulta presencial?",
        answer:
          "Depende da situação clínica. Algumas avaliações podem ser feitas por teleconsulta, enquanto outras exigem observação presencial ou exames complementares.",
      },
    ],
  },
  appointment: {
    title: "Marcação de consulta",
    text:
      "As marcações devem ser realizadas através dos canais oficiais da CUF, onde é possível consultar disponibilidade, unidades, acordos e opções de teleconsulta.",
    note:
      "A disponibilidade de consultas, acordos e horários pode variar e deve ser confirmada diretamente no site da CUF.",
  },
  professionalLinks: {
    title: "Links profissionais",
    text:
      "Pode acompanhar conteúdos de divulgação científica e informação médica através dos canais profissionais da Dra. Diana Cruz Martins.",
  },
  sources: [
    {
      label: "Perfil CUF",
      href: "https://www.cuf.pt/medicos/diana-cruz-martins",
    },
  ],
};
