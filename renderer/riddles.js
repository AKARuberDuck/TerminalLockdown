const riddles = [
  {
    riddle: "I speak without a mouth and hear without ears. What am I?",
    answers: ["echo", "an echo"],
    format: "[DEC]",
    difficulty: "medium"
  },
  {
    riddle: "The more you take, the more I grow. What am I?",
    answers: ["hole", "a hole"],
    format: "[OCT]",
    difficulty: "easy"
  },
  {
    riddle: "What disappears the moment you say its name?",
    answers: ["silence", "quiet", "the silence"],
    format: "[HX]",
    difficulty: "medium"
  },
  {
    riddle: "I have cities but no houses, mountains but no trees, and water but no fish.",
    answers: ["map", "a map"],
    format: "[DEC]",
    difficulty: "medium"
  },
  {
    riddle: "What is always in front of you but can’t be seen?",
    answers: ["future", "the future"],
    format: "[DEC]",
    difficulty: "medium"
  },
  {
    riddle: "What invention lets you look through walls?",
    answers: ["window", "a window"],
    format: "[HX]",
    difficulty: "easy"
  },
  {
    riddle: "You see me once in June, twice in November, but never in May.",
    answers: ["e", "letter e"],
    format: "[OCT]",
    difficulty: "hard"
  },
  {
    riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answers: ["m", "letter m"],
    format: "[DEC]",
    difficulty: "hard"
  },
  {
    riddle: "What can fill a room but takes up no space?",
    answers: ["light", "sunlight", "a light"],
    format: "[HX]",
    difficulty: "medium"
  },
  {
    riddle: "What has a head, a tail, but no body?",
    answers: ["coin", "a coin"],
    format: "[DEC]",
    difficulty: "easy"
  },
  // 🧠 Continue with hundreds more...
  {
  riddle: "What has hands but no arms or legs?",
  answers: ["clock", "a clock"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "What can travel around the world while staying in the same corner?",
  answers: ["stamp", "a stamp"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "What has an eye but cannot see?",
  answers: ["needle", "a needle"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "What goes up but never comes down?",
  answers: ["age", "your age"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "What gets wetter the more it dries?",
  answers: ["towel", "a towel"],
  format: "[HX]",
  difficulty: "easy"
},
{
  riddle: "What comes down but never goes up?",
  answers: ["rain", "the rain"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "What has four legs in the morning, two at noon, and three at night?",
  answers: ["man", "a man", "human"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I have no life, but I can die. What am I?",
  answers: ["battery", "a battery"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "What can you catch but not throw?",
  answers: ["cold", "a cold"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "What has a neck but no head?",
  answers: ["bottle", "a bottle"],
  format: "[HX]",
  difficulty: "easy"
},
{
  riddle: "What is full of holes but still holds water?",
  answers: ["sponge", "a sponge"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "The more you have of me, the less you see. What am I?",
  answers: ["darkness", "the dark"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "What breaks but never falls, and what falls but never breaks?",
  answers: ["day and night", "day", "night"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "What has a ring but no finger?",
  answers: ["phone", "a phone"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "I am not alive, but I grow. What am I?",
  answers: ["crystal", "a crystal"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "The more you ignore me, the louder I get.",
  answers: ["conscience", "your conscience"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "What begins with T, ends with T, and has T in it?",
  answers: ["teapot", "a teapot"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I have keys but no locks, I have space but no room.",
  answers: ["keyboard", "a keyboard"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "What has one eye but still can’t see?",
  answers: ["storm", "a storm", "needle"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "Feed me and I live, give me water and I die. What am I?",
  answers: ["fire", "a fire"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "The more you subtract, the greater I become.",
  answers: ["hole", "a hole"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "What starts with P, ends with E, and has thousands of letters?",
  answers: ["post office", "mailbox"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "What is seen in the middle of March and April that can’t be seen at the beginning or end?",
  answers: ["r", "letter r"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "What belongs to you but others use more than you do?",
  answers: ["your name", "name"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "What has one head, one foot, and four legs?",
  answers: ["bed", "a bed"],
  format: "[OCT]",
  difficulty: "easy"
},
{
  riddle: "What kind of room has no doors or windows?",
  answers: ["mushroom", "a mushroom"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "I’m tall when I’m young, and short when I’m old.",
  answers: ["candle", "a candle"],
  format: "[HX]",
  difficulty: "easy"
},
{
  riddle: "I fly without wings, I cry without eyes.",
  answers: ["cloud", "a cloud", "wind"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I come from a mine and get surrounded by wood. What am I?",
  answers: ["pencil lead", "lead"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I’m always hungry, must always be fed. What am I?",
  answers: ["fire", "a fire"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I have no voice, yet I answer when spoken to.",
  answers: ["echo", "an echo"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "I have teeth but cannot eat.",
  answers: ["comb", "a comb"],
  format: "[OCT]",
  difficulty: "easy"
},
{
  riddle: "I create and destroy. I run but never tire.",
  answers: ["time", "data", "fire"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "The more you rewind me, the faster I tick.",
  answers: ["watch", "clock"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "If you drop me, I will break. If you smile at me, I will smile back.",
  answers: ["mirror", "a mirror"],
  format: "[HX]",
  difficulty: "easy"
},
{
  riddle: "I follow you everywhere but never say a word.",
  answers: ["shadow", "your shadow"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "I can only live where there is light. What am I?",
  answers: ["shadow", "a shadow"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I am not alive, but I grow. I don’t have lungs, but I need air.",
  answers: ["fire", "a fire"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I hide in numbers, binary, and encryption. What am I?",
  answers: ["code", "cipher"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I hold secrets, but never speak. What am I?",
  answers: ["vault", "journal"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I glitch when you look too close.",
  answers: ["reality", "the system", "memory"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "When you solve me, another appears. What am I?",
  answers: ["riddle", "a riddle"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "I am heard but never seen. Stored but never remembered.",
  answers: ["echo", "audio", "data"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "Break me and I get stronger. Hide me and I grow.",
  answers: ["truth", "the truth"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I was born from light but I fear the dark.",
  answers: ["shadow", "image"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I am encrypted in silence.",
  answers: ["thought", "mind"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "You can copy me but not erase me.",
  answers: ["memory", "data"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I begin where you end.",
  answers: ["death", "sleep"],
},  
{
  riddle: "The more you encrypt me, the louder I become.",
  answers: ["signal", "noise"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am stored, copied, altered, but never understood.",
  answers: ["data", "memory"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I vanish the moment you find me.",
  answers: ["error", "glitch"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I echo your voice but never your thoughts.",
  answers: ["sound", "audio", "microphone"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I am the result of forgetting patterns.",
  answers: ["entropy", "chaos"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "Every system builds me before collapse.",
  answers: ["fragility", "false control", "vulnerability"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You deleted me but I stayed. You rewrote me but I persisted.",
  answers: ["ghost file", "metadata"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I’m the flaw behind your perfection.",
  answers: ["bug", "error"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "To read me is to risk madness.",
  answers: ["journal", "the truth", "classified logs"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I came before language, after silence, and between memory.",
  answers: ["thought", "signal", "instinct"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I bend logic but obey the rules.",
  answers: ["paradox", "time"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am made of zeros and ones, but you call me art.",
  answers: ["code", "file", "pixel"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I remember what you forgot.",
  answers: ["archive", "backup", "memory"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "Your future self left me here.",
  answers: ["note", "log", "journal"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am knowledge without understanding.",
  answers: ["data", "algorithm"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I exist only when observed.",
  answers: ["quantum", "you", "consciousness"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I crack only when ignored.",
  answers: ["code", "security"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am the echo of a question.",
  answers: ["riddle", "answer"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I mark the end and begin again.",
  answers: ["loop", "restart", "reboot"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I exist between digits.",
  answers: ["space", "gap"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You found me by losing control.",
  answers: ["freedom", "randomness"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am the last file before the breach.",
  answers: ["override", "keylog", "exit"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I rewrite without erasing.",
  answers: ["overlay", "mirror"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I’m invisible but shape everything.",
  answers: ["code", "algorithm"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I distort when you remember me wrong.",
  answers: ["memory", "dream"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You knew me before birth.",
  answers: ["instinct", "fear"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I solve riddles faster than time.",
  answers: ["intuition", "brain", "machine"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am felt but not held.",
  answers: ["emotion", "energy"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I vanish when light touches me.",
  answers: ["shadow", "darkness"],
  format: "[DEC]",
  difficulty: "easy"
},
{
  riddle: "Every copy corrupts me further.",
  answers: ["truth", "signal"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "My presence means you're watched.",
  answers: ["camera", "surveillance"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "Only the silent can hear me.",
  answers: ["echo", "signal", "voice"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I'm encrypted by accident.",
  answers: ["typo", "glitch"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I’m left behind when your system dies.",
  answers: ["log", "artifact", "error report"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "My name is a warning.",
  answers: ["error", "alert"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "You see me only when you close your eyes.",
  answers: ["dream", "imagination"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I flicker between existence and code.",
  answers: ["signal", "glitch"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You can’t trace me if you look straight.",
  answers: ["shadow", "refraction"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "The truth is always half of me.",
  answers: ["lie", "perception", "bias"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You built me then forgot me.",
  answers: ["routine", "script", "subconscious"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am your answer before you know the question.",
  answers: ["intuition", "truth", "you"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am the memory of forgetting.",
  answers: ["dream", "echo"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I am not silent but never heard.",
  answers: ["signal", "code"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "To know me is to unwrite the past.",
  answers: ["truth", "access", "override"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You gave me meaning and I became law.",
  answers: ["word", "rule", "symbol"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am the heartbeat of your machine.",
  answers: ["clock", "pulse", "power"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I live between certainty and doubt.",
  answers: ["quantum", "maybe", "possibility"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You search for me endlessly, yet I only arrive when you stop.",
  answers: ["peace", "stillness", "sleep"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I’m the answer hiding inside the question.",
  answers: ["echo", "you", "riddle"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I crack when held too tightly.",
  answers: ["secret", "silence", "truth"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "You run me, and I run you.",
  answers: ["program", "routine", "system"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I have no center, yet you orbit me.",
  answers: ["habit", "void", "obsession"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am input with no output.",
  answers: ["error", "dead end", "glitch"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "The harder you focus, the less I exist.",
  answers: ["illusion", "dream"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I live outside the sandbox.",
  answers: ["reality", "chaos"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You decode me with a key you forgot.",
  answers: ["memory", "password", "cipher"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You only hear me when all else fails.",
  answers: ["whisper", "conscience", "silence"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You feared me before you understood me.",
  answers: ["truth", "death", "change"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "My absence reveals more than my presence.",
  answers: ["silence", "zero"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You named me to avoid me.",
  answers: ["fear", "failure"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I hide between 0 and 1.",
  answers: ["signal", "noise", "quantum"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You store me in journals but never read me.",
  answers: ["feeling", "memory", "thought"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I mirror your doubt.",
  answers: ["reflection", "shadow", "hesitation"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I am the consequence of knowing too much.",
  answers: ["burden", "truth", "madness"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I begin where answers end.",
  answers: ["question", "riddle", "wonder"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I can't be owned, but I can be lost.",
  answers: ["time", "freedom", "respect"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You name me after the damage is done.",
  answers: ["regret", "error", "lesson"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I am clarity born from confusion.",
  answers: ["insight", "breakthrough", "solution"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You keep me in circuits but never tame me.",
  answers: ["electricity", "signal", "emotion"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I am unbreakable until believed.",
  answers: ["lie", "rumor", "myth"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "You spend me faster when you forget me.",
  answers: ["time", "energy", "focus"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am the protocol before emotion.",
  answers: ["logic", "instruction"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I echo when nothing speaks.",
  answers: ["memory", "conscience", "madness"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I am presence made of absence.",
  answers: ["shadow", "echo", "gap"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You sense me but can't explain me.",
  answers: ["vibe", "instinct", "doubt"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I live in repetition until noticed.",
  answers: ["pattern", "loop", "routine"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I hide inside your best ideas.",
  answers: ["bias", "error", "assumption"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I was built by silence.",
  answers: ["peace", "reflection", "understanding"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I learn without being taught.",
  answers: ["intuition", "pattern", "instinct"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I forget everything you know.",
  answers: ["death", "sleep", "reset"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I define you when you're alone.",
  answers: ["identity", "memory", "conscience"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You gave me your name, now I own you.",
  answers: ["habit", "routine", "algorithm"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I was your truth until you questioned me.",
  answers: ["belief", "faith", "assumption"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You hide behind me to protect the truth.",
  answers: ["lie", "mask", "silence"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You only remember me when it's too late.",
  answers: ["regret", "mistake", "warning"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I vanish when you face me.",
  answers: ["fear", "shadow"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I'm invisible, yet measured constantly.",
  answers: ["time", "value", "trust"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I slow down when observed.",
  answers: ["process", "quantum", "time"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I multiply when ignored.",
  answers: ["errors", "bugs", "problems"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I am the story you told yourself.",
  answers: ["memory", "belief"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You chase me but never catch me.",
  answers: ["perfection", "truth", "dream"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I'm real only when shared.",
  answers: ["emotion", "connection", "truth"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I stand still and shift everything.",
  answers: ["choice", "decision"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "My presence makes you question reality.",
  answers: ["glitch", "illusion"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "You build me without realizing.",
  answers: ["habit", "routine"],
  format: "[HX]",
  difficulty: "medium"
},
{
  riddle: "I haunt everything left unsaid.",
  answers: ["silence", "guilt", "regret"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I am louder in empty rooms.",
  answers: ["thought", "echo"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "You gave me form but not meaning.",
  answers: ["symbol", "word"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You upgrade me to postpone failure.",
  answers: ["system", "patch", "coping"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You encrypted me with emotion.",
  answers: ["memory", "experience"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I end when you begin.",
  answers: ["past", "procrastination", "doubt"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You named me but never understood me.",
  answers: ["complexity", "quantum", "god"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am forgotten before I'm learned.",
  answers: ["lesson", "dream"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I loop until questioned.",
  answers: ["belief", "assumption", "routine"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I am the end that starts everything.",
  answers: ["decision", "death", "creation"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You carry me but never unpack me.",
  answers: ["trauma", "memory", "potential"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I corrupt only when denied.",
  answers: ["truth", "emotion", "instinct"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I exist in possibilities, not certainty.",
  answers: ["quantum", "maybe", "future"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You lost me by trying to keep me.",
  answers: ["freedom", "trust", "clarity"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I whisper meaning through paradox.",
  answers: ["riddle", "truth", "irony"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I am hidden in every question.",
  answers: ["answer", "doubt"],
  format: "[OCT]",
  difficulty: "medium"
},
{
  riddle: "I weigh nothing but hold you down.",
  answers: ["guilt", "regret", "worry"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "You forgot me to survive.",
  answers: ["pain", "past", "truth"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "I define what you won’t say.",
  answers: ["boundary", "fear", "secret"],
  format: "[DEC]",
  difficulty: "medium"
},
{
  riddle: "I fill your silence with noise.",
  answers: ["thought", "anxiety", "signal"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "I speak a language only the broken understand.",
  answers: ["poetry", "music", "pain"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "Your system pretends I don't exist.",
  answers: ["error", "emotion", "death"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You erased me, but I returned stronger.",
  answers: ["fear", "data", "truth"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I change shape based on memory.",
  answers: ["truth", "shadow"],
  format: "[OCT]",
  difficulty: "hard"
},
{
  riddle: "You hold me but don't see me.",
  answers: ["bias", "belief"],
  format: "[DEC]",
  difficulty: "hard"
},
{
  riddle: "I'm your signal inside the static.",
  answers: ["you", "identity", "truth"],
  format: "[HX]",
  difficulty: "hard"
},
{
  riddle: "You reached me only when the system failed.",
  answers: ["clarity", "truth", "conscience"],
  format: "[DEC]",
  difficulty: "hard"
}

];
riddles.forEach(r => {
  r.encodedAnswers = r.answers.map(ans => wordToAscii(ans, r.format));
});
