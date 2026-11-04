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

modes.chinese = {
  label: "中文练习",
  starter: ["我们一起学习打字。", "今天阳光很好，小鸟在唱歌。", "我爱读书，也爱运动。"],
  primary: ["每天认真练习，慢慢提高打字的速度。", "校园里绿树成荫，同学们在操场上快乐地活动。", "读一本好书，就像和一位朋友交流。"],
  middle: ["学习需要耐心与坚持，准确输入比一味追求速度更重要。", "清晨的阳光穿过树叶，给安静的校园披上一层温暖的色彩。", "善于观察生活，认真思考问题，才能发现平凡事物中的美。"],
};

// Sentence-aligned readings preserve the intended pronunciation of polyphonic characters.
const chineseReadings = {
  starter: [
    "wǒ men yì qǐ xué xí dǎ zì 。",
    "jīn tiān yáng guāng hěn hǎo ， xiǎo niǎo zài chàng gē 。",
    "wǒ ài dú shū ， yě ài yùn dòng 。",
  ],
  primary: [
    "měi tiān rèn zhēn liàn xí ， màn màn tí gāo dǎ zì de sù dù 。",
    "xiào yuán lǐ lǜ shù chéng yīn ， tóng xué men zài cāo chǎng shàng kuài lè de huó dòng 。",
    "dú yì běn hǎo shū ， jiù xiàng hé yí wèi péng you jiāo liú 。",
  ],
  middle: [
    "xué xí xū yào nài xīn yǔ jiān chí ， zhǔn què shū rù bǐ yí wèi zhuī qiú sù dù gèng zhòng yào 。",
    "qīng chén de yáng guāng chuān guò shù yè ， gěi ān jìng de xiào yuán pī shàng yì céng wēn nuǎn de sè cǎi 。",
    "shàn yú guān chá shēng huó ， rèn zhēn sī kǎo wèn tí ， cái néng fā xiàn píng fán shì wù zhōng de měi 。",
  ],
};

const extraChineseLessons = {
  starter: [
    ["小猫在门口晒太阳。", "xiǎo māo zài mén kǒu shài tài yáng 。"],
    ["妈妈带我去公园。", "mā ma dài wǒ qù gōng yuán 。"],
    ["雨后的小草绿绿的。", "yǔ hòu de xiǎo cǎo lǜ lǜ de 。"],
    ["我把书包放在桌上。", "wǒ bǎ shū bāo fàng zài zhuō shàng 。"],
    ["早上好，老师好！", "zǎo shàng hǎo ， lǎo shī hǎo ！"],
    ["你喜欢什么颜色？", "nǐ xǐ huan shén me yán sè ？"],
    ["我们排好队去上课。", "wǒ men pái hǎo duì qù shàng kè 。"],
    ["小鱼在水里游来游去。", "xiǎo yú zài shuǐ lǐ yóu lái yóu qù 。"],
    ["每天早睡早起身体好。", "měi tiān zǎo shuì zǎo qǐ shēn tǐ hǎo 。"],
  ],
  primary: [
    ["春风吹过田野，花儿露出笑脸。", "chūn fēng chuī guò tián yě ， huā ér lù chū xiào liǎn 。"],
    ["遇到不懂的问题，可以请教老师。", "yù dào bù dǒng de wèn tí ， kě yǐ qǐng jiào lǎo shī 。"],
    ["保护环境，从节约每一滴水开始。", "bǎo hù huán jìng ， cóng jié yuē měi yì dī shuǐ kāi shǐ 。"],
    ["下课以后，我们一起整理教室。", "xià kè yǐ hòu ， wǒ men yì qǐ zhěng lǐ jiào shì 。"],
    ["夜空中有许多星星，你看见了吗？", "yè kōng zhōng yǒu xǔ duō xīng xing ， nǐ kàn jiàn le ma ？"],
    ["认真观察，才能发现更多有趣的事。", "rèn zhēn guān chá ， cái néng fā xiàn gèng duō yǒu qù de shì 。"],
    ["周末，我和家人一起做了一顿午饭。", "zhōu mò ， wǒ hé jiā rén yì qǐ zuò le yí dùn wǔ fàn 。"],
    ["秋天到了，金黄的树叶轻轻落下。", "qiū tiān dào le ， jīn huáng de shù yè qīng qīng luò xià 。"],
    ["答应别人的事情，要努力做到。", "dā ying bié rén de shì qing ， yào nǔ lì zuò dào 。"],
  ],
  middle: [
    ["面对困难时，先分析原因，再寻找合适的解决方法。", "miàn duì kùn nan shí ， xiān fēn xī yuán yīn ， zài xún zhǎo hé shì de jiě jué fāng fǎ 。"],
    ["合理安排学习与休息的时间，有助于保持良好的状态。", "hé lǐ ān pái xué xí yǔ xiū xi de shí jiān ， yǒu zhù yú bǎo chí liáng hǎo de zhuàng tài 。"],
    ["阅读让我们了解不同的世界，也帮助我们认识自己。", "yuè dú ràng wǒ men liǎo jiě bù tóng de shì jiè ， yě bāng zhù wǒ men rèn shi zì jǐ 。"],
    ["网络信息丰富多样，我们需要学会判断与选择。", "wǎng luò xìn xī fēng fù duō yàng ， wǒ men xū yào xué huì pàn duàn yǔ xuǎn zé 。"],
    ["团队合作需要倾听他人的意见，也需要清楚地表达想法。", "tuán duì hé zuò xū yào qīng tīng tā rén de yì jiàn ， yě xū yào qīng chu de biǎo dá xiǎng fǎ 。"],
    ["记录每天的进步，可以让坚持变得更有方向。", "jì lù měi tiān de jìn bù ， kě yǐ ràng jiān chí biàn de gèng yǒu fāng xiàng 。"],
    ["科学探索始于好奇，也离不开严谨的观察与实验。", "kē xué tàn suǒ shǐ yú hào qí ， yě lí bù kāi yán jǐn de guān chá yǔ shí yàn 。"],
    ["尊重不同的观点，有助于我们更全面地理解问题。", "zūn zhòng bù tóng de guān diǎn ， yǒu zhù yú wǒ men gèng quán miàn de lǐ jiě wèn tí 。"],
    ["把目标分成具体的小步骤，然后认真完成每一步。", "bǎ mù biāo fēn chéng jù tǐ de xiǎo bù zhòu ， rán hòu rèn zhēn wán chéng měi yí bù 。"],
  ],
};
for (const level of Object.keys(extraChineseLessons)) {
  for (const [text, reading] of extraChineseLessons[level]) {
    modes.chinese[level].push(text);
    chineseReadings[level].push(reading);
  }
}
const lessonPositions = {};

function pinyinAt(index) {
  if (state.mode !== "chinese") return "";
  const lesson = modes.chinese[state.level].indexOf(state.target);
  const reading = chineseReadings[state.level][lesson];
  const syllable = reading ? reading.split(" ")[index] || "" : "";
  return /[\u4e00-\u9fff]/.test(state.target[index] || "") ? syllable : "";
}

for (const mode of ["keys", "home"]) {
  for (const level of Object.keys(levels)) {
    modes[mode][level] = modes[mode][level].map(text =>
      /[a-z]/i.test(text) ? text + " " + text.toUpperCase() : text + " aA sS dD fF jJ kK lL");
  }
}

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
  const key = state.mode + ":" + state.level;
  const index = lessonPositions[key] || 0;
  const lessonLabel = document.querySelector("#lessonNumber");
  if (lessonLabel) lessonLabel.textContent = "第 " + (index + 1) + " / " + bank.length + " 组";
  let target = bank[index];

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
  state.chineseValue = "";
  setFeedback(state.mode === "chinese" ? "请切换中文输入法，输入汉字及中文标点" : "准备", "");
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
    const pinyin = pinyinAt(i);
    if (pinyin) {
      const ruby = document.createElement("ruby");
      ruby.textContent = char;
      const rt = document.createElement("rt");
      rt.textContent = pinyin;
      ruby.appendChild(rt);
      span.textContent = "";
      span.appendChild(ruby);
      span.classList.add("with-pinyin");
    }

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
  if (event.getModifierState) state.capsLock = event.getModifierState("CapsLock");
  updateInputHint();
  if (state.mode === "chinese") return;
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
  if (state.mode === "chinese") {
    handleChineseInput();
    return;
  }
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

function handleChineseInput() {
  if (state.paused || state.completed || state.composing) return;
  let value = normalizedInput();
  const previous = state.chineseValue || "";
  let start = 0;
  while (start < previous.length && start < value.length && previous[start] === value[start]) start++;
  let suffix = 0;
  while (suffix < previous.length - start && suffix < value.length - start &&
    previous[previous.length - 1 - suffix] === value[value.length - 1 - suffix]) suffix++;
  let accepted = value.slice(0, start);
  let rejected = false;
  for (let i = start; i < value.length - suffix; i++) {
    const matches = value[i] === state.target[accepted.length];
    state.attempts++;
    if (matches) {
      state.correctAttempts++;
      state.streak++;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
    } else {
      state.streak = 0;
      state.mistakes++;
      const expected = state.target[accepted.length];
      state.trouble[expected] = (state.trouble[expected] || 0) + 1;
      if (elements.strictMode.checked) {
        rejected = true;
        break;
      }
    }
    accepted += value[i];
  }
  if (!rejected && suffix) accepted += value.slice(value.length - suffix);
  elements.input.value = accepted;
  state.chineseValue = accepted;
  if (!state.started && (accepted.length || state.attempts)) startTimer();
  renderPrompt();
  updateStats();
  highlightNextKey();
  if (accepted.length >= state.target.length) completeLesson();
  else {
    const correct = !rejected && accepted === state.target.slice(0, accepted.length);
    setFeedback(correct ? "保持节奏" : "请检查文字和中文标点", correct ? "good" : "warn");
  }
}

function normalizedPrintable(key) {
  if (key === " ") return " ";
  return key;
}

function cleanInputValue(value) {
  if (state.mode === "chinese") return value.replace(/\\n/g, " ");
  return value
    .replace(/\n/g, " ")
    .replace(/[^\x00-\x7F]/g, "");
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
  if (state.mode !== "chinese") showImeWarning();
}

function handleCompositionEnd() {
  state.composing = false;
  if (state.mode !== "chinese" && hasNonEnglishInput(elements.input.value)) {
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

function updateInputHint() {
  const hint = document.querySelector("#inputHint");
  if (!hint) return;
  const char = state.target[normalizedInput().length] || "";
  hint.className = "input-hint" + (state.imeWarning ? " input-hint-alert" :
    (/[A-Z]/.test(char) || (/[a-z]/.test(char) && state.capsLock)) && state.mode !== "chinese" ? " input-hint-case" : "");
  if (state.imeWarning && state.mode !== "chinese" && !state.completed) {
    hint.textContent = "⚠ 请先切换到英文输入法\n按一下 Shift 切换中 / 英\n若未切换，请使用系统输入法切换快捷键";
    return;
  }
  if (state.completed) {
    hint.textContent = "本组已结束，可点击“下一组”继续练习。";
  } else if (state.mode === "chinese") {
    hint.textContent = "中文输入：请切换到中文输入法，选字确认后再判定；标点也请使用中文标点。";
  } else {
    let text = state.imeWarning ? "请切换到英文输入法（通常按 Shift，或使用系统输入法切换快捷键）。" :
      "英文输入：请使用英文输入法。";
    if (/[A-Z]/.test(char)) text += state.capsLock ?
      " 下一字母为大写 " + char + "，Caps Lock 已开启，可直接输入。" :
      " 下一字母为大写 " + char + "，请按住 Shift + " + char + "。";
    else if (/[a-z]/.test(char)) text += state.capsLock ?
      " 下一字母为小写 " + char + "，请按 Caps Lock 关闭大写锁定。" :
      " 下一字母为小写 " + char + "，请松开 Shift。";
    hint.textContent = text;
  }
}

function highlightNextKey() {
  updateInputHint();
  if (state.imeWarning) {
    highlightImeSwitchKey();
    return;
  }

  const typed = normalizedInput();
  const char = state.target[typed.length] || "";
  const next = baseKey(char);

  elements.nextKey.textContent = displayChar(char);
  const pinyinLabel = document.querySelector("#nextPinyin");
  if (pinyinLabel) pinyinLabel.textContent = pinyinAt(typed.length);
  elements.fingerHint.textContent = state.mode === "chinese" ? "使用中文输入法" : fingerByKey[next] || "看键位";

  document.querySelectorAll(".key").forEach((keyElement) => {
    const needsShift = /[A-Z]/.test(char) && !state.capsLock;
    keyElement.classList.toggle("next", keyElement.dataset.key === next ||
      (needsShift && imeSwitchKeys.includes(keyElement.dataset.key)));
    keyElement.classList.remove("ime-switch");
  });
}

function highlightImeSwitchKey() {
  updateInputHint();
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
  return char;
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
  elements.nextLessonBtn.addEventListener("click", () => {
    const key = state.mode + ":" + state.level;
    lessonPositions[key] = ((lessonPositions[key] || 0) + 1) % modes[state.mode][state.level].length;
    resetLesson();
  });
  elements.pauseBtn.addEventListener("click", togglePause);
  elements.input.addEventListener("compositionstart", handleCompositionStart);
  elements.input.addEventListener("compositionend", handleCompositionEnd);
  elements.input.addEventListener("keydown", handleKeydown);
  elements.input.addEventListener("input", handleInput);
}

buildKeyboard();
bindEvents();
resetLesson();

