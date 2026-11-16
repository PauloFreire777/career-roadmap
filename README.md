# `paulo@career-roadmap` — Roadmap Acadêmico e Profissional em Cibersegurança

Aplicação web interativa em formato de terminal Linux desenvolvida como trabalho acadêmico para a disciplina de **Mentoring III**, do curso de **Ciência da Computação** da **PUC Minas — Campus Poços de Caldas**.

---

## Identificação Acadêmica

- **Aluno:** Paulo
- **Curso:** Bacharelado em Ciência da Computação (04 anos / 08 períodos)
- **Instituição:** Pontifícia Universidade Católica de Minas Gerais (PUC Minas) — Campus Poços de Caldas
- **Disciplina:** Mentoring III (3º Período)
- **Professores:**
  - Prof. Dr. João Benedito
  - Prof. M.Sc. Diego Roberto
- **Objetivo do Roadmap:** Construção de carreira na área de **Cibersegurança**

---

## Acesso Online (GitHub Pages)

- **Terminal Interativo (Apresentação):** [https://paulofreire777.github.io/career-roadmap/](https://paulofreire777.github.io/career-roadmap/)
- **Material Gráfico (Versão para Impressão / PDF):** [https://paulofreire777.github.io/career-roadmap/material-grafico.html](https://paulofreire777.github.io/career-roadmap/material-grafico.html)

---

## Sobre o Projeto e Metodologia

O projeto apresenta o planejamento de carreira para os **03 anos (06 semestres) restantes da graduação** (do **3º ao 8º período**), estruturado através de uma interface que simula um terminal bash (`paulo@career-roadmap — bash`).

Seguindo a metodologia proposta na disciplina de Mentoring III, o percurso foi organizado em:
1. **Divisão em intervalos de tempo:** Mapeamento semestre a semestre (do 3º ao 8º período, correspondentes ao 2º, 3º e 4º anos do curso).
2. **Definição de prioridades e competências por etapa:** O que se pretende desenvolver técnica e academicamente em cada intervalo.
3. **Meios para aquisição do conhecimento:** Articulação entre disciplinas da graduação (PUC Minas), cursos complementares, livros-texto, documentações técnicas, plataformas práticas de laboratório (*TryHackMe*, *Hack The Box*, *OverTheWire*, *Linux Journey*, *Cisco Networking Academy*), projetos no GitHub, Iniciação Científica, Trabalho de Conclusão de Curso (TCC), estágio e certificações de entrada.

---

## Estrutura de Diretórios do Roadmap

| Etapa | Diretório | Período / Intervalo | Conteúdo Principal |
| :--- | :--- | :--- | :--- |
| **00** | `~` (`home`) | Identificação Geral | Dados acadêmicos, formação anterior e escopo do planejamento |
| **01** | `/history` | Trajetória Anterior | Bacharelado em Direito (2022), atuação na Polícia Civil e no Poder Judiciário, e competências transferíveis |
| **02** | `/transition` | Transição de Área | Redirecionamento profissional do Direito para a Ciência da Computação |
| **03** | `/current-status` | **3º Período** *(2º Ano • 1º Semestre do Roadmap)* | Disciplinas em curso, prioridades atuais e meios de estudo |
| **04** | `/next-semester` | **4º Período** *(2º Ano • 2º Semestre do Roadmap)* | Disciplinas relevantes (*Segurança e Criptografia*, etc.), objetivos e meios planejados |
| **05** | `/skill-development` | **5º e 6º Períodos** *(3º Ano • 3º e 4º Semestres do Roadmap)* | Evolução técnica planejada, laboratórios práticos e busca por estágio |
| **06** | `/professional-growth` | **7º e 8º Períodos** *(4º Ano • 5º e 6º Semestres do Roadmap)* | Consolidação profissional, estágio, Iniciação Científica, TCC e certificações |
| **07** | `/explore-specializations` | Vertentes da Área | Exploração de quatro caminhos em Cibersegurança (Ofensiva, Defensiva, Computação Forense e Criptografia) |
| **08** | `/future` | Síntese Final | Objetivo ao final dos 04 anos de curso e resumo consolidado dos meios de aquisição |

---

## Comandos Disponíveis no Terminal

### Comandos de Navegação
- `help` — Exibe a lista de comandos disponíveis.
- `ls` — Lista todos os diretórios do roadmap.
- `cd history` (ou `cd 01`)
- `cd transition` (ou `cd 02`)
- `cd current-status` (ou `cd 03`)
- `cd next-semester` (ou `cd 04`)
- `cd skill-development` (ou `cd 05`)
- `cd professional-growth` (ou `cd 06`)
- `cd explore-specializations` (ou `cd 07`)
- `cd future` (ou `cd 08`)
- `home` (ou `cd ~`, `cd ..`) — Retorna à tela inicial.
- `clear` — Limpa a área de saída do terminal.
- `reboot` — Reinicia a sequência de inicialização do sistema.

### Comandos de Apresentação
- `whoami` — Exibe os dados de identificação acadêmica e objetivo profissional.
- `roadmap --overview` — Lista a visão geral das 8 etapas do roadmap.
- `roadmap --current` — Exibe o resumo do período atual (3º período).
- `roadmap --future` — Lista as etapas futuras (do 4º ao 8º período).
- `skills --list` — Apresenta as competências adquiridas, prioridades atuais e evolução técnica planejada.
- `specializations --explore` — Exibe as 4 áreas da Cibersegurança em exploração.

### Atalhos de Teclado e Controles
- **`Seta Direita (→)`** ou **`PageDown`**: Digita automaticamente o comando da próxima etapa e avança (pressionar novamente conclui a digitação imediatamente).
- **`Seta Esquerda (←)`** ou **`PageUp`**: Retorna para a etapa anterior.
- **`Tab`**: Completa automaticamente o comando que está sendo digitado no prompt.
- **`Seta Cima (↑)` / `Seta Baixo (↓)`**: Navega pelo histórico de comandos executados.
- **`A-` / `A+`**: Ajusta o tamanho da fonte na barra inferior.

---

## Estrutura de Arquivos

```text
├── index.html             # Interface principal do terminal interativo
├── material-grafico.html  # Versão paginada (9 telas) formatada para exportação em PDF (A4 Paisagem)
├── css/
│   ├── variables.css      # Variáveis de cores, fontes e escala tipográfica
│   ├── terminal.css       # Layout da janela do terminal, prompt e barra de navegação
│   └── stages.css         # Estilização das seções, tabelas e listas de saída
├── js/
│   ├── roadmap-data.js    # Base de dados das etapas e informações acadêmicas
│   ├── renderers.js       # Funções de renderização das etapas e comandos
│   └── app.js             # Controle de eventos, digitação, histórico e autocompletar
└── README.md              # Documentação do projeto
```

---

## Execução Local

O projeto utiliza apenas **HTML5, CSS3 e JavaScript (Vanilla JS)**, sem dependências externas obrigatórias:

1. Clone este repositório:
   ```bash
   git clone https://github.com/PauloFreire777/career-roadmap.git
   ```
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.
3. Para gerar o PDF do material gráfico, abra `material-grafico.html` e utilize `Ctrl + P` (**Salvar como PDF** em modo Paisagem, com gráficos de segundo plano ativados).
