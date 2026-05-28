const levels = {
  starter: "小学低年级",
  primary: "小学高年级",
  middle: "初中",
};

const modes = {
  keys: {
    label: "基础按键",
    starter: ["asdf jkl;", "qwer uiop", "zxcv bnm,", "12345 67890"],
    primary: ["asdf qwer jkl; uiop", "cat dog sun moon", "left hand right hand", "12 34 56 78 90"],
    middle: ["qaz wsx edc rfv tgb", "yhn ujm ik, ol. p;/", "Shift Enter Space Tab", "A1 B2 C3 D4 E5"],
  },
  home: {
    label: "主键盘区",
    starter: ["aaa sss ddd fff jjj kkk lll ;;;", "as as df df jk jk l; l;", "sad lad fall ask"],
    primary: ["fast salad flask skill", "ask dad fall jazz", "jill has a small desk", "all kids can ask"],
    middle: ["a calm skill starts at home row", "fall ask skill salad flask", "jazz class has fast drills"],
  },
  words: {
    label: "单词",
    starter: ["cat dog sun book pen", "red blue green yellow", "one two three four five", "desk hand key map"],
    primary: ["school library science keyboard practice", "student teacher lesson answer", "planet river mountain energy", "music art sport history"],
    middle: ["accurate rhythm keyboard challenge", "project method system memory", "future design network program", "creative student digital notebook"],
  },
  sentences: {
    label: "短句",
    starter: ["i can type today", "my bag is on the desk", "we read books after class", "good habits grow every day"],
    primary: ["practice makes each key feel familiar", "clear eyes steady hands quiet mind", "typing well helps me learn faster", "every small step counts today"],
    middle: ["accuracy comes first and speed follows naturally", "digital tools become useful when hands stay relaxed", "a careful rhythm keeps long sentences tidy", "students compare ideas and write them clearly"],
  },
  symbols: {
    label: "符号",
    starter: ["1+2=3", "5-2=3", "a,b.c", "x/y=2"],
    primary: ["name: lily", "score: 98%", "a+b=c", "open(file).save()"],
    middle: ["email: student@example.com", "price = 12.50", "if (x >= 10) { y++; }", "path/to/class-7/report.txt"],
  },
};

const keyboardRows = [
  [
    ["`", "`", "", "", "~"],
    ["1", "1", "", "", "!"],
    ["2", "2", "", "", "@"],
    ["3", "3", "", "", "#"],
    ["4", "4", "", "", "$"],
    ["5", "5", "", "", "%"],
    ["6", "6", "", "", "^"],
    ["7", "7", "", "", "&"],
    ["8", "8", "", "", "*"],
    ["9", "9", "", "", "("],
    ["0", "0", "", "", ")"],
    ["-", "-", "", "", "_"],
    ["=", "=", "", "", "+"],
    ["Back", "backspace", "wide", "删除"],
  ],
  [
    ["Tab", "tab", "wide", "制表"],
    ["Q", "q"],
    ["W", "w"],
    ["E", "e"],
    ["R", "r"],
    ["T", "t"],
    ["Y", "y"],
    ["U", "u"],
    ["I", "i"],
    ["O", "o"],
    ["P", "p"],
    ["[", "[", "", "", "{"],
    ["]", "]", "", "", "}"],
    ["\\", "\\", "", "", "|"],
  ],
  [
    ["Caps", "capslock", "wide", "大小写"],
    ["A", "a"],
    ["S", "s"],
    ["D", "d"],
    ["F", "f"],
    ["G", "g"],
    ["H", "h"],
    ["J", "j"],
    ["K", "k"],
    ["L", "l"],
    [";", ";", "", "", ":"],
    ["'", "'", "", "", "\""],
    ["Enter", "enter", "wide", "回车/确认"],
  ],
  [
    ["Shift", "shift", "wide", "中/英"],
    ["Z", "z"],
    ["X", "x"],
    ["C", "c"],
    ["V", "v"],
    ["B", "b"],
    ["N", "n"],
    ["M", "m"],
    [",", ",", "", "", "<"],
    [".", ".", "", "", ">"],
    ["/", "/", "", "", "?"],
    ["Shift", "shift-right", "wide", "中/英"],
  ],
  [
    ["Space", "space", "spacebar", "空格"],
  ],
];

const shiftedKeys = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  "$": "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  "_": "-",
  "+": "=",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
};

const fingerByKey = {
  "`": "左小指",
  "1": "左小指",
  q: "左小指",
  a: "左小指",
  z: "左小指",
  "2": "左无名指",
  w: "左无名指",
  s: "左无名指",
  x: "左无名指",
  "3": "左中指",
  e: "左中指",
  d: "左中指",
  c: "左中指",
  "4": "左食指",
  "5": "左食指",
  r: "左食指",
  t: "左食指",
  f: "左食指",
  g: "左食指",
  v: "左食指",
  b: "左食指",
  "6": "右食指",
  "7": "右食指",
  y: "右食指",
  u: "右食指",
  h: "右食指",
  j: "右食指",
  n: "右食指",
  m: "右食指",
  "8": "右中指",
  i: "右中指",
  k: "右中指",
  ",": "右中指",
  "9": "右无名指",
  o: "右无名指",
  l: "右无名指",
  ".": "右无名指",
  "0": "右小指",
  "-": "右小指",
  "=": "右小指",
  p: "右小指",
  "[": "右小指",
  "]": "右小指",
  "\\": "右小指",
  ";": "右小指",
  "'": "右小指",
  "/": "右小指",
  space: "拇指",
};

const zoneByFinger = {
  左小指: "zone-left-pinky",
  左无名指: "zone-left-ring",
  左中指: "zone-left-middle",
  左食指: "zone-left-index",
  右食指: "zone-right-index",
  右中指: "zone-right-middle",
  右无名指: "zone-right-ring",
  右小指: "zone-right-pinky",
  拇指: "zone-right-index",
};

const imeSwitchKeys = ["shift", "shift-right"];

const elements = {
  levelSelect: document.querySelector("#levelSelect"),
  durationSelect: document.querySelector("#durationSelect"),
  strictMode: document.querySelector("#strictMode"),
  modeButtons: Array.from(document.querySelectorAll(".mode-button")),
  restartBtn: document.querySelector("#restartBtn"),
  pauseBtn: document.querySelector("#pauseBtn"),
  pauseIcon: document.querySelector("#pauseIcon"),
  pauseText: document.querySelector("#pauseText"),
  nextLessonBtn: document.querySelector("#nextLessonBtn"),
  prompt: document.querySelector("#prompt"),
  input: document.querySelector("#typingInput"),
  keyboard: document.querySelector("#keyboard"),
  modeName: document.querySelector("#modeName"),
  levelName: document.querySelector("#levelName"),
  timeLeft: document.querySelector("#timeLeft"),
  timeBar: document.querySelector("#timeBar"),
  feedback: document.querySelector("#feedback"),
  accuracy: document.querySelector("#accuracy"),
  speed: document.querySelector("#speed"),
  streak: document.querySelector("#streak"),
  mistakes: document.querySelector("#mistakes"),
  nextKey: document.querySelector("#nextKey"),
  fingerHint: document.querySelector("#fingerHint"),
  progressText: document.querySelector("#progressText"),
  troubleKeys: document.querySelector("#troubleKeys"),
};

const state = {
  mode: "keys",
  level: "starter",
  target: "",
  started: false,
  completed: false,
  paused: false,
  startTime: 0,
  pausedAt: 0,
  pausedTotal: 0,
  timerId: null,
  duration: 120,
  attempts: 0,
  correctAttempts: 0,
  streak: 0,
  bestStreak: 0,
  mistakes: 0,
  trouble: {},
  composing: false,
  imeWarning: false,
};

function buildKeyboard() {
  elements.keyboard.innerHTML = "";

  keyboardRows.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach(([label, key, size, subLabel, altLabel]) => {
      const keyElement = document.createElement("div");
      const finger = fingerByKey[key] || fingerByKey[baseKey(key)] || "";
      keyElement.className = ["key", size || "", zoneByFinger[finger] || ""].filter(Boolean).join(" ");
      keyElement.dataset.key = key;
      keyElement.setAttribute("aria-label", subLabel ? `${label}，${subLabel}` : label);

      if (altLabel) {
        keyElement.classList.add("symbol-key");
        keyElement.append(createKeyLabel(altLabel, "key-alt"), createKeyLabel(label, "key-main"));
      } else if (subLabel) {
        keyElement.classList.add("function-key");
        keyElement.append(createKeyLabel(label, "key-main"), createKeyLabel(subLabel, "key-sub"));
      } else {
        keyElement.append(createKeyLabel(label, "key-main"));
      }

      rowElement.appendChild(keyElement);
    });

    elements.keyboard.appendChild(rowElement);
  });
}

function createKeyLabel(text, className) {
  const labelElement = document.createElement("span");
  labelElement.className = className;
  labelElement.textContent = text;
  return labelElement;
}

function chooseTarget() {
  const bank = modes[state.mode][state.level];
  const index = Math.floor(Math.random() * bank.length);
  let target = bank[index].toLowerCase();

  if (state.mode === "keys" || state.mode === "home") {
    const parts = target.split(" ");
    const repeated = [];
    while (repeated.join(" ").length < targetLength()) {
      repeated.push(parts[repeated.length % parts.length]);
    }
    target = repeated.join(" ");
  }

  return target.replace(/\s+/g, " ").trim();
}

function targetLength() {
  if (state.level === "starter") return 42;
  if (state.level === "primary") return 58;
  return 74;
}

function resetLesson(keepMode = true) {
  if (!keepMode) {
    state.mode = "keys";
  }

  window.clearInterval(state.timerId);
  state.level = elements.levelSelect.value;
  state.duration = Number(elements.durationSelect.value);
  state.target = chooseTarget();
  state.started = false;
  state.completed = false;
  state.paused = false;
  state.startTime = 0;
  state.pausedAt = 0;
  state.pausedTotal = 0;
  state.attempts = 0;
  state.correctAttempts = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.mistakes = 0;
  state.trouble = {};
  state.composing = false;
  state.imeWarning = false;
  state.timerId = null;

  elements.input.value = "";
  elements.input.disabled = false;
  elements.modeName.textContent = modes[state.mode].label;
  elements.levelName.textContent = levels[state.level];
  elements.pauseIcon.textContent = "Ⅱ";
  elements.pauseText.textContent = "暂停";
  elements.pauseBtn.title = "暂停";
  setFeedback("准备", "");
  renderPrompt();
  updateStats();
  updateTimer();
  highlightNextKey();
  elements.input.focus();
}

function renderPrompt() {
  const typed = normalizedInput();
  const fragment = document.createDocumentFragment();
  elements.prompt.innerHTML = "";

  for (let i = 0; i < state.target.length; i += 1) {
    const char = state.target[i];
    const span = document.createElement("span");
    span.className = "prompt-char";
    span.textContent = char === " " ? "空格" : char;

    if (char === " ") {
      span.classList.add("space");
      span.title = "空格";
    }

    if (i < typed.length) {
      span.classList.add(typed[i] === char ? "correct" : "wrong");
    } else if (i === typed.length) {
      span.classList.add("current");
    }

    fragment.appendChild(span);
  }

  elements.prompt.appendChild(fragment);
}

function normalizedInput() {
  return cleanInputValue(elements.input.value).slice(0, state.target.length);
}

function handleKeydown(event) {
  if (state.completed || state.paused) return;

  if (state.composing || event.isComposing || event.key === "Process" || event.keyCode === 229) {
    showImeWarning();
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    insertText(" ");
    return;
  }

  if (event.key.length !== 1 || event.metaKey || event.ctrlKey || event.altKey) return;
  if (hasNonEnglishInput(event.key)) {
    event.preventDefault();
    showImeWarning();
    return;
  }

  state.imeWarning = false;
  const typed = normalizedPrintable(event.key);
  const expected = state.target[normalizedInput().length] || "";
  const matches = typed === expected;

  state.attempts += 1;

  if (matches) {
    state.correctAttempts += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  } else {
    state.streak = 0;
    state.mistakes += 1;
    const key = expected || typed;
    state.trouble[key] = (state.trouble[key] || 0) + 1;
    flashKey(typed, "miss");
    setFeedback(`应按 ${displayChar(expected)}`, "warn");

    if (elements.strictMode.checked) {
      event.preventDefault();
      updateStats();
      highlightNextKey();
    }
  }
}

function handleInput() {
  if (state.paused) return;

  if (state.composing) {
    showImeWarning();
    return;
  }

  const hadNonEnglish = hasNonEnglishInput(elements.input.value);
  const cleanValue = normalizedInput();
  if (elements.input.value !== cleanValue) {
    if (hadNonEnglish) {
      showImeWarning();
    }
    elements.input.value = cleanValue;
  }

  if (!hadNonEnglish) {
    state.imeWarning = false;
  }

  if (!state.started && cleanValue.length > 0) startTimer();

  renderPrompt();
  updateStats();
  highlightNextKey();

  const typed = normalizedInput();
  if (!state.completed && typed.length >= state.target.length) {
    completeLesson();
    return;
  }

  if (!state.completed && typed.length > 0) {
    const lastIndex = Math.max(0, typed.length - 1);
    if (hadNonEnglish) {
      showImeWarning();
    } else if (typed[lastIndex] === state.target[lastIndex]) {
      setFeedback("保持节奏", "good");
      flashKey(typed[lastIndex], "hit");
    } else {
      setFeedback(`应按 ${displayChar(state.target[lastIndex])}`, "warn");
    }
  }
}

function normalizedPrintable(key) {
  if (key === " ") return " ";
  return key.length === 1 ? key.toLowerCase() : key;
}

function cleanInputValue(value) {
  return value
    .replace(/\n/g, " ")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase();
}

function hasNonEnglishInput(value) {
  return /[^\x00-\x7F]/.test(value);
}

function showImeWarning() {
  state.imeWarning = true;
  setFeedback("请按 Shift 切换到英文输入法再输入", "ime");
  highlightImeSwitchKey();
}

function handleCompositionStart() {
  if (state.completed || state.paused) return;
  state.composing = true;
  showImeWarning();
}

function handleCompositionEnd() {
  state.composing = false;
  if (hasNonEnglishInput(elements.input.value)) {
    showImeWarning();
  }
  handleInput();
}

function insertText(text) {
  const input = elements.input;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const nextValue = `${input.value.slice(0, start)}${text}${input.value.slice(end)}`;
  input.value = nextValue.slice(0, state.target.length);
  input.selectionStart = input.selectionEnd = Math.min(start + text.length, input.value.length);
  handleInput();
}

function startTimer() {
  state.started = true;
  state.startTime = Date.now();
  state.timerId = window.setInterval(updateTimer, 250);
  updateTimer();
}

function updateTimer() {
  const elapsed = state.started ? elapsedSeconds() : 0;
  const remaining = Math.max(0, state.duration - elapsed);
  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);
  const progress = state.duration === 0 ? 0 : (remaining / state.duration) * 100;

  elements.timeLeft.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  elements.timeBar.style.width = `${progress}%`;

  if (remaining <= 0 && state.started && !state.completed) {
    completeLesson(true);
  }
}

function elapsedSeconds() {
  if (!state.started) return 0;
  const now = state.paused ? state.pausedAt : Date.now();
  return Math.max(0, (now - state.startTime - state.pausedTotal) / 1000);
}

function updateStats() {
  const typed = normalizedInput();
  const correctChars = countCorrectChars(typed);
  const elapsedMinutes = Math.max(elapsedSeconds() / 60, 1 / 60);
  const speed = Math.round(correctChars / elapsedMinutes);
  const textAccuracy = typed.length === 0 ? 100 : Math.round((correctChars / typed.length) * 100);
  const attemptAccuracy = state.attempts === 0 ? textAccuracy : Math.round((state.correctAttempts / state.attempts) * 100);
  const accuracy = elements.strictMode.checked ? attemptAccuracy : textAccuracy;

  elements.accuracy.textContent = `${accuracy}%`;
  elements.speed.textContent = String(speed);
  elements.streak.textContent = String(state.bestStreak);
  elements.mistakes.textContent = String(state.mistakes);
  elements.progressText.textContent = `${Math.min(typed.length, state.target.length)} / ${state.target.length}`;
  elements.troubleKeys.textContent = troubleText();
}

function countCorrectChars(value) {
  let count = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] === state.target[i]) count += 1;
  }
  return count;
}

function highlightNextKey() {
  if (state.imeWarning) {
    highlightImeSwitchKey();
    return;
  }

  const typed = normalizedInput();
  const char = state.target[typed.length] || "";
  const next = baseKey(char);

  elements.nextKey.textContent = displayChar(char);
  elements.fingerHint.textContent = fingerByKey[next] || "看键位";

  document.querySelectorAll(".key").forEach((keyElement) => {
    keyElement.classList.toggle("next", keyElement.dataset.key === next);
    keyElement.classList.remove("ime-switch");
  });
}

function highlightImeSwitchKey() {
  elements.nextKey.textContent = "Shift";
  elements.fingerHint.textContent = "切换英文";

  document.querySelectorAll(".key").forEach((keyElement) => {
    const isSwitchKey = imeSwitchKeys.includes(keyElement.dataset.key);
    keyElement.classList.toggle("next", isSwitchKey);
    keyElement.classList.toggle("ime-switch", isSwitchKey);
  });
}

function flashKey(char, className) {
  const keyElement = document.querySelector(`.key[data-key="${cssEscape(baseKey(char))}"]`);
  if (!keyElement) return;
  keyElement.classList.add(className);
  window.setTimeout(() => keyElement.classList.remove(className), 180);
}

function baseKey(char) {
  if (char === " ") return "space";
  const lower = String(char || "").toLowerCase();
  return shiftedKeys[char] || shiftedKeys[lower] || lower;
}

function displayChar(char) {
  if (!char) return "完成";
  if (char === " ") return "空格";
  return char.toUpperCase();
}

function troubleText() {
  const entries = Object.entries(state.trouble).sort((a, b) => b[1] - a[1]);
  if (!entries.length) return "暂无";
  return entries.slice(0, 3).map(([key]) => displayChar(key)).join(" ");
}

function setFeedback(text, tone) {
  elements.feedback.textContent = text;
  elements.feedback.className = ["feedback", tone].filter(Boolean).join(" ");
  elements.input.classList.toggle("ime-warning", tone === "ime");
}

function completeLesson(byTime = false) {
  state.completed = true;
  window.clearInterval(state.timerId);
  elements.input.disabled = true;
  renderPrompt();
  updateStats();
  highlightNextKey();
  setFeedback(byTime ? "时间到" : "完成本组", byTime ? "warn" : "good");
}

function togglePause() {
  if (!state.started || state.completed) {
    elements.input.focus();
    return;
  }

  state.paused = !state.paused;

  if (state.paused) {
    state.pausedAt = Date.now();
    window.clearInterval(state.timerId);
    elements.input.disabled = true;
    elements.pauseIcon.textContent = "▶";
    elements.pauseText.textContent = "继续";
    elements.pauseBtn.title = "继续";
    setFeedback("暂停中", "");
  } else {
    state.pausedTotal += Date.now() - state.pausedAt;
    state.timerId = window.setInterval(updateTimer, 250);
    elements.input.disabled = false;
    elements.pauseIcon.textContent = "Ⅱ";
    elements.pauseText.textContent = "暂停";
    elements.pauseBtn.title = "暂停";
    setFeedback("继续", "good");
    elements.input.focus();
  }
}

function cssEscape(value) {
  if (window.CSS && CSS.escape) return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function bindEvents() {
  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      elements.modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      resetLesson();
    });
  });

  elements.levelSelect.addEventListener("change", () => resetLesson());
  elements.durationSelect.addEventListener("change", () => resetLesson());
  elements.restartBtn.addEventListener("click", () => resetLesson());
  elements.nextLessonBtn.addEventListener("click", () => resetLesson());
  elements.pauseBtn.addEventListener("click", togglePause);
  elements.input.addEventListener("compositionstart", handleCompositionStart);
  elements.input.addEventListener("compositionend", handleCompositionEnd);
  elements.input.addEventListener("keydown", handleKeydown);
  elements.input.addEventListener("input", handleInput);
}

buildKeyboard();
bindEvents();
resetLesson();
