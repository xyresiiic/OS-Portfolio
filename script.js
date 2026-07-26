/* ==========================================================================
   RETRO OS PORTFOLIO
   ========================================================================== */

// ==========================================================================
// PORTFOLIO DATA (MATCHING LIVE SITE)
// ==========================================================================

const PORTFOLIO_CONFIG = {
  systemName: "NAZRITHM OS v1.0",
  developerName: "Veer Pratap Singh",
  developerTitle: "Creative Developer & Digital Storyteller",
  tagline: "Code. Click. Create.",
  college: "Arya College of Engineering · RTU, Jaipur",
  contactEmail: "xyresiiic@gmail.com",
  githubUrl: "https://github.com/xyresiiic",
  linkedinUrl: "https://linkedin.com/in/veer-pratap-singh-77702b316",
  instagramPersonal: "https://instagram.com/ivee.rrr",
  instagramStudio: "https://instagram.com/nazrithm",
  resumeLink: "resume.pdf"
};

const BIO_DATA = {
  bioText: `I'm Veer Pratap Singh — a B.Tech CSE student at Arya College of Engineering, Jaipur. I blend engineering precision with creative vision to build digital experiences where code meets creativity.

My work spans from developing intelligent AI systems to crafting premium brand identities. I believe the best digital products are engineered with precision and designed with soul.

Beyond development, I'm building @nazrithm — a Creative Studio focused on design, reels, and brand strategy. Because real impact comes from building brands, not just shipping code.`,
  asciiArt: `
/\_/\
( o.o) 
> ^ < 
  `,
  quickFacts: [
    { label: "DEGREE", value: "B.Tech Computer Science (2022-2028)" },
    { label: "COLLEGE", value: "Arya College of Engineering, Jaipur" },
    { label: "SPECIALTY", value: "Front-End Dev, AI Systems, Photography" },
    { label: "STUDIO", value: "Founder @nazrithm (Creative Studio)" },
    { label: "STATUS", value: "Available for Opportunities & Projects" }
  ]
};

const PROJECTS_DATA = [
  {
    id: "aitriage",
    title: "AI Triage Pro",
    tagline: "Featured · HackNexus 2.0 — 4th Place",
    techStack: ["Python", "Flask", "Whisper AI", "CLIP", "Librosa", "Transformers"],
    shortDesc: "Multimodal AI emergency triage platform combining Whisper call transcription, CLIP Vision AI injury analysis, and Librosa audio processing — fused through a weighted trust-scoring engine for real-time ambulance dispatch.",
    features: [
      "Real-time voice-to-text call transcription using OpenAI Whisper",
      "Injury & trauma visual severity assessment using CLIP Vision AI",
      "Acoustic distress analysis powered by Librosa audio processing",
      "Automated weighted trust-scoring for emergency response routing"
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/xyresiiic/AI-TRIAGE-PRO-Project-"
  },
  {
    id: "nazrithm",
    title: "Nazrithm Website",
    tagline: "Featured · Creative Studio",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    shortDesc: "A creative studio website that helps brands, cafés, salons, and creators grow through eye-catching reels, professional designs, social media content, and brand strategy — where vision meets viral rhythm.",
    features: [
      "Sleek editorial dark aesthetic tailored for digital brands",
      "Interactive studio portfolio showing video reels and brand kits",
      "Seamless client onboarding contact integration"
    ],
    liveUrl: "https://nazrithm.vercel.app/#",
    repoUrl: "https://github.com/xyresiiic"
  },
  {
    id: "lustreva",
    title: "Lustréva",
    tagline: "Featured · Premium Gifting Brand",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    shortDesc: "Premium gifting brand landing page with luxury editorial aesthetic, smooth animations, and refined UI direction. Designed to convert with a highly polished visual identity.",
    features: [
      "High-end luxury aesthetic and responsive typography",
      "Micro-animations for product highlights and custom gift kits",
      "Optimized layout engineered for conversion and brand storytelling"
    ],
    liveUrl: "https://lustreva.vercel.app",
    repoUrl: "https://github.com/xyresiiic"
  },
  {
    id: "contentcal",
    title: "Content Calendar",
    tagline: "Featured · Utility Tool",
    techStack: ["HTML", "CSS", "JavaScript", "Tooling"],
    shortDesc: "AI-assisted smart scheduling tool for creators and brands — plan, schedule, and manage content efficiently with an intuitive, clean user interface.",
    features: [
      "Intuitive content planning calendar grid",
      "Hashtag generator and post timing recommendations",
      "Clean client-side state management"
    ],
    liveUrl: "https://content-calandar.vercel.app/",
    repoUrl: "https://github.com/xyresiiic"
  },
  {
    id: "medicsoul",
    title: "Medic Soul",
    tagline: "Healthcare Assistant Website",
    techStack: ["HTML", "CSS", "JavaScript"],
    shortDesc: "Healthcare assistant website with integrated chatbot features and clean medical interface design.",
    features: [
      "Medical symptom checker flow",
      "Integrated health chatbot UI",
      "Responsive medical services directory"
    ],
    liveUrl: "https://xyresiiic.github.io/madicSoul/",
    repoUrl: "https://github.com/xyresiiic"
  },
  {
    id: "codsoft",
    title: "CodSoft Internship Projects",
    tagline: "Web Development Internship Deliverables",
    techStack: ["HTML", "CSS", "JavaScript"],
    shortDesc: "Production-ready web projects including interactive Calculator, To-Do List app, and Number Guessing Game with clean UI.",
    features: [
      "Responsive calculator app",
      "Interactive task management To-Do list",
      "Logic-driven Number Guessing game"
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/xyresiiic/CODSOFT"
  },
  {
    id: "calculator",
    title: "Basic Calculator",
    tagline: "Utility Web App",
    techStack: ["HTML", "CSS", "JavaScript"],
    shortDesc: "Responsive arithmetic calculator with clean UI, focused on simplicity, usability, and cross-device layout.",
    features: [
      "Clean keypads and instant evaluation",
      "Keyboard shortcut support",
      "Full mobile responsiveness"
    ],
    liveUrl: "https://xyresiiic.github.io/Basic_calculator/",
    repoUrl: "https://github.com/xyresiiic"
  }
];

const SKILLS_DATA = {
  Programming: [
    { name: "C / C++", level: 90 },
    { name: "Java", level: 80 },
    { name: "Python", level: 40 }

  ],
  Frontend: [
    { name: "HTML5 / CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "UI/UX & Responsive Layouts", level: 92 }
  ],
  Backend_AI: [
    { name: "Python & Flask", level: 85 },
    { name: "AI/ML (Whisper, CLIP, Librosa)", level: 82 },
    { name: "Transformers & Audio AI", level: 78 }
  ],
  Creative: [
    { name: "Photography & Videography", level: 92 },
    { name: "Lightroom & VN Video Editor", level: 90 },
    { name: "Graphic Design & Photoshop", level: 88 },
    { name: "Brand Strategy (@nazrithm)", level: 95 }
  ],
  Tools: [
    { name: "VS Code & Git / GitHub", level: 92 },
    { name: "GitHub Pages & Vercel", level: 90 }
  ]
};

const EXP_DATA = [
  {
    date: "2026",
    role: "4th Place Winner",
    company: "HackNexus 2.0 Hackathon",
    desc: "Built AI Triage Pro — a multimodal emergency triage system combining audio (Whisper/Librosa) and vision AI (CLIP) for real-time severity detection and ambulance dispatch recommendation.",
    tech: "AI/ML, Python, Flask, Whisper, CLIP"
  },
  {
    date: "2025",
    role: "Web Development Intern",
    company: "CodSoft",
    desc: "Built production-ready web projects including interactive calculator, task manager apps, and logic games using HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    date: "2025",
    role: "C++ Programming Intern",
    company: "CodeAlpha",
    desc: "Worked on C++ programming challenges, strengthening core fundamentals, data structures, and object-oriented programming.",
    tech: "C++, Data Structures, OOP"
  },
  {
    date: "2025",
    role: "Virtual Tech Intern",
    company: "Deloitte / Forage",
    desc: "Completed a virtual technical internship program simulating real-world technology consulting and software engineering challenges.",
    tech: "Software Eng, Tech Consulting"
  },
  {
    date: "2024 — Present",
    role: "B.Tech Computer Science Student",
    company: "Arya College of Engineering · RTU",
    desc: "Pursuing B.Tech CSE with deep focus on programming, AI systems, web development, and creative technology. Graduating 2028.",
    tech: "CS, AI, Web Dev, C++"
  }
];

const CERTS_DATA = {
  pro: [
    { name: "Web Dev Fundamentals", org: "IBM", icon: "💻" },
    { name: "Virtual Tech Internship", org: "Deloitte / Forage", icon: "🏢" },
    { name: "Software Eng. Simulation", org: "Accenture", icon: "📊" },
    { name: "Solution Architecture", org: "AWS", icon: "☁️" },
    { name: "GenAI Data Analytics", org: "Tata", icon: "🤖" }
  ],
  rec: [
    { name: "3rd Place — Photography", org: "School Competition", icon: "📷" },
    { name: "1st Place — Content Creation", org: "Institute", icon: "✍️" },
    { name: "Basics of Quadcopter", org: "IIT Roorkee", icon: "🚁" },
    { name: "Blockchain Technology", org: "IIT Roorkee", icon: "🔗" },
    { name: "Web Dev Internship", org: "CodSoft", icon: "💻" },
    { name: "C++ Internship", org: "CodeAlpha", icon: "⚙️" }
  ]
};

// ==========================================================================
// 2. AUDIO ENGINE (WEB AUDIO API SYNTHESIZER)
// ==========================================================================

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (!this.muted && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.muted;
  }

  playBeep(freq = 800, type = 'square', duration = 0.05, gainVal = 0.05) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error:", e);
    }
  }

  playClick() { this.playBeep(900, 'square', 0.04, 0.04); }
  playOpen() {
    this.playBeep(440, 'triangle', 0.06, 0.06);
    setTimeout(() => this.playBeep(880, 'triangle', 0.08, 0.06), 60);
  }
  playClose() {
    this.playBeep(660, 'triangle', 0.05, 0.05);
    setTimeout(() => this.playBeep(330, 'triangle', 0.07, 0.05), 50);
  }
  playError() { this.playBeep(150, 'sawtooth', 0.2, 0.08); }
}

const audioEngine = new AudioEngine();

// ==========================================================================
// 3. BOOT CONTROLLER LOGIC
// ==========================================================================

class BootController {
  constructor(onComplete) {
    this.onComplete = onComplete;
    this.bootScreen = document.getElementById('boot-screen');
    this.bootLog = document.getElementById('boot-log');
    this.progressBar = document.getElementById('boot-progress-bar');
    this.desktop = document.getElementById('desktop');
    this.skipped = false;

    this.logs = [
      "Initializing NAZRITHM BIOS v1.0.95...",
      "Operator: VEER PRATAP SINGH (Creative Developer)",
      "Checking System RAM: 640K Base, 65536K Extended... OK",
      "Detecting Storage Devices: /dev/projects... OK",
      "Mounting Creative Studio: @nazrithm... OK",
      "Loading AI Modules (Whisper, CLIP, Librosa)... OK",
      "Loading Window Manager v2.4...",
      "Launching Retro OS Desktop..."
    ];
  }

  start() {
    if (sessionStorage.getItem('hasBooted') === 'true') {
      this.finishInstant();
      return;
    }

    const skipHandler = () => {
      if (!this.skipped) {
        this.skipped = true;
        this.finishInstant();
      }
    };
    this.bootScreen.addEventListener('click', skipHandler);
    window.addEventListener('keydown', skipHandler, { once: true });

    let logIndex = 0;
    const totalLogs = this.logs.length;

    const interval = setInterval(() => {
      if (this.skipped) {
        clearInterval(interval);
        return;
      }

      if (logIndex < totalLogs) {
        this.bootLog.textContent += this.logs[logIndex] + "\n";
        logIndex++;
        const pct = Math.round((logIndex / totalLogs) * 100);
        this.progressBar.style.width = `${pct}%`;
        audioEngine.playBeep(600 + logIndex * 40, 'square', 0.02, 0.02);
      } else {
        clearInterval(interval);
        setTimeout(() => this.finishInstant(), 400);
      }
    }, 180);
  }

  finishInstant() {
    sessionStorage.setItem('hasBooted', 'true');
    this.bootScreen.classList.add('hidden');
    this.desktop.classList.remove('hidden');
    audioEngine.playOpen();
    if (this.onComplete) this.onComplete();
  }
}

// ==========================================================================
// 4. WINDOW MANAGER CLASS
// ==========================================================================

class WindowManager {
  constructor() {
    this.windowsContainer = document.getElementById('windows-container');
    this.template = document.getElementById('window-template');
    this.openWindows = new Map();
    this.activeZIndex = 10;
    this.offsetCount = 0;
  }

  open(appId, customTitle, customContentHTML, customIcon = "📁") {
    audioEngine.playOpen();

    if (this.openWindows.has(appId)) {
      const winObj = this.openWindows.get(appId);
      if (winObj.isMinimized) {
        winObj.element.classList.remove('minimized');
        winObj.isMinimized = false;
      }
      this.focus(appId);
      return;
    }

    const clone = this.template.content.cloneNode(true);
    const winElem = clone.querySelector('.window');
    winElem.dataset.appId = appId;

    winElem.querySelector('.window-title-icon').textContent = customIcon;
    winElem.querySelector('.window-title-text').textContent = customTitle;

    const bodyElem = winElem.querySelector('.window-body');
    bodyElem.innerHTML = customContentHTML;

    const desktopWidth = window.innerWidth;
    const desktopHeight = window.innerHeight;

    let initialWidth = Math.min(620, desktopWidth - 30);
    let initialHeight = Math.min(460, desktopHeight - 90);

    if (appId === 'projects' || appId === 'creative') initialWidth = Math.min(700, desktopWidth - 30);
    if (appId === 'certs') initialWidth = Math.min(650, desktopWidth - 30);
    if (appId === 'resume') initialWidth = Math.min(740, desktopWidth - 30);
    if (appId === 'game') {
      initialWidth = Math.min(680, desktopWidth - 30);
      initialHeight = 490;
    }
    if (appId === 'snake') {
      initialWidth = Math.min(580, desktopWidth - 30);
      initialHeight = 480;
    }

    const left = Math.max(15, Math.min(50 + (this.offsetCount * 22), desktopWidth - initialWidth - 15));
    const top = Math.max(15, Math.min(35 + (this.offsetCount * 22), desktopHeight - initialHeight - 50));

    this.offsetCount = (this.offsetCount + 1) % 8;

    winElem.style.width = `${initialWidth}px`;
    winElem.style.height = `${initialHeight}px`;
    winElem.style.left = `${left}px`;
    winElem.style.top = `${top}px`;

    this.windowsContainer.appendChild(winElem);

    const windowState = {
      element: winElem,
      isMinimized: false,
      isMaximized: false,
      title: customTitle,
      icon: customIcon,
      prevRect: null
    };

    this.openWindows.set(appId, windowState);

    const headerElem = winElem.querySelector('.window-header');
    const minBtn = winElem.querySelector('.win-btn-minimize');
    const maxBtn = winElem.querySelector('.win-btn-maximize');
    const closeBtn = winElem.querySelector('.win-btn-close');
    const resizeHandle = winElem.querySelector('.window-resize-handle');

    this.initDrag(winElem, headerElem);
    this.initResize(winElem, resizeHandle);

    winElem.addEventListener('mousedown', () => this.focus(appId));

    minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.minimize(appId);
    });

    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMaximize(appId);
    });

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close(appId);
    });

    this.focus(appId);
    taskbarManager.addTaskTab(appId, customTitle, customIcon);

    if (appId === 'game') {
      initDodgeGame();
    }
    if (appId === 'snake') {
      initSnakeGame();
    }
  }

  focus(appId) {
    if (!this.openWindows.has(appId)) return;

    this.activeZIndex += 2;
    this.openWindows.forEach((winObj) => {
      winObj.element.classList.remove('active');
    });

    const currentWin = this.openWindows.get(appId);
    currentWin.element.classList.add('active');
    currentWin.element.style.zIndex = this.activeZIndex;

    taskbarManager.setActiveTab(appId);
  }

  minimize(appId) {
    if (!this.openWindows.has(appId)) return;
    audioEngine.playClose();

    const winObj = this.openWindows.get(appId);
    winObj.element.classList.add('minimized');
    winObj.element.classList.remove('active');
    winObj.isMinimized = true;

    taskbarManager.setTabMinimized(appId);
  }

  toggleMaximize(appId) {
    if (!this.openWindows.has(appId)) return;
    audioEngine.playClick();

    const winObj = this.openWindows.get(appId);
    const elem = winObj.element;

    if (winObj.isMaximized) {
      elem.classList.remove('maximized');
      if (winObj.prevRect) {
        elem.style.left = winObj.prevRect.left;
        elem.style.top = winObj.prevRect.top;
        elem.style.width = winObj.prevRect.width;
        elem.style.height = winObj.prevRect.height;
      }
      winObj.isMaximized = false;
    } else {
      winObj.prevRect = {
        left: elem.style.left,
        top: elem.style.top,
        width: elem.style.width,
        height: elem.style.height
      };
      elem.classList.add('maximized');
      winObj.isMaximized = true;
    }
  }

  close(appId) {
    if (!this.openWindows.has(appId)) return;
    audioEngine.playClose();

    const winObj = this.openWindows.get(appId);
    winObj.element.remove();
    this.openWindows.delete(appId);

    taskbarManager.removeTaskTab(appId);
  }

  initDrag(winElem, handle) {
    let startX = 0, startY = 0, initialLeft = 0, initialTop = 0;
    let isDragging = false;

    const onStart = (e) => {
      if (winElem.classList.contains('maximized')) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      startX = clientX;
      startY = clientY;
      initialLeft = winElem.offsetLeft;
      initialTop = winElem.offsetTop;
      isDragging = true;

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('touchend', onEnd);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      let newLeft = initialLeft + deltaX;
      let newTop = initialTop + deltaY;

      const maxLeft = window.innerWidth - 60;
      const maxTop = window.innerHeight - 80;

      newLeft = Math.max(-100, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));

      winElem.style.left = `${newLeft}px`;
      winElem.style.top = `${newTop}px`;
    };

    const onEnd = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };

    handle.addEventListener('mousedown', onStart);
    handle.addEventListener('touchstart', onStart, { passive: true });
  }

  initResize(winElem, handle) {
    let startX = 0, startY = 0, startW = 0, startH = 0;
    let isResizing = false;

    const onStart = (e) => {
      if (winElem.classList.contains('maximized')) return;
      e.stopPropagation();

      startX = e.touches ? e.touches[0].clientX : e.clientX;
      startY = e.touches ? e.touches[0].clientY : e.clientY;
      startW = winElem.offsetWidth;
      startH = winElem.offsetHeight;
      isResizing = true;

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
    };

    const onMove = (e) => {
      if (!isResizing) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const newW = Math.max(300, startW + (clientX - startX));
      const newH = Math.max(200, startH + (clientY - startY));

      winElem.style.width = `${newW}px`;
      winElem.style.height = `${newH}px`;
    };

    const onEnd = () => {
      isResizing = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
    };

    handle.addEventListener('mousedown', onStart);
  }
}

const windowManager = new WindowManager();

// ==========================================================================
// 5. TASKBAR & START MENU MANAGER
// ==========================================================================

class TaskbarManager {
  constructor() {
    this.startButton = document.getElementById('start-button');
    this.startMenu = document.getElementById('start-menu');
    this.tasksContainer = document.getElementById('taskbar-tasks');
    this.clockElem = document.getElementById('system-clock');
    this.soundToggleItem = document.getElementById('sound-toggle-item');
    this.soundToggleLabel = document.getElementById('sound-toggle-label');
    this.traySoundBtn = document.getElementById('tray-sound-btn');
    this.shutdownItem = document.getElementById('shutdown-item');
    this.shutdownScreen = document.getElementById('shutdown-screen');

    this.initClock();
    this.initStartMenu();
    this.initAudioToggles();
    this.initShutdown();
  }

  initClock() {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      this.clockElem.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  initStartMenu() {
    this.startButton.addEventListener('click', (e) => {
      e.stopPropagation();
      audioEngine.playClick();
      this.toggleStartMenu();
    });

    document.addEventListener('click', (e) => {
      if (!this.startMenu.contains(e.target) && !this.startButton.contains(e.target)) {
        this.closeStartMenu();
      }
    });

    const items = this.startMenu.querySelectorAll('.start-item[data-app]');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const appId = item.dataset.app;
        openAppWindow(appId);
        this.closeStartMenu();
      });
    });
  }

  toggleStartMenu() {
    const isHidden = this.startMenu.classList.contains('hidden');
    if (isHidden) {
      this.startMenu.classList.remove('hidden');
      this.startButton.classList.add('active-pressed');
    } else {
      this.closeStartMenu();
    }
  }

  closeStartMenu() {
    this.startMenu.classList.add('hidden');
    this.startButton.classList.remove('active-pressed');
  }

  initAudioToggles() {
    const toggle = () => {
      const isMuted = audioEngine.toggleMute();
      const text = isMuted ? "Audio: OFF" : "Audio: ON";
      this.soundToggleLabel.textContent = text;
      this.traySoundBtn.textContent = isMuted ? "🔇" : "🔊";
      if (!isMuted) audioEngine.playBeep(1000, 'square', 0.1, 0.05);
    };

    this.soundToggleItem.addEventListener('click', toggle);
    this.traySoundBtn.addEventListener('click', toggle);
  }

  initShutdown() {
    this.shutdownItem.addEventListener('click', () => {
      audioEngine.playClose();
      this.closeStartMenu();
      this.shutdownScreen.classList.remove('hidden');
    });

    this.shutdownScreen.addEventListener('click', () => {
      this.shutdownScreen.classList.add('hidden');
      sessionStorage.removeItem('hasBooted');
      location.reload();
    });
  }

  addTaskTab(appId, title, icon) {
    const tab = document.createElement('div');
    tab.className = 'task-tab outset';
    tab.dataset.appId = appId;
    tab.innerHTML = `<span>${icon}</span> <span>${title}</span>`;

    tab.addEventListener('click', () => {
      audioEngine.playClick();
      const winObj = windowManager.openWindows.get(appId);
      if (!winObj) return;

      if (winObj.isMinimized) {
        winObj.element.classList.remove('minimized');
        winObj.isMinimized = false;
        windowManager.focus(appId);
      } else if (winObj.element.classList.contains('active')) {
        windowManager.minimize(appId);
      } else {
        windowManager.focus(appId);
      }
    });

    this.tasksContainer.appendChild(tab);
    this.setActiveTab(appId);
  }

  setActiveTab(appId) {
    const tabs = this.tasksContainer.querySelectorAll('.task-tab');
    tabs.forEach(tab => {
      if (tab.dataset.appId === appId) {
        tab.classList.add('active');
        tab.classList.remove('outset');
      } else {
        tab.classList.remove('active');
        tab.classList.add('outset');
      }
    });
  }

  setTabMinimized(appId) {
    const tab = this.tasksContainer.querySelector(`.task-tab[data-app-id="${appId}"]`);
    if (tab) {
      tab.classList.remove('active');
      tab.classList.add('outset');
    }
  }

  removeTaskTab(appId) {
    const tab = this.tasksContainer.querySelector(`.task-tab[data-app-id="${appId}"]`);
    if (tab) tab.remove();
  }
}

const taskbarManager = new TaskbarManager();

// ==========================================================================
// 6. CONTEXT MENU & DESKTOP ICON SELECTION LOGIC
// ==========================================================================

class ContextMenuManager {
  constructor() {
    this.contextMenu = document.getElementById('context-menu');
    this.crtOverlay = document.getElementById('crt-overlay');
    this.desktop = document.getElementById('desktop');
    this.init();
  }

  init() {
    this.desktop.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.window')) return;
      e.preventDefault();
      audioEngine.playClick();

      let x = e.clientX;
      let y = e.clientY;

      if (x + 180 > window.innerWidth) x = window.innerWidth - 190;
      if (y + 160 > window.innerHeight) y = window.innerHeight - 170;

      this.contextMenu.style.left = `${x}px`;
      this.contextMenu.style.top = `${y}px`;
      this.contextMenu.classList.remove('hidden');
    });

    document.addEventListener('click', () => {
      this.contextMenu.classList.add('hidden');
    });

    this.contextMenu.addEventListener('click', (e) => {
      const item = e.target.closest('.context-menu-item');
      if (!item) return;

      const action = item.dataset.action;
      if (action === 'arrange') {
        audioEngine.playClick();
        alert("[NAZRITHM OS] Icons aligned to vertical desktop grid.");
      } else if (action === 'refresh') {
        audioEngine.playClick();
        location.reload();
      } else if (action === 'toggle-crt') {
        audioEngine.playClick();
        this.crtOverlay.classList.toggle('hidden');
      } else if (action === 'toggle-audio') {
        taskbarManager.soundToggleItem.click();
      } else if (action === 'sys-info') {
        openAppWindow('skills');
      }
    });
  }
}

new ContextMenuManager();

function setupDesktopIcons() {
  const icons = document.querySelectorAll('.desktop-icon');

  icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      audioEngine.playClick();
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });

    icon.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const appId = icon.dataset.app;
      openAppWindow(appId);
    });
  });

  document.getElementById('desktop').addEventListener('click', (e) => {
    if (!e.target.closest('.desktop-icon') && !e.target.closest('.window')) {
      icons.forEach(i => i.classList.remove('selected'));
    }
  });
}

// ==========================================================================
// 7. APP CONTENT BUILDERS & DISPATCHER
// ==========================================================================

function openAppWindow(appId) {
  switch (appId) {
    case 'about':
      windowManager.open('about', 'About Veer Pratap Singh — Bio', buildAboutContent(), '👤');
      break;
    case 'projects':
      windowManager.open('projects', 'Projects Explorer — /dev/projects', buildProjectsFolderContent(), '📁');
      break;
    case 'creative':
      windowManager.open('creative', '@nazrithm — Creative Studio', buildCreativeContent(), '🎨');
      break;
    case 'skills':
      windowManager.open('skills', 'System Properties — Skills Specs', buildSkillsContent(), '📊');
      break;
    case 'experience':
      windowManager.open('experience', 'sys_log.txt — Journey & Experience', buildExperienceContent(), '📜');
      break;
    case 'certs':
      windowManager.open('certs', 'Certifications & Achievements', buildCertsContent(), '🏆');
      break;
    case 'contact':
      windowManager.open('contact', 'Send Message — Mail v1.0', buildContactContent(), '✉️');
      break;
    case 'resume':
      windowManager.open('resume', 'Resume.pdf — Veer Pratap Singh', buildResumeContent(), '📄');
      break;
    case 'snake':
      windowManager.open('snake', 'Snake.exe — Classic Snake Game', buildSnakeContent(), '🐍');
      break;
    case 'game':
      windowManager.open('game', 'Dodge & Catch — Retro Mini Game', buildGameContent(), '🎮');
      break;
    case 'recycle':
      windowManager.open('recycle', 'Recycle Bin — Deleted Drafts', buildRecycleContent(), '🗑️');
      break;
    default:
      console.warn("Unknown app:", appId);
  }
}

// 1. About Me Window Content
function buildAboutContent() {
  const specs = BIO_DATA.quickFacts.map(fact =>
    `<li><span class="label">${fact.label}:</span> ${fact.value}</li>`
  ).join('');

  return `
    <div class="bio-container">
      <div class="ascii-avatar-box inset">
        <pre>${BIO_DATA.asciiArt}</pre>
        <span style="font-size:10px; margin-top:4px; color:#aaa;">[VEER_AVATAR.BMP]</span>
      </div>
      <div class="bio-details">
        <h1>${PORTFOLIO_CONFIG.developerName}</h1>
        <h2 style="font-size:14px; color:#aaaaaa; margin-top:2px;">${PORTFOLIO_CONFIG.developerTitle}</h2>
        <p style="font-family:var(--font-retro); font-size:15px; color:#fff; margin-top:4px;">"${PORTFOLIO_CONFIG.tagline}"</p>
        <ul class="quick-specs-list" style="margin-top:8px;">
          ${specs}
        </ul>
      </div>
    </div>
    <div class="inset" style="padding: 12px; background: #000; margin-top: 10px;">
      <h3 style="margin-bottom:6px; font-size:16px;">ABOUT & PHILOSOPHY</h3>
      <p style="white-space: pre-line;">${BIO_DATA.bioText}</p>
    </div>
    <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
      <a href="${PORTFOLIO_CONFIG.githubUrl}" target="_blank"><button>💻 GitHub Profile</button></a>
      <a href="${PORTFOLIO_CONFIG.linkedinUrl}" target="_blank"><button>🔗 LinkedIn Profile</button></a>
      <a href="${PORTFOLIO_CONFIG.resumeLink}" download="Veer_Pratap_Singh_Resume.pdf"><button>📄 Download Resume (PDF)</button></a>
      <a href="${PORTFOLIO_CONFIG.instagramStudio}" target="_blank"><button>🎨 @nazrithm Studio</button></a>
    </div>
  `;
}

// 2. Projects Explorer Content
function buildProjectsFolderContent() {
  const projectItems = PROJECTS_DATA.map(proj => `
    <div class="project-file-item" onclick="openProjectDetail('${proj.id}')">
      <div class="project-file-icon">
        <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16l6 6v14H4Z" fill="#222" />
          <path d="M20 6v6h6" />
          <text x="7" y="23" font-size="8" font-weight="bold" fill="#fff" stroke="none">EXE</text>
        </svg>
      </div>
      <span class="project-file-name">${proj.title}</span>
    </div>
  `).join('');

  return `
    <div class="inset" style="padding: 6px; background: #000; margin-bottom: 10px; font-family: var(--font-retro); font-size:15px;">
      <span>Directory: C:\\PORTFOLIO\\PROJECTS\\*.* (${PROJECTS_DATA.length} executable objects)</span>
    </div>
    <div class="projects-folder-grid">
      ${projectItems}
    </div>
    <div style="margin-top:16px; text-align:center; font-family:var(--font-retro); color:#888;">
      [ Double-click any project file above to view detailed specifications & links ]
    </div>
  `;
}

window.openProjectDetail = function (projId) {
  const proj = PROJECTS_DATA.find(p => p.id === projId);
  if (!proj) return;

  const content = `
    <h1>${proj.title}</h1>
    <p style="font-size:14px; font-weight:bold; color:#aaa; margin-bottom:12px;">${proj.tagline}</p>
    
    <div class="inset" style="padding: 10px; background: #000; margin-bottom: 12px;">
      <p><strong>OVERVIEW:</strong> ${proj.shortDesc}</p>
    </div>

    <h2 style="font-size:16px;">KEY HIGHLIGHTS:</h2>
    <ul style="margin-left: 20px; margin-bottom: 14px; font-size: 12.5px;">
      ${proj.features.map(f => `<li style="margin-bottom:4px;">${f}</li>`).join('')}
    </ul>

    <h2 style="font-size:16px;">TECH STACK:</h2>
    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;">
      ${proj.techStack.map(t => `<span class="outset" style="padding:2px 6px; font-family:var(--font-retro); font-size:14px;">${t}</span>`).join('')}
    </div>

    <div style="display:flex; gap:10px; border-top:1px solid #444; padding-top:12px;">
      ${proj.liveUrl !== '#' ? `<a href="${proj.liveUrl}" target="_blank"><button>🚀 Open Live Project</button></a>` : ''}
      <a href="${proj.repoUrl}" target="_blank"><button>💻 GitHub Repository</button></a>
    </div>
  `;

  windowManager.open(`proj-detail-${proj.id}`, `Project: ${proj.title}`, content, '📦');
};

// 3. Creative Studio Window (@nazrithm)
function buildCreativeContent() {
  return `
    <h1>@nazrithm — CREATIVE STUDIO</h1>
    <p style="font-size:13.5px; margin-bottom:12px;">
      Where vision meets viral rhythm. Building brand identity, video reels, graphic design, and brand strategy for creators, cafés, and modern brands.
    </p>

    <div class="inset" style="padding: 12px; background: #000; margin-bottom: 14px;">
      <h2 style="font-size:16px; margin-bottom:6px;">SERVICES & DISCIPLINES</h2>
      <ul style="margin-left:18px;">
        <li style="margin-bottom:6px;"><strong>Cinematic Video Reels:</strong> High-energy edits, color grading, dynamic pacing, and visual storytelling.</li>
        <li style="margin-bottom:6px;"><strong>Portrait & Street Photography:</strong> Raw emotion, neon-lit aesthetics, and cinematic compositions.</li>
        <li style="margin-bottom:6px;"><strong>Brand Identity Design:</strong> Custom logo kits, modern typography, social media templates, and aesthetic guidelines.</li>
      </ul>
    </div>

    <h2 style="font-size:16px; margin-bottom:8px;">EXPLORE PORTFOLIO ON INSTAGRAM</h2>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <a href="${PORTFOLIO_CONFIG.instagramStudio}" target="_blank"><button>📷 @nazrithm (Creative Studio)</button></a>
      <a href="${PORTFOLIO_CONFIG.instagramPersonal}" target="_blank"><button>📸 @ivee.rrr (Personal Photography)</button></a>
    </div>
  `;
}

// 4. System Properties (Skills) Content
function buildSkillsContent() {
  const renderMeters = (list) => list.map(item => {
    const blocks = Math.round(item.level / 10);
    const filled = "█".repeat(blocks);
    const empty = "░".repeat(10 - blocks);
    return `
      <div class="meter-row">
        <div class="meter-label">
          <span>${item.name}</span>
          <span>${item.level}%</span>
        </div>
        <div class="block-meter">[${filled}${empty}]</div>
      </div>
    `;
  }).join('');

  return `
    <div class="tab-container">
      <div class="tab-headers">
        <button class="tab-btn active" onclick="switchSkillTab(this, 'tab-prog')">Programming</button>
        <button class="tab-btn" onclick="switchSkillTab(this, 'tab-front')">Frontend</button>
        <button class="tab-btn" onclick="switchSkillTab(this, 'tab-ai')">Backend & AI</button>
        <button class="tab-btn" onclick="switchSkillTab(this, 'tab-creative')">Creative</button>
      </div>
      <div class="tab-body inset">
        <div id="tab-prog" class="tab-page">
          <h2 style="font-size:16px; margin-bottom:10px;">CORE PROGRAMMING LANGUAGES</h2>
          ${renderMeters(SKILLS_DATA.Programming)}
        </div>
        <div id="tab-front" class="tab-page hidden">
          <h2 style="font-size:16px; margin-bottom:10px;">FRONTEND DEVELOPMENT</h2>
          ${renderMeters(SKILLS_DATA.Frontend)}
        </div>
        <div id="tab-ai" class="tab-page hidden">
          <h2 style="font-size:16px; margin-bottom:10px;">BACKEND & AI FRAMEWORKS</h2>
          ${renderMeters(SKILLS_DATA.Backend_AI)}
        </div>
        <div id="tab-creative" class="tab-page hidden">
          <h2 style="font-size:16px; margin-bottom:10px;">CREATIVE & BRAND DESIGN</h2>
          ${renderMeters(SKILLS_DATA.Creative)}
        </div>
      </div>
    </div>
  `;
}

window.switchSkillTab = function (btnElem, pageId) {
  audioEngine.playClick();
  const parent = btnElem.closest('.tab-container');
  parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  parent.querySelectorAll('.tab-page').forEach(p => p.classList.add('hidden'));

  btnElem.classList.add('active');
  document.getElementById(pageId).classList.remove('hidden');
};

// 5. Experience Log Content
function buildExperienceContent() {
  const entries = EXP_DATA.map(exp => `
    <div class="terminal-entry">
      <div class="terminal-timestamp">[YEAR: ${exp.date}]</div>
      <div class="terminal-title">${exp.role} @ ${exp.company}</div>
      <p style="margin-top:4px;">${exp.desc}</p>
      <div style="font-family:var(--font-retro); color:#aaaaaa; font-size:13.5px; margin-top:4px;">TECH / SCOPE: ${exp.tech}</div>
    </div>
  `).join('');

  return `
    <div class="terminal-view inset">
      <div style="color:#00ff00; margin-bottom:10px; font-family:var(--font-retro); font-size:16px;">
        cat /var/log/veer_pratap_singh_journey.log
      </div>
      ${entries}
      <div style="color:#888; font-family:var(--font-retro); font-size:14px; margin-top:10px;">
        *** END OF LOG RECORD — ALL ENTRIES VERIFIED ***
      </div>
    </div>
  `;
}

// 6. Certifications Window Content
function buildCertsContent() {
  const proList = CERTS_DATA.pro.map(c => `
    <li style="padding:4px 0; border-bottom:1px dashed #333;">
      <strong>${c.icon} ${c.name}</strong> — <span style="color:#aaa;">${c.org}</span>
    </li>
  `).join('');

  const recList = CERTS_DATA.rec.map(c => `
    <li style="padding:4px 0; border-bottom:1px dashed #333;">
      <strong>${c.icon} ${c.name}</strong> — <span style="color:#aaa;">${c.org}</span>
    </li>
  `).join('');

  return `
    <h1>CERTIFICATIONS & RECOGNITION</h1>
    
    <div class="inset" style="padding:10px; background:#000; margin-bottom:12px;">
      <h2 style="font-size:16px; margin-bottom:6px;">PROFESSIONAL CERTIFICATIONS</h2>
      <ul style="list-style:none;">${proList}</ul>
    </div>

    <div class="inset" style="padding:10px; background:#000;">
      <h2 style="font-size:16px; margin-bottom:6px;">RECOGNITION & ACHIEVEMENTS</h2>
      <ul style="list-style:none;">${recList}</ul>
    </div>
  `;
}

// 7. Contact Mail App Content
function buildContactContent() {
  return `
    <form class="mail-form" onsubmit="handleContactSubmit(event)">
      <div class="form-group">
        <label>TO:</label>
        <input type="text" value="Veer Pratap Singh <${PORTFOLIO_CONFIG.contactEmail}>" readonly style="background:#111; color:#aaa;">
      </div>
      <div class="form-group">
        <label>YOUR NAME:</label>
        <input type="text" id="contact-name" placeholder="Enter your full name..." required>
      </div>
      <div class="form-group">
        <label>YOUR EMAIL:</label>
        <input type="email" id="contact-email" placeholder="name@domain.com" required>
      </div>
      <div class="form-group">
        <label>SUBJECT:</label>
        <input type="text" id="contact-subject" placeholder="Project / Collaboration / Hiring" required>
      </div>
      <div class="form-group">
        <label>MESSAGE CONTENT:</label>
        <textarea id="contact-msg" rows="4" placeholder="Tell me about your idea..." required></textarea>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
        <button type="submit">✉️ Send Message</button>
        <button type="reset" onclick="audioEngine.playClick()">Clear Form</button>
      </div>
      <div id="contact-status" class="status-box inset">Status: Ready to transmit message to ${PORTFOLIO_CONFIG.contactEmail}.</div>
    </form>
  `;
}

window.handleContactSubmit = function (e) {
  e.preventDefault();
  audioEngine.playClick();
  const statusElem = document.getElementById('contact-status');
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const msg = document.getElementById('contact-msg').value;

  statusElem.textContent = "Connecting to SMTP mail gateway...";
  statusElem.style.color = "#ffffff";

  setTimeout(() => {
    statusElem.textContent = "Transmitting message payload...";
  }, 400);

  setTimeout(() => {
    statusElem.textContent = "SUCCESS: Message prepared! Opening email client fallback...";
    audioEngine.playOpen();

    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.contactEmail}?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " (" + email + ")")}`;
    window.location.href = mailtoUrl;
  }, 900);
};

// 8. Resume PDF Preview Content
function buildResumeContent() {
  return `
    <div class="pdf-preview-bar outset">
      <span style="font-family:var(--font-retro); font-size:16px;">FILE: VEER_PRATAP_SINGH_RESUME.PDF</span>
      <a href="resume.pdf" download="Veer_Pratap_Singh_Resume.pdf" style="text-decoration:none;">
        <button>📥 Download PDF</button>
      </a>
    </div>
    <div class="document-page">
      <h1>${PORTFOLIO_CONFIG.developerName.toUpperCase()}</h1>
      <p style="margin-bottom:12px; font-weight:bold;">${PORTFOLIO_CONFIG.developerTitle} | ${PORTFOLIO_CONFIG.contactEmail}</p>
      
      <h2 style="border-bottom:1px solid #000; padding-bottom:2px; font-size:14px; margin-top:14px;">EXECUTIVE SUMMARY</h2>
      <p style="margin-top:4px;">B.Tech Computer Science student at Arya College of Engineering, Jaipur. Creative developer building at the intersection of AI systems, web engineering, and brand design.</p>
      
      <h2 style="border-bottom:1px solid #000; padding-bottom:2px; font-size:14px; margin-top:14px;">CORE SKILLS</h2>
      <p style="margin-top:4px;"><strong>Programming:</strong> C, C++, Java, Python, JavaScript (ES6+), HTML5, CSS3</p>
      <p><strong>Frameworks & AI:</strong> React, Next.js, Python, Flask, Whisper AI, CLIP, Librosa, Transformers</p>
      <p><strong>Design & Creative:</strong> Photography, Videography, Lightroom, VN Editor, Photoshop, UI/UX, Founder @nazrithm</p>

      <h2 style="border-bottom:1px solid #000; padding-bottom:2px; font-size:14px; margin-top:14px;">SELECTED HONORS & PROJECTS</h2>
      <p><strong>AI Triage Pro</strong> — 4th Place Winner @ HackNexus 2.0 Hackathon (2024)</p>
      <p><strong>Web Development Intern</strong> — CodSoft (2025)</p>
      <p><strong>C++ Programming Intern</strong> — CodeAlpha (2025)</p>
    </div>
  `;
}

// 9. Classic Snake Game Content & Logic (Growing Snake)
function buildSnakeContent() {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-family:var(--font-retro); font-size:16px;">
      <span>SNAKE.EXE — EAT FOOD TO GROW BIGGER!</span>
      <span>SCORE: <strong id="snake-score">0</strong> | HIGH: <strong id="snake-high">0</strong></span>
    </div>
    <div class="inset" style="background:#000; display:flex; justify-content:center; align-items:center; padding:4px;">
      <canvas id="snake-canvas" width="500" height="340" style="background:#000; border:1px solid #444;"></canvas>
    </div>
    <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
      <button onclick="startSnakeGame()">🐍 Start / Restart Snake</button>
      <span style="font-family:var(--font-retro); font-size:14px; color:#aaa;">CONTROLS: Arrow Keys or W/A/S/D</span>
    </div>
  `;
}

let snakeGameInterval = null;
function initSnakeGame() {
  setTimeout(() => startSnakeGame(), 200);
}

function startSnakeGame() {
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (snakeGameInterval) clearInterval(snakeGameInterval);

  const gridSize = 20; // 20px grid
  const cols = canvas.width / gridSize; // 25 columns
  const rows = canvas.height / gridSize; // 17 rows

  let score = 0;
  let highScore = localStorage.getItem('snake_highscore') || 0;
  const highElem = document.getElementById('snake-high');
  const scoreElem = document.getElementById('snake-score');
  if (highElem) highElem.textContent = highScore;

  // Initial Snake body: array of segments {x, y}
  let snake = [
    { x: 10, y: 8 },
    { x: 9, y: 8 },
    { x: 8, y: 8 }
  ];

  let dir = { x: 1, y: 0 }; // Moving right
  let nextDir = { x: 1, y: 0 }; // Buffer next direction to prevent rapid self-collision

  // Generate food position
  function spawnFood() {
    let valid = false;
    let foodPos = { x: 0, y: 0 };
    while (!valid) {
      foodPos.x = Math.floor(Math.random() * cols);
      foodPos.y = Math.floor(Math.random() * rows);
      valid = !snake.some(segment => segment.x === foodPos.x && segment.y === foodPos.y);
    }
    return foodPos;
  }

  let food = spawnFood();

  // Keyboard Control Listener
  const handleKey = (e) => {
    const key = e.key;
    if ((key === 'ArrowUp' || key === 'w' || key === 'W') && dir.y !== 1) {
      nextDir = { x: 0, y: -1 };
    } else if ((key === 'ArrowDown' || key === 's' || key === 'S') && dir.y !== -1) {
      nextDir = { x: 0, y: 1 };
    } else if ((key === 'ArrowLeft' || key === 'a' || key === 'A') && dir.x !== 1) {
      nextDir = { x: -1, y: 0 };
    } else if ((key === 'ArrowRight' || key === 'd' || key === 'D') && dir.x !== -1) {
      nextDir = { x: 1, y: 0 };
    }
  };

  window.removeEventListener('keydown', handleKey);
  window.addEventListener('keydown', handleKey);

  // Main Snake Game Loop
  snakeGameInterval = setInterval(() => {
    dir = nextDir;

    // Calculate new head position
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    // Check Wall Collision
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      audioEngine.playError();
      clearInterval(snakeGameInterval);
      drawGameOver(ctx, canvas, "GAME OVER! CRASHED INTO WALL!");
      return;
    }

    // Check Self-Collision
    if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
      audioEngine.playError();
      clearInterval(snakeGameInterval);
      drawGameOver(ctx, canvas, "GAME OVER! BIT YOUR OWN TAIL!");
      return;
    }

    // Add new head segment to front
    snake.unshift(head);

    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      audioEngine.playBeep(1000, 'square', 0.06, 0.05);
      if (scoreElem) scoreElem.textContent = score;

      if (score > highScore) {
        highScore = score;
        localStorage.setItem('snake_highscore', highScore);
        if (highElem) highElem.textContent = highScore;
      }

      // Spawn new food (Snake grows because we DON'T pop tail!)
      food = spawnFood();
    } else {
      // Normal move: remove tail segment
      snake.pop();
    }

    // Render Frame
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Subtle Retro Grid Lines
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 1;
    for (let c = 0; c < cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * gridSize, 0);
      ctx.lineTo(c * gridSize, canvas.height);
      ctx.stroke();
    }
    for (let r = 0; r < rows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * gridSize);
      ctx.lineTo(canvas.width, r * gridSize);
      ctx.stroke();
    }

    // Draw Food (Pixel block with cross)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);
    ctx.fillStyle = "#000000";
    ctx.font = "12px monospace";
    ctx.fillText("★", food.x * gridSize + 4, food.y * gridSize + 14);

    // Draw Snake Segments (Head is distinct, body segments outlined)
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Snake Head
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2);
        ctx.fillStyle = "#000000";
        // Eye pixels
        ctx.fillRect(segment.x * gridSize + 5, segment.y * gridSize + 5, 3, 3);
        ctx.fillRect(segment.x * gridSize + 12, segment.y * gridSize + 5, 3, 3);
      } else {
        // Body Segments
        ctx.fillStyle = "#e5e5e5";
        ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(segment.x * gridSize + 2, segment.y * gridSize + 2, gridSize - 4, gridSize - 4);
      }
    });

  }, 120); // Speed step
}

function drawGameOver(ctx, canvas, msg) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.font = "20px VT323, monospace";
  ctx.textAlign = "center";
  ctx.fillText(msg, canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = "16px VT323, monospace";
  ctx.fillText("Press 'Start / Restart Snake' button to play again!", canvas.width / 2, canvas.height / 2 + 20);
  ctx.textAlign = "left";
}

// 10. Dodge Game (Existing Mini Game)
function buildGameContent() {
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-family:var(--font-retro); font-size:16px;">
      <span>DODGE BUGS, CATCH STARS! (DEV SURVIVAL GAME)</span>
      <span>SCORE: <strong id="game-score">0</strong> | HIGH: <strong id="game-high">0</strong></span>
    </div>
    <div class="inset" style="background:#000; display:flex; justify-content:center; align-items:center; padding:4px;">
      <canvas id="dodge-canvas" width="600" height="340" style="background:#000; border:1px solid #444;"></canvas>
    </div>
    <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
      <button onclick="startDodgeGame()">🎮 Start / Restart Game</button>
      <span style="font-family:var(--font-retro); font-size:14px; color:#aaa;">CONTROLS: ← → Left/Right Arrows or A/D Keys</span>
    </div>
  `;
}

let gameInterval = null;
function initDodgeGame() {
  setTimeout(() => startDodgeGame(), 200);
}

function startDodgeGame() {
  const canvas = document.getElementById('dodge-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (gameInterval) clearInterval(gameInterval);

  let score = 0;
  let highScore = localStorage.getItem('dodge_highscore') || 0;
  document.getElementById('game-high').textContent = highScore;

  let player = { x: 280, y: 300, w: 40, h: 20, speed: 6 };
  let items = [];
  let keys = {};

  const handleKeyDown = (e) => { keys[e.key] = true; };
  const handleKeyUp = (e) => { keys[e.key] = false; };

  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  function spawnItem() {
    const isStar = Math.random() > 0.4;
    items.push({
      x: Math.random() * (canvas.width - 20),
      y: -20,
      w: 16,
      h: 16,
      speed: 2 + Math.random() * 3,
      isStar: isStar
    });
  }

  let spawnCounter = 0;

  gameInterval = setInterval(() => {
    if ((keys['ArrowLeft'] || keys['a'] || keys['A']) && player.x > 0) player.x -= player.speed;
    if ((keys['ArrowRight'] || keys['d'] || keys['D']) && player.x < canvas.width - player.w) player.x += player.speed;

    spawnCounter++;
    if (spawnCounter % 20 === 0) spawnItem();

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#000000";
    ctx.font = "12px monospace";
    ctx.fillText("DEV", player.x + 8, player.y + 14);

    for (let i = items.length - 1; i >= 0; i--) {
      let item = items[i];
      item.y += item.speed;

      if (item.isStar) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "16px monospace";
        ctx.fillText("★", item.x, item.y);
      } else {
        ctx.fillStyle = "#888888";
        ctx.font = "16px monospace";
        ctx.fillText("✕", item.x, item.y);
      }

      if (
        item.x < player.x + player.w &&
        item.x + item.w > player.x &&
        item.y < player.y + player.h &&
        item.y + item.h > player.y
      ) {
        if (item.isStar) {
          score += 10;
          audioEngine.playBeep(900, 'square', 0.05, 0.04);
          if (score > highScore) {
            highScore = score;
            localStorage.setItem('dodge_highscore', highScore);
          }
        } else {
          audioEngine.playError();
          clearInterval(gameInterval);
          ctx.fillStyle = "#ffffff";
          ctx.font = "20px VT323, monospace";
          ctx.fillText("GAME OVER! BUG CAUGHT YOUR CODE!", 140, 170);
          return;
        }
        items.splice(i, 1);
        continue;
      }

      if (item.y > canvas.height) {
        items.splice(i, 1);
      }
    }

    const scoreElem = document.getElementById('game-score');
    const highElem = document.getElementById('game-high');
    if (scoreElem) scoreElem.textContent = score;
    if (highElem) highElem.textContent = highScore;
  }, 1000 / 60);
}

// 11. Recycle Bin Content
function buildRecycleContent() {
  return `
    <div class="inset" style="padding:10px; background:#000;">
      <h1>RECYCLE BIN (DELETED DRAFTS & NOTES)</h1>
      <p style="font-size:12px; color:#aaa;">Items in the Recycle Bin will remain until you empty it.</p>
      
      <div style="margin-top:14px;">
        <h2 style="font-size:16px;">DRAFT_01.TXT:</h2>
        <p style="font-family:monospace; font-size:11.5px; color:#aaa;">
          "Should we change the retro theme colors?" -> REJECTED: Pure black & white / grayscale design system is non-negotiable!
        </p>

        <h2 style="font-size:16px;">DRAFT_02.TXT:</h2>
        <p style="font-family:monospace; font-size:11.5px; color:#aaa;">
          "Early prototype draft for HackNexus 2.0 AI Triage Pro weighted algorithm..."
        </p>
      </div>

      <div style="margin-top:20px;">
        <button onclick="audioEngine.playError(); alert('Recycle Bin is already clean!');">Empty Recycle Bin</button>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. SYSTEM INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  setupDesktopIcons();

  const boot = new BootController(() => {
    openAppWindow('about');
  });

  boot.start();
});
