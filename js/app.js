/**
 * Controle de navegação, comandos e eventos do terminal
 */

(function () {
  const DATA = window.ROADMAP_DATA;
  const R = window.TerminalRenderers;

  const state = {
    stageIndex: 0,
    history: [],
    historyCursor: -1,
    isBooting: true,
    isTyping: false,
    scale: 1.0
  };

  let activeTypingTimer = null;
  let pendingCommandToFinish = null;

  const COMMANDS_LIST = [
    "help",
    "ls",
    "whoami",
    "home",
    "clear",
    "roadmap --overview",
    "roadmap --timeline",
    "roadmap --current",
    "roadmap --future",
    "skills --list",
    "specializations --explore",
    "specializations",
    "cd history",
    "cd transition",
    "cd current-status",
    "cd next-semester",
    "cd skill-development",
    "cd professional-growth",
    "cd explore-specializations",
    "cd future",
    "cd timeline"
  ];

  const dom = {};

  function cacheDom() {
    dom.terminalWindow = document.getElementById("terminal-window");
    dom.terminalBody = document.getElementById("terminal-body");
    dom.terminalFooter = document.getElementById("terminal-footer");
    dom.livePromptPrefix = document.getElementById("live-prompt-prefix");
    dom.typedMirror = document.getElementById("typed-mirror");
    dom.ghostAutocomplete = document.getElementById("ghost-autocomplete");
    dom.cmdInput = document.getElementById("cmd-input");
    dom.statusCaption = document.getElementById("status-caption");

    dom.btnPrev = document.getElementById("btn-prev");
    dom.btnNext = document.getElementById("btn-next");
    dom.btnHome = document.getElementById("btn-home");
    dom.btnDirs = document.getElementById("btn-dirs");
    dom.dirMenuPopover = document.getElementById("dir-menu-popover");
    dom.discreetProgress = document.getElementById("discreet-progress");
    dom.btnReboot = document.getElementById("btn-reboot");
    dom.btnFontDec = document.getElementById("btn-font-dec");
    dom.btnFontInc = document.getElementById("btn-font-inc");
    dom.btnFullscreen = document.getElementById("btn-fullscreen");
  }

  let bootTimers = [];

  function clearBootTimers() {
    bootTimers.forEach(t => clearTimeout(t));
    bootTimers = [];
  }

  function runBootSequence() {
    abortTypingOnly();
    clearBootTimers();
    state.isBooting = true;
    dom.terminalBody.innerHTML = `<div id="boot-container" class="boot-lines"></div>`;
    const container = document.getElementById("boot-container");
    dom.statusCaption.textContent = "Inicializando sistema... (pressione Enter ou Esc para avançar)";

    const lines = DATA.bootSequence;
    lines.forEach((item, idx) => {
      const t = setTimeout(() => {
        const div = document.createElement("div");
        div.className = item.isFinal ? "term-line boot-line-ok" : "term-line";
        div.textContent = item.text;
        container.appendChild(div);

        if (idx === lines.length - 1) {
          const endTimer = setTimeout(finishBoot, 700);
          bootTimers.push(endTimer);
        }
      }, (idx + 1) * 380);
      bootTimers.push(t);
    });
  }

  function finishBoot() {
    clearBootTimers();
    if (!state.isBooting) return;
    state.isBooting = false;
    setStage(0, "whoami", "~");
    focusPrompt();
  }

  function buildDirMenu() {
    dom.dirMenuPopover.innerHTML = DATA.stages.map((st, idx) => {
      const name = idx === 0 ? "~ (home)" : st.dirName;
      return `
        <button type="button" class="dir-menu-item" data-stage-idx="${idx}">
          <span>${R.esc(name)}</span>
          <span style="color:var(--text-dim)">${idx === 0 ? "00" : st.code}</span>
        </button>
      `;
    }).join("");
  }

  function syncUI() {
    const cur = DATA.stages[state.stageIndex];
    const pathStr = cur.path || "~";

    dom.livePromptPrefix.textContent = `paulo@career-roadmap:${pathStr}$ `;

    const code = state.stageIndex === 0 ? "00" : cur.code;
    const label = state.stageIndex === 0 ? "~ (início)" : cur.dirName;
    const total = String(DATA.stages.length - 1).padStart(2, "0");
    dom.discreetProgress.textContent = `${code} / ${total} — ${label}`;

    if (state.stageIndex < DATA.stages.length - 1) {
      const nextSt = DATA.stages[state.stageIndex + 1];
      dom.statusCaption.textContent = `Próxima etapa: ${nextSt.cmd}  (use → / PgDn ou digite um comando)`;
    } else {
      dom.statusCaption.textContent = `Apresentação concluída — digite 'home' ou 'help' para explorar.`;
    }

    dom.btnPrev.disabled = state.stageIndex <= 0;
    dom.btnNext.disabled = state.stageIndex >= DATA.stages.length - 1;

    const menuItems = dom.dirMenuPopover.querySelectorAll(".dir-menu-item");
    menuItems.forEach(btn => {
      const idx = Number(btn.getAttribute("data-stage-idx"));
      btn.classList.toggle("active", idx === state.stageIndex);
    });
  }

  function renderOutput(html) {
    dom.terminalBody.innerHTML = html;
    dom.terminalBody.scrollTop = 0;
  }

  function setStage(idx, cmdUsed, originPath) {
    const prevPath = originPath || (DATA.stages[state.stageIndex] && DATA.stages[state.stageIndex].path) || "~";
    const bounded = Math.max(0, Math.min(DATA.stages.length - 1, idx));
    state.stageIndex = bounded;
    const st = DATA.stages[bounded];
    const html = R.renderStageById(st.id, cmdUsed || st.cmd, prevPath);
    renderOutput(html);
    syncUI();
  }

  function updateInputMirror() {
    const val = dom.cmdInput.value;
    dom.typedMirror.textContent = val;

    const trimmed = val.trimStart().toLowerCase();
    if (!trimmed) {
      dom.ghostAutocomplete.textContent = "";
      return;
    }

    const match = COMMANDS_LIST.find(c => c.toLowerCase().startsWith(trimmed) && c.length > trimmed.length);
    if (match) {
      dom.ghostAutocomplete.textContent = match.slice(trimmed.length);
    } else {
      dom.ghostAutocomplete.textContent = "";
    }
  }

  function applyAutocomplete() {
    const val = dom.cmdInput.value.trimStart().toLowerCase();
    if (!val) return false;
    const match = COMMANDS_LIST.find(c => c.toLowerCase().startsWith(val));
    if (match) {
      dom.cmdInput.value = match;
      updateInputMirror();
      return true;
    }
    return false;
  }

  function abortTypingOnly() {
    if (activeTypingTimer) {
      clearTimeout(activeTypingTimer);
      activeTypingTimer = null;
    }
    state.isTyping = false;
    pendingCommandToFinish = null;
    dom.cmdInput.value = "";
    updateInputMirror();
  }

  function cancelActiveTypingAndFinish() {
    if (activeTypingTimer) {
      clearTimeout(activeTypingTimer);
      activeTypingTimer = null;
    }
    state.isTyping = false;
    dom.cmdInput.value = "";
    updateInputMirror();
    if (pendingCommandToFinish) {
      const cmd = pendingCommandToFinish;
      pendingCommandToFinish = null;
      runCommand(cmd);
    }
  }

  function typeAndRunCommand(cmdText) {
    if (state.isTyping) {
      cancelActiveTypingAndFinish();
      return;
    }

    state.isTyping = true;
    pendingCommandToFinish = cmdText;
    dom.cmdInput.value = "";
    dom.ghostAutocomplete.textContent = "";

    const curStage = DATA.stages[state.stageIndex];
    const curPath = curStage.path || "~";

    dom.terminalBody.innerHTML = `
      <div class="term-prompt-line">
        <span class="prompt-host">paulo@career-roadmap:${R.esc(curPath)}$</span>
        <span id="top-typing-target" class="prompt-cmd"></span><span class="cursor-underscore">_</span>
      </div>
    `;
    const topTarget = document.getElementById("top-typing-target");

    let charIndex = 0;

    function typeNextChar() {
      if (!state.isTyping) return;

      charIndex++;
      const slice = cmdText.slice(0, charIndex);
      dom.cmdInput.value = slice;
      dom.typedMirror.textContent = slice;
      if (topTarget) {
        topTarget.textContent = " " + slice;
      }

      if (charIndex < cmdText.length) {
        const lastChar = cmdText[charIndex - 1];
        const baseDelay = lastChar === " " ? 135 : 90;
        const jitter = Math.floor(Math.random() * 35);
        activeTypingTimer = setTimeout(typeNextChar, baseDelay + jitter);
      } else {
        activeTypingTimer = setTimeout(() => {
          state.isTyping = false;
          activeTypingTimer = null;
          pendingCommandToFinish = null;
          dom.cmdInput.value = "";
          updateInputMirror();
          runCommand(cmdText);
        }, 420);
      }
    }

    activeTypingTimer = setTimeout(typeNextChar, 120);
  }

  function resolveDirectory(rawArg) {
    if (!rawArg) return "home";
    const clean = rawArg.trim().toLowerCase().replace(/^(\.\/|\/|~\/)+/, "").replace(/\/+$/, "");
    if (clean === "" || clean === "~" || clean === "home" || clean === "..") {
      return "home";
    }
    for (let i = 1; i < DATA.stages.length; i++) {
      const s = DATA.stages[i];
      if (clean === s.slug || clean === s.code || clean === String(s.index)) {
        return s.id;
      }
    }
    return null;
  }

  function runCommand(raw) {
    const trimmed = (raw || "").trim();
    if (!trimmed) return;

    if (state.history[state.history.length - 1] !== trimmed) {
      state.history.push(trimmed);
    }
    state.historyCursor = state.history.length;

    const curStage = DATA.stages[state.stageIndex];
    const originPath = curStage.path || "~";
    const norm = trimmed.toLowerCase().replace(/\s+/g, " ");

    if (norm === "clear" || norm === "cls") {
      dom.terminalBody.innerHTML = "";
      return;
    }

    if (norm === "home" || norm === "cd" || norm === "cd ~" || norm === "cd /" || norm === "cd ..") {
      setStage(0, trimmed, originPath);
      return;
    }

    if (norm.startsWith("cd ")) {
      const arg = trimmed.slice(3).trim();
      const targetId = resolveDirectory(arg);
      if (targetId) {
        const idx = DATA.stages.findIndex(s => s.id === targetId);
        setStage(idx, trimmed, originPath);
      } else {
        renderOutput(R.renderUnknownCommand(trimmed, originPath));
      }
      return;
    }

    const directDir = DATA.stages.slice(1).find(s => s.slug === norm || s.dirName === norm);
    if (directDir) {
      setStage(directDir.index, `cd ${directDir.slug}`, originPath);
      return;
    }

    if (norm === "help" || norm === "--help" || norm === "?") {
      renderOutput(R.renderHelpCommand(originPath));
      return;
    }

    if (norm === "ls" || norm.startsWith("ls ") || norm === "dir") {
      renderOutput(R.renderLsCommand(originPath));
      return;
    }

    if (norm === "whoami") {
      renderOutput(R.renderWhoamiCommand(originPath));
      return;
    }

    if (norm === "roadmap --overview" || norm === "roadmap") {
      renderOutput(R.renderRoadmapOverviewCommand(originPath));
      return;
    }
    if (norm === "roadmap --timeline") {
      const idx = DATA.stages.findIndex(s => s.id === "timeline");
      setStage(idx, trimmed, originPath);
      return;
    }
    if (norm === "roadmap --current") {
      renderOutput(R.renderRoadmapCurrentCommand(originPath));
      return;
    }
    if (norm === "roadmap --future") {
      renderOutput(R.renderRoadmapFutureCommand(originPath));
      return;
    }

    if (norm === "skills --list" || norm === "skills") {
      renderOutput(R.renderSkillsListCommand(originPath));
      return;
    }

    if (norm === "specializations --explore" || norm === "specializations") {
      renderOutput(R.renderSpecializationsExploreCommand(originPath));
      return;
    }

    if (norm.startsWith("echo ")) {
      const msg = trimmed.slice(5).trim().replace(/^["']|["']$/g, "");
      renderOutput(`
        ${R.promptLine(trimmed, originPath)}
        <div class="term-output-content">
          <div class="term-line" style="color:var(--text-bright); font-size:var(--fs-md);">
            ${R.esc(msg)}
          </div>
        </div>
      `);
      return;
    }

    if (norm === "reboot") {
      runBootSequence();
      return;
    }

    renderOutput(R.renderUnknownCommand(trimmed, originPath));
  }

  function stepNext() {
    if (state.isTyping) {
      cancelActiveTypingAndFinish();
      return;
    }
    if (state.stageIndex < DATA.stages.length - 1) {
      const nextSt = DATA.stages[state.stageIndex + 1];
      typeAndRunCommand(nextSt.cmd);
    }
  }

  function stepPrev() {
    if (state.isTyping) {
      abortTypingOnly();
    }
    if (state.stageIndex > 0) {
      const prevSt = DATA.stages[state.stageIndex - 1];
      typeAndRunCommand(prevSt.cmd);
    }
  }

  function adjustScale(delta) {
    state.scale = Math.max(0.8, Math.min(1.5, +(state.scale + delta).toFixed(2)));
    document.documentElement.style.setProperty("--scale", String(state.scale));
  }

  function focusPrompt() {
    if (!state.isBooting) {
      dom.cmdInput.focus();
    }
  }

  function bindEvents() {
    dom.terminalWindow.addEventListener("click", e => {
      if (state.isBooting) return;
      const cmdEl = e.target.closest("[data-exec-cmd]");
      if (cmdEl) {
        const cmd = cmdEl.getAttribute("data-exec-cmd");
        if (cmd) typeAndRunCommand(cmd);
      }
      focusPrompt();
    });

    document.addEventListener("click", e => {
      const cmdEl = e.target.closest("[data-exec-cmd]");
      if (cmdEl && !dom.terminalWindow.contains(cmdEl)) {
        const cmd = cmdEl.getAttribute("data-exec-cmd");
        if (cmd) typeAndRunCommand(cmd);
        focusPrompt();
      }

      if (!e.target.closest("#btn-dirs") && !e.target.closest("#dir-menu-popover")) {
        dom.dirMenuPopover.classList.add("hidden");
      }
    });

    dom.cmdInput.addEventListener("input", () => {
      if (state.isTyping) return;
      updateInputMirror();
    });

    window.addEventListener("keydown", e => {
      if (state.isBooting) {
        if (e.key === "Enter" || e.key === "Escape") {
          e.preventDefault();
          finishBoot();
        }
        return;
      }

      if (state.isTyping) {
        if (e.key === "Enter" || e.key === "ArrowRight" || e.key === "PageDown") {
          e.preventDefault();
          cancelActiveTypingAndFinish();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          abortTypingOnly();
          const curSt = DATA.stages[state.stageIndex];
          setStage(state.stageIndex, curSt.cmd, curSt.path);
          return;
        }
        if (e.key === "ArrowLeft" || e.key === "PageUp") {
          e.preventDefault();
          stepPrev();
          return;
        }
        return;
      }

      if (document.activeElement !== dom.cmdInput && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
        dom.cmdInput.focus();
      }

      if (e.key === "Enter") {
        e.preventDefault();
        const val = dom.cmdInput.value;
        dom.cmdInput.value = "";
        updateInputMirror();
        runCommand(val);
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        applyAutocomplete();
        return;
      }

      if (e.key === "Escape") {
        dom.cmdInput.value = "";
        updateInputMirror();
        dom.dirMenuPopover.classList.add("hidden");
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (state.history.length > 0 && state.historyCursor > 0) {
          state.historyCursor--;
          dom.cmdInput.value = state.history[state.historyCursor];
          updateInputMirror();
        }
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (state.historyCursor < state.history.length - 1) {
          state.historyCursor++;
          dom.cmdInput.value = state.history[state.historyCursor];
        } else {
          state.historyCursor = state.history.length;
          dom.cmdInput.value = "";
        }
        updateInputMirror();
        return;
      }

      if (e.key === "PageDown" || (e.altKey && e.key === "ArrowRight")) {
        e.preventDefault();
        stepNext();
        return;
      }

      if (e.key === "PageUp" || (e.altKey && e.key === "ArrowLeft")) {
        e.preventDefault();
        stepPrev();
        return;
      }

      if (dom.cmdInput.value.length === 0 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          stepNext();
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          stepPrev();
          return;
        }
      }
    });

    dom.btnPrev.addEventListener("click", () => {
      stepPrev();
      focusPrompt();
    });
    dom.btnNext.addEventListener("click", () => {
      stepNext();
      focusPrompt();
    });
    dom.btnHome.addEventListener("click", () => {
      typeAndRunCommand("home");
      focusPrompt();
    });
    dom.btnDirs.addEventListener("click", () => {
      dom.dirMenuPopover.classList.toggle("hidden");
    });

    dom.dirMenuPopover.addEventListener("click", e => {
      const item = e.target.closest("[data-stage-idx]");
      if (!item) return;
      const idx = Number(item.getAttribute("data-stage-idx"));
      dom.dirMenuPopover.classList.add("hidden");
      const st = DATA.stages[idx];
      typeAndRunCommand(st.cmd);
      focusPrompt();
    });

    dom.btnReboot.addEventListener("click", () => {
      runBootSequence();
      focusPrompt();
    });

    dom.btnFontDec.addEventListener("click", () => {
      adjustScale(-0.1);
      focusPrompt();
    });

    dom.btnFontInc.addEventListener("click", () => {
      adjustScale(0.1);
      focusPrompt();
    });

    dom.btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
      focusPrompt();
    });
  }

  function init() {
    cacheDom();
    buildDirMenu();
    bindEvents();
    runBootSequence();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
