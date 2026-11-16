/**
 * Renderização das telas e comandos do terminal
 */

window.TerminalRenderers = (function () {
  const DATA = window.ROADMAP_DATA;

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function promptLine(cmd, originPath) {
    const p = originPath && originPath !== "~" ? originPath : "~";
    return `<div class="term-prompt-line"><span class="prompt-host">paulo@career-roadmap:${esc(p)}$</span> <span class="prompt-cmd">${esc(cmd)}</span></div>`;
  }

  /**
   * HOME (`~`)
   */
  function renderHome(cmdUsed, originPath) {
    const p = DATA.profile;
    return `
      ${promptLine(cmdUsed || "whoami", originPath || "~")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">IDENTIFICAÇÃO</div>
          <div class="term-table">
            <div class="term-row">
              <span class="term-col-key">Nome</span>
              <span class="term-col-val" style="color:var(--green-prompt)">${esc(p.name)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Formação anterior</span>
              <span class="term-col-val">${esc(p.previousDegree)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Formação atual</span>
              <span class="term-col-val" style="color:var(--text-bright)">${esc(p.currentDegree)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Instituição</span>
              <span class="term-col-val">${esc(p.institution)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Período atual</span>
              <span class="term-col-val">${esc(p.currentSemester)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Horizonte do roadmap</span>
              <span class="term-col-val" style="color:var(--amber-accent)">${esc(p.horizon)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Objetivo profissional</span>
              <span class="term-col-val" style="color:var(--green-prompt)">${esc(p.objective)}</span>
            </div>
          </div>
        </div>

        <div class="term-line" style="animation-delay: 110ms">
          <div class="term-section-title">COMANDOS PRINCIPAIS</div>
          <div class="term-table">
            <div class="term-row clickable-row" data-exec-cmd="ls">
              <span class="term-col-key">ls</span>
              <span class="term-col-val">Listar os 8 diretórios do roadmap</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd history">
              <span class="term-col-key">cd history</span>
              <span class="term-col-val">Iniciar apresentação (Diretório 01)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="roadmap --overview">
              <span class="term-col-key">roadmap --overview</span>
              <span class="term-col-val">Visão geral das etapas</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="help">
              <span class="term-col-key">help</span>
              <span class="term-col-val">Exibir comandos disponíveis</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * DIR 01 — `/history`
   */
  function renderHistory(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "history");
    const expHtml = st.experiences.map(item => `<li>${esc(item)}</li>`).join("");
    const compHtml = st.competencies.map(item => `<li>${esc(item)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd history", originPath || "~")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 01 — /history</div>
          <div class="term-section-subtitle">${esc(st.title)}</div>
          <ul class="term-list">
            ${expHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 100ms">
          <div class="term-section-title">COMPETÊNCIAS ADQUIRIDAS</div>
          <ul class="term-list two-col amber-markers">
            ${compHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 02 — `/transition`
   */
  function renderTransition(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "transition");
    const highlightsHtml = st.highlights.map(item => `<li>${esc(item)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd transition", originPath || "~/history")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 02 — /transition</div>
          <div class="term-section-subtitle">${esc(st.title)}</div>
          <div style="padding-left:1.25rem; margin-bottom:0.85rem; color:var(--green-prompt);">
            [Direito]  ──────►  [Ciência da Computação — PUC Minas]
          </div>
          <ul class="term-list">
            ${highlightsHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 03 — `/current-status` (3º Período — 1º Semestre do Roadmap)
   */
  function renderCurrentStatus(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "current-status");
    const coursesHtml = st.courses.map(c => `<li>${esc(c)}</li>`).join("");
    const prioritiesHtml = st.priorities.map(p => `<li>${esc(p)}</li>`).join("");
    const meansHtml = st.means.map(m => `<li>${esc(m)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd current-status", originPath || "~/transition")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 03 — /current-status (3º PERÍODO — ${esc(st.semesterTag.toUpperCase())})</div>
          <div class="term-section-subtitle">Disciplinas atuais</div>
          <ul class="term-list two-col">
            ${coursesHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 90ms">
          <div class="term-section-title">PRIORIDADES ATUAIS</div>
          <ul class="term-list two-col amber-markers">
            ${prioritiesHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 160ms">
          <div class="term-section-title">MEIOS DE ESTUDO (CURSOS, LIVROS E SITES)</div>
          <ul class="term-list">
            ${meansHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 04 — `/next-semester` (4º Período — 2º Semestre do Roadmap)
   */
  function renderNextSemester(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "next-semester");
    const coursesHtml = st.courses.map((c, idx) =>
      idx === 0
        ? `<li style="color:var(--green-prompt); font-weight:600;">${esc(c)}</li>`
        : `<li>${esc(c)}</li>`
    ).join("");
    const objectivesHtml = st.objectives.map(o => `<li>${esc(o)}</li>`).join("");
    const meansHtml = st.means.map(m => `<li>${esc(m)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd next-semester", originPath || "~/current-status")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 04 — /next-semester (4º PERÍODO — ${esc(st.semesterTag.toUpperCase())})</div>
          <div class="term-section-subtitle">Disciplinas relevantes</div>
          <ul class="term-list two-col">
            ${coursesHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 90ms">
          <div class="term-section-title">OBJETIVOS DO PERÍODO</div>
          <ul class="term-list two-col amber-markers">
            ${objectivesHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 160ms">
          <div class="term-section-title">MEIOS PLANEJADOS (CURSOS, LIVROS E PLATAFORMAS)</div>
          <ul class="term-list">
            ${meansHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 05 — `/skill-development` (5º e 6º Períodos — 3º e 4º Semestres do Roadmap)
   */
  function renderSkillDevelopment(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "skill-development");
    const itemsHtml = st.plannedEvolution.map(item => `<li>${esc(item)}</li>`).join("");
    const meansHtml = st.means.map(m => `<li>${esc(m)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd skill-development", originPath || "~/next-semester")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 05 — /skill-development (5º E 6º PERÍODOS — ${esc(st.semesterTag.toUpperCase())})</div>
          <div class="term-section-subtitle">Desenvolvimento técnico — evolução planejada</div>
          <ul class="term-list two-col amber-markers">
            ${itemsHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 110ms">
          <div class="term-section-title">MEIOS PLANEJADOS (CURSOS, LIVROS, SITES E PRÁTICA)</div>
          <ul class="term-list">
            ${meansHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 06 — `/professional-growth` (7º e 8º Períodos — 5º e 6º Semestres do Roadmap)
   */
  function renderProfessionalGrowth(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "professional-growth");
    const objHtml = st.objectives.map(item => `<li>${esc(item)}</li>`).join("");
    const meansHtml = st.means.map(m => `<li>${esc(m)}</li>`).join("");

    return `
      ${promptLine(cmdUsed || "cd professional-growth", originPath || "~/skill-development")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 06 — /professional-growth (7º E 8º PERÍODOS — ${esc(st.semesterTag.toUpperCase())})</div>
          <div class="term-section-subtitle">Consolidação profissional — objetivos</div>
          <ul class="term-list two-col amber-markers">
            ${objHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 110ms">
          <div class="term-section-title">MEIOS DE CONSOLIDAÇÃO</div>
          <ul class="term-list">
            ${meansHtml}
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * DIR 07 — `/explore-specializations`
   */
  function renderExploreSpecializations(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "explore-specializations");
    const areasHtml = st.areas.map((a, idx) => `
      <div class="spec-item">
        <div class="spec-name" ${a.highlight ? 'style="color:var(--green-prompt);"' : ""}>
          ${idx + 1}. ${esc(a.name)}
          ${a.highlight ? '<span class="spec-badge">[interseção: Direito, investigação e Computação Forense]</span>' : ""}
        </div>
        <div class="spec-desc">${esc(a.description)}</div>
      </div>
    `).join("");

    return `
      ${promptLine(cmdUsed || "cd explore-specializations", originPath || "~/professional-growth")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 07 — /explore-specializations</div>
          <div class="term-section-subtitle">Possíveis caminhos dentro da Cibersegurança (explorando possibilidades)</div>
          ${areasHtml}
        </div>

        <div class="term-line" style="animation-delay: 130ms">
          <div class="term-quote amber">
            ${esc(st.intersectionNote)}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * DIR 08 — `/future` (Sem frases de efeito)
   */
  function renderFuture(cmdUsed, originPath) {
    const st = DATA.stages.find(s => s.id === "future");
    const meansRows = st.summaryMeans.map(m => `
      <div class="term-row">
        <span class="term-col-key green">${esc(m.label)}</span>
        <span class="term-col-val">${esc(m.text)}</span>
      </div>
    `).join("");

    return `
      ${promptLine(cmdUsed || "cd future", originPath || "~/explore-specializations")}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">DIRETÓRIO 08 — /future</div>
          <div class="term-section-subtitle">Objetivo ao final da graduação (04 anos / 08 períodos — 06 semestres planejados do 3º ao 8º)</div>
          <p style="padding-left:1.25rem; color:var(--text-normal);">
            ${esc(st.visionObjective)}
          </p>
        </div>

        <div class="term-line" style="animation-delay: 100ms">
          <div class="term-section-title">RESUMO DOS MEIOS DE AQUISIÇÃO UTILIZADOS NO ROADMAP</div>
          <div class="term-table">
            ${meansRows}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Despacho das etapas do roadmap
   */
  function renderStageById(stageId, cmdUsed, originPath) {
    switch (stageId) {
      case "home":                    return renderHome(cmdUsed, originPath);
      case "history":                 return renderHistory(cmdUsed, originPath);
      case "transition":              return renderTransition(cmdUsed, originPath);
      case "current-status":          return renderCurrentStatus(cmdUsed, originPath);
      case "next-semester":           return renderNextSemester(cmdUsed, originPath);
      case "skill-development":       return renderSkillDevelopment(cmdUsed, originPath);
      case "professional-growth":     return renderProfessionalGrowth(cmdUsed, originPath);
      case "explore-specializations": return renderExploreSpecializations(cmdUsed, originPath);
      case "future":                  return renderFuture(cmdUsed, originPath);
      default:                        return renderHome(cmdUsed, originPath);
    }
  }

  /* Comandos complementares do terminal */

  function renderHelpCommand(path) {
    return `
      ${promptLine("help", path)}
      <div class="term-output-content">
        <div class="term-line">
          <div class="term-section-title">AVAILABLE COMMANDS</div>
          <div class="term-table">
            <div class="term-row clickable-row" data-exec-cmd="whoami">
              <span class="term-col-key">whoami</span>
              <span class="term-col-val">User information</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="roadmap --overview">
              <span class="term-col-key">roadmap --overview</span>
              <span class="term-col-val">Complete roadmap</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="roadmap --current">
              <span class="term-col-key">roadmap --current</span>
              <span class="term-col-val">Current academic stage</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="roadmap --future">
              <span class="term-col-key">roadmap --future</span>
              <span class="term-col-val">Future stages (4º ao 8º período)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="skills --list">
              <span class="term-col-key">skills --list</span>
              <span class="term-col-val">Skills development</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="specializations --explore">
              <span class="term-col-key">specializations --explore</span>
              <span class="term-col-val">Explore career paths</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="ls">
              <span class="term-col-key">ls</span>
              <span class="term-col-val">List directories</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd history">
              <span class="term-col-key">cd &lt;directory&gt;</span>
              <span class="term-col-val">Navigate to directory (e.g. cd history)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="home">
              <span class="term-col-key">home</span>
              <span class="term-col-val">Return to initial screen</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="clear">
              <span class="term-col-key">clear</span>
              <span class="term-col-val">Clear terminal</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="help">
              <span class="term-col-key">help</span>
              <span class="term-col-val">Display commands</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderLsCommand(path) {
    const dirs = DATA.stages.slice(1);
    const rows = dirs.map(d => `
      <div class="term-row clickable-row" data-exec-cmd="${esc(d.cmd)}">
        <span class="term-col-key green">${esc(d.dirName)}</span>
        <span class="term-col-val">${esc(d.code)}. ${esc(d.title)}</span>
      </div>
    `).join("");

    return `
      ${promptLine("ls", path)}
      <div class="term-output-content">
        <div class="term-line">
          <div class="term-section-title">DIRETÓRIOS DO ROADMAP</div>
          <div class="term-table">
            ${rows}
          </div>
        </div>
      </div>
    `;
  }

  function renderWhoamiCommand(path) {
    const p = DATA.profile;
    return `
      ${promptLine("whoami", path)}
      <div class="term-output-content">
        <div class="term-line">
          <div class="term-section-title">IDENTIFICAÇÃO</div>
          <div class="term-table">
            <div class="term-row">
              <span class="term-col-key">Nome</span>
              <span class="term-col-val" style="color:var(--green-prompt)">${esc(p.name)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Formação anterior</span>
              <span class="term-col-val">${esc(p.previousDegree)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Formação atual</span>
              <span class="term-col-val">${esc(p.currentDegree)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Instituição</span>
              <span class="term-col-val">${esc(p.institution)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Período atual</span>
              <span class="term-col-val">${esc(p.currentSemester)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Horizonte do roadmap</span>
              <span class="term-col-val" style="color:var(--amber-accent)">${esc(p.horizon)}</span>
            </div>
            <div class="term-row">
              <span class="term-col-key">Objetivo profissional</span>
              <span class="term-col-val" style="color:var(--green-prompt)">${esc(p.objective)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderRoadmapOverviewCommand(path) {
    const dirs = DATA.stages.slice(1);
    const rows = dirs.map(d => `
      <div class="term-row clickable-row" data-exec-cmd="${esc(d.cmd)}">
        <span class="term-col-key green">[${esc(d.code)}] ${esc(d.dirName)}</span>
        <span class="term-col-val">${esc(d.title)}</span>
      </div>
    `).join("");

    return `
      ${promptLine("roadmap --overview", path)}
      <div class="term-output-content">
        <div class="term-line">
          <div class="term-section-title">ROADMAP OVERVIEW (CURSO DE 04 ANOS / 08 PERÍODOS — PLANEJAMENTO DO 3º AO 8º)</div>
          <div class="term-table">
            ${rows}
          </div>
        </div>
      </div>
    `;
  }

  function renderRoadmapCurrentCommand(path) {
    return renderCurrentStatus("roadmap --current", path);
  }

  function renderRoadmapFutureCommand(path) {
    return `
      ${promptLine("roadmap --future", path)}
      <div class="term-output-content">
        <div class="term-line">
          <div class="term-section-title">PRÓXIMAS ETAPAS DO ROADMAP</div>
          <div class="term-table">
            <div class="term-row clickable-row" data-exec-cmd="cd next-semester">
              <span class="term-col-key green">/next-semester</span>
              <span class="term-col-val">4º período — Próxima etapa (2º semestre do roadmap)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd skill-development">
              <span class="term-col-key green">/skill-development</span>
              <span class="term-col-val">5º e 6º períodos — Desenvolvimento técnico (3º e 4º semestres)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd professional-growth">
              <span class="term-col-key green">/professional-growth</span>
              <span class="term-col-val">7º e 8º períodos — Consolidação profissional (5º e 6º semestres)</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd explore-specializations">
              <span class="term-col-key green">/explore-specializations</span>
              <span class="term-col-val">Possíveis caminhos dentro da Cibersegurança</span>
            </div>
            <div class="term-row clickable-row" data-exec-cmd="cd future">
              <span class="term-col-key green">/future</span>
              <span class="term-col-val">Visão de futuro e resumo dos meios de aquisição</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderSkillsListCommand(path) {
    const sHist = DATA.stages.find(s => s.id === "history");
    const sCur = DATA.stages.find(s => s.id === "current-status");
    const sDev = DATA.stages.find(s => s.id === "skill-development");

    const histHtml = sHist.competencies.map(c => `<li>${esc(c)}</li>`).join("");
    const curHtml = sCur.priorities.map(p => `<li>${esc(p)}</li>`).join("");
    const devHtml = sDev.plannedEvolution.map(d => `<li>${esc(d)}</li>`).join("");

    return `
      ${promptLine("skills --list", path)}
      <div class="term-output-content">
        <div class="term-line" style="animation-delay: 20ms">
          <div class="term-section-title">COMPETÊNCIAS ADQUIRIDAS (/history)</div>
          <ul class="term-list">
            ${histHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 90ms">
          <div class="term-section-title">PRIORIDADES ATUAIS — 3º PERÍODO (/current-status)</div>
          <ul class="term-list amber-markers">
            ${curHtml}
          </ul>
        </div>

        <div class="term-line" style="animation-delay: 160ms">
          <div class="term-section-title">EVOLUÇÃO PLANEJADA — 5º E 6º PERÍODOS (/skill-development)</div>
          <ul class="term-list">
            ${devHtml}
          </ul>
        </div>
      </div>
    `;
  }

  function renderSpecializationsExploreCommand(path) {
    return renderExploreSpecializations("specializations --explore", path);
  }

  function renderUnknownCommand(rawCmd, path) {
    return `
      ${promptLine(rawCmd, path)}
      <div class="term-output-content">
        <div class="term-line" style="color:var(--red-accent);">
          bash: ${esc(rawCmd)}: comando não encontrado
        </div>
        <div class="term-line" style="color:var(--text-muted);">
          Digite <span style="color:var(--green-prompt); cursor:pointer;" data-exec-cmd="help">help</span> para visualizar os comandos disponíveis.
        </div>
      </div>
    `;
  }

  return {
    esc,
    promptLine,
    renderStageById,
    renderHelpCommand,
    renderLsCommand,
    renderWhoamiCommand,
    renderRoadmapOverviewCommand,
    renderRoadmapCurrentCommand,
    renderRoadmapFutureCommand,
    renderSkillsListCommand,
    renderSpecializationsExploreCommand,
    renderUnknownCommand
  };
})();
