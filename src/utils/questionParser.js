// Question data for different puzzle categories

// Anime Questions (Puzzle 1)
const animeQuestionsData = {
  easy: [
    { question: "[Demon Slayer] What is the name of Tanjiro Kamado's sister who was turned into a demon?", options: ["Kanao", "Nezuko", "Shinobu", "Mitsuri"], correctAnswer: "Nezuko" },
    { question: "[One Piece] What is the ultimate treasure that all pirates are searching for?", options: ["The All Blue", "The Poneglyphs", "The One Piece", "The Gomu Gomu no Mi"], correctAnswer: "The One Piece" },
    { question: "[Death Note] What must a person's name and face be known to kill them using the Death Note?", options: ["Name only", "Face only", "Name and Face", "Name and Date of Birth"], correctAnswer: "Name and Face" },
    { question: "[Chainsaw Man] What is the name of the main character who merges with his devil dog, Pochita?", options: ["Aki", "Power", "Denji", "Makima"], correctAnswer: "Denji" },
    { question: "[One Piece] Who is the captain of the Straw Hat Pirates?", options: ["Roronoa Zoro", "Vinsmoke Sanji", "Usopp", "Monkey D. Luffy"], correctAnswer: "Monkey D. Luffy" },
    { question: "[Demon Slayer] What do Demon Slayers use to kill demons?", options: ["Sunlight Blades", "Nichirin Blades", "Silver Swords", "Holy Water"], correctAnswer: "Nichirin Blades" },
    { question: "[Death Note] What is the name of the Shinigami who dropped the Death Note into the human world?", options: ["Rem", "Ryuk", "Sidoh", "Gelus"], correctAnswer: "Ryuk" },
    { question: "[Chainsaw Man] What animal is Power's beloved pet?", options: ["A dog", "A cat", "A bird", "A hamster"], correctAnswer: "A cat" },
    { question: "[One Piece] What kind of Devil Fruit did Luffy eat?", options: ["Flame-Flame Fruit", "Gum-Gum Fruit", "Chop-Chop Fruit", "Flower-Flower Fruit"], correctAnswer: "Gum-Gum Fruit" },
    { question: "[Demon Slayer] Who is the Hashira that uses Flame Breathing?", options: ["Giyu Tomioka", "Tengen Uzui", "Kyojuro Rengoku", "Muichiro Tokito"], correctAnswer: "Kyojuro Rengoku" }
  ],
  medium: [
    { question: "[Death Note] What is the false rule that Light Yagami makes Ryuk write in the Death Note to trick L?", options: ["The notebook will explode if touched by a god.", "If a person's name is misspelled four times, the user will die.", "The user must write a name every 30 days or they will die.", "If the owner doesn't use the notebook for 13 days, they die."], correctAnswer: "If the owner doesn't use the notebook for 13 days, they die." },
    { question: "[Chainsaw Man] Aki Hayakawa has a contract with the Fox Devil. What must he offer the Fox Devil to summon its head?", options: ["A piece of his own flesh.", "A drop of his blood.", "Part of his remaining lifespan.", "A memory."], correctAnswer: "A piece of his own flesh." },
    { question: "[One Piece] What is the name of the first island the Straw Hats visit in the Grand Line?", options: ["Alabasta", "Drum Island", "Whiskey Peak", "Little Garden"], correctAnswer: "Whiskey Peak" },
    { question: "[Demon Slayer] What is the name of the final selection process for becoming a Demon Slayer?", options: ["The Hashira Exam", "The Wisteria Trial", "The Final Selection", "The Mountain's Test"], correctAnswer: "The Final Selection" },
    { question: "[Death Note] What is Misa Amane's Shinigami's name?", options: ["Ryuk", "Sidoh", "Gelus", "Rem"], correctAnswer: "Rem" }
  ],
  hard: [
    { question: "[Chainsaw Man] What phrase does the Future Devil repeat when it appears before Aki?", options: ["The future is coming!", "The future rules!", "The future is best!", "Your death will be gruesome!"], correctAnswer: "The future rules!" },
    { question: "[Death Note] Who was the original owner of the Death Note that Sidoh came to the human world to retrieve?", options: ["Light Yagami", "Kyosuke Higuchi", "Mello", "Jack Neylon"], correctAnswer: "Jack Neylon" },
    { question: "[One Piece] What is the name of the giant, sentient island that the Straw Hats encounter in the New World, which is home to Zou?", options: ["Punk Hazard", "Dressrosa", "Zunesha", "Raftel"], correctAnswer: "Zunesha" },
    { question: "[Demon Slayer] What is the name of the flower Muzan is searching for, which he believes can grant him immunity to sunlight?", options: ["The Red Spider Lily", "The Golden Orchid", "The Blue Spider Lily", "The Moonpetal"], correctAnswer: "The Blue Spider Lily" },
    { question: "[Death Note] What is the name of the company where Kyosuke Higuchi, the third Kira, worked?", options: ["The Yotsuba Group", "The SPK", "Wammy's House", "To-Oh University"], correctAnswer: "The Yotsuba Group" }
  ]
};

// Marvel & DC Questions (Puzzle 2)
const marvelDcQuestionsData = {
  easy: [
    { question: "[Marvel] What is the name of Thor's enchanted hammer?", options: ["Stormbreaker", "Mjolnir", "Gungnir", "Aegis"], correctAnswer: "Mjolnir" },
    { question: "[DC] What is the name of Batman's loyal butler?", options: ["James Gordon", "Lucius Fox", "Alfred Pennyworth", "Harvey Dent"], correctAnswer: "Alfred Pennyworth" },
    { question: "[Marvel] Who is the leader of S.H.I.E.L.D. that assembles the Avengers?", options: ["Phil Coulson", "Maria Hill", "Nick Fury", "Alexander Pierce"], correctAnswer: "Nick Fury" },
    { question: "[DC] What is Superman's birth name?", options: ["Clark Kent", "Jor-El", "Kal-El", "Zod"], correctAnswer: "Kal-El" },
    { question: "[Marvel] What is Captain America's shield made of?", options: ["Adamantium", "Uru Metal", "Vibranium", "Titanium"], correctAnswer: "Vibranium" },
    { question: "[DC] Who is Batman's arch-nemesis, known as the 'Clown Prince of Crime'?", options: ["The Riddler", "The Penguin", "The Joker", "Two-Face"], correctAnswer: "The Joker" },
    { question: "[Marvel] What does Tony Stark have in his chest to keep him alive in the first Iron Man?", options: ["A pacemaker", "An Arc Reactor", "A tesseract", "A vibranium core"], correctAnswer: "An Arc Reactor" },
    { question: "[DC] What is Wonder Woman's signature weapon, which compels people to tell the truth?", options: ["The Sword of Athena", "The Lasso of Hestia", "The Bracelets of Submission", "The Shield of Aegis"], correctAnswer: "The Lasso of Hestia" },
    { question: "[Marvel] Which member of the Avengers is a master spy and assassin from Russia?", options: ["Captain Marvel", "Scarlet Witch", "The Wasp", "Black Widow"], correctAnswer: "Black Widow" },
    { question: "[DC] Which city does Batman protect?", options: ["Metropolis", "Central City", "Star City", "Gotham City"], correctAnswer: "Gotham City" }
  ],
  medium: [
    { question: "[Marvel] How many Infinity Stones are there?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
    { question: "[DC] In Batman Begins, who trains Bruce Wayne to become a member of the League of Shadows?", options: ["The Joker", "Carmine Falcone", "Ra's al Ghul", "The Scarecrow"], correctAnswer: "Ra's al Ghul" },
    { question: "[Marvel] In Captain America: The First Avenger, what is Steve Rogers's hometown?", options: ["Queens, New York", "Brooklyn, New York", "Manhattan, New York", "The Bronx, New York"], correctAnswer: "Brooklyn, New York" },
    { question: "[DC] In Man of Steel, who is the main Kryptonian villain?", options: ["Brainiac", "Doomsday", "Lex Luthor", "General Zod"], correctAnswer: "General Zod" },
    { question: "[Marvel] What is the name of the AI that Tony Stark creates, which later becomes Ultron?", options: ["J.A.R.V.I.S.", "F.R.I.D.A.Y.", "K.A.R.E.N.", "E.D.I.T.H."], correctAnswer: "J.A.R.V.I.S." }
  ],
  hard: [
    { question: "[Marvel] In Iron Man 2, what is the name of the formula created by Howard Stark, which Tony synthesizes to create a new element for his Arc Reactor?", options: ["The Pym Particle", "The Extremis Virus", "The Godkiller Formula", "The Tesseract Formula"], correctAnswer: "The Extremis Virus" },
    { question: "[DC] In The Dark Knight Rises, what is the real name of the character played by Marion Cotillard, who is revealed to be the daughter of Ra's al Ghul?", options: ["Selina Kyle", "Talia al Ghul", "Vicki Vale", "Rachel Dawes"], correctAnswer: "Talia al Ghul" },
    { question: "[Marvel] What is the name of the Kree zealot who leads the Starforce team in Captain Marvel?", options: ["Mar-Vell", "Yon-Rogg", "Korath", "Talos"], correctAnswer: "Yon-Rogg" },
    { question: "[DC] In the 'Snyder Cut' of Justice League, who is the main villain that Steppenwolf is trying to impress?", options: ["Lex Luthor", "Doomsday", "Darkseid", "The Joker"], correctAnswer: "Darkseid" },
    { question: "[Marvel] Before being taken by the Celestials, what was the name of Peter Quill's (Star-Lord's) mother?", options: ["Meredith Quill", "Laura Haddock", "Cassie Lang", "Maria Stark"], correctAnswer: "Meredith Quill" }
  ]
};

// Science & Math Questions (Puzzle 3)
const scienceMathQuestionsData = {
  easy: [
    { question: "[Physics] What is the unit of force?", options: ["Watt", "Joule", "Newton", "Pascal"], correctAnswer: "Newton" },
    { question: "[Chemistry] What is the chemical symbol for Gold?", options: ["Ag", "Au", "Fe", "Gd"], correctAnswer: "Au" },
    { question: "[Math] What is the value of Pi (π) approximately?", options: ["2.14", "3.14", "4.14", "1.61"], correctAnswer: "3.14" },
    { question: "[Physics] Which of these is a renewable source of energy?", options: ["Coal", "Petroleum", "Natural Gas", "Sunlight"], correctAnswer: "Sunlight" },
    { question: "[Chemistry] H₂O is the chemical formula for which substance?", options: ["Salt", "Sugar", "Water", "Methane"], correctAnswer: "Water" },
    { question: "[Math] What is the sum of the angles in a triangle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], correctAnswer: "180 degrees" },
    { question: "[Physics] The force of gravity pulls objects towards the...", options: ["Center of the Earth", "Sky", "Moon", "Sun"], correctAnswer: "Center of the Earth" },
    { question: "[Chemistry] Which gas do humans need to breathe to live?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], correctAnswer: "Oxygen" },
    { question: "[Math] What is the value of 5²?", options: ["10", "15", "25", "52"], correctAnswer: "25" },
    { question: "[Physics] Sound cannot travel through...", options: ["Air", "Water", "A solid wall", "A vacuum"], correctAnswer: "A vacuum" }
  ],
  medium: [
    { question: "[Chemistry] What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"], correctAnswer: "Nitrogen" },
    { question: "[Math] If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?", options: ["13 cm²", "26 cm²", "40 cm²", "64 cm²"], correctAnswer: "40 cm²" },
    { question: "[Physics] What is the phenomenon where light bends as it passes from one medium to another?", options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], correctAnswer: "Refraction" },
    { question: "[Chemistry] The atomic number of an element is equal to the number of...", options: ["Protons", "Neutrons", "Electrons", "Protons and Neutrons"], correctAnswer: "Protons" },
    { question: "[Math] Solve for x: 3x - 5 = 16", options: ["x = 5", "x = 6", "x = 7", "x = 8"], correctAnswer: "x = 7" }
  ],
  hard: [
    { question: "[Physics] Ohm's law relates which three quantities?", options: ["Force, Mass, and Acceleration", "Voltage, Current, and Resistance", "Work, Power, and Time", "Pressure, Volume, and Temperature"], correctAnswer: "Voltage, Current, and Resistance" },
    { question: "[Chemistry] In a chemical reaction, what does a catalyst do?", options: ["It is consumed in the reaction.", "It slows down the reaction.", "It stops the reaction.", "It speeds up the reaction without being consumed."], correctAnswer: "It speeds up the reaction without being consumed." },
    { question: "[Math] What is the value of 0! (zero factorial)?", options: ["0", "1", "Undefined", "Infinity"], correctAnswer: "1" },
    { question: "[Physics] The energy of a moving object is called kinetic energy. If you double the velocity of an object, by what factor does its kinetic energy increase?", options: ["It doubles (2x)", "It triples (3x)", "It quadruples (4x)", "It stays the same."], correctAnswer: "It quadruples (4x)" },
    { question: "[Chemistry] Balancing the equation: _H₂ + _O₂ → _H₂O, what are the correct coefficients?", options: ["1, 1, 1", "2, 1, 2", "1, 2, 1", "2, 2, 1"], correctAnswer: "2, 1, 2" }
  ]
};

// Valorant Questions (Puzzle 4)
const valorantQuestionsData = {
  easy: [
    { question: "What is the ultimate ability of the agent Jett called?", options: ["Showstopper", "Blade Storm", "Tour de Force", "Hunter's Fury"], correctAnswer: "Blade Storm" },
    { question: "Which agent is known for their healing abilities and says 'Your duty is not over!'?", options: ["Skye", "Sage", "Sova", "Reyna"], correctAnswer: "Sage" },
    { question: "How many players are on a standard Valorant team?", options: ["3", "4", "5", "6"], correctAnswer: "5" },
    { question: "What is the name of the explosive device the attacking team tries to plant?", options: ["The Bomb", "The C4", "The Spike", "The Device"], correctAnswer: "The Spike" },
    { question: "Which agent uses a bow and arrow for their abilities?", options: ["Cypher", "Brimstone", "Sova", "Phoenix"], correctAnswer: "Sova" },
    { question: "Which of these is NOT a class of agent in Valorant?", options: ["Duelist", "Controller", "Support", "Sentinel"], correctAnswer: "Support" },
    { question: "Which agent can create walls of fire and a fiery phoenix?", options: ["KAY/O", "Raze", "Phoenix", "Breach"], correctAnswer: "Phoenix" },
    { question: "What is the maximum number of rounds in a standard, unrated Valorant match (excluding overtime)?", options: ["20", "24", "25", "30"], correctAnswer: "25" },
    { question: "Which agent is a robot from the future sent back to neutralize radiants?", options: ["Cypher", "KAY/O", "Killjoy", "Omen"], correctAnswer: "KAY/O" },
    { question: "What is the name of the map set in a snowy, icy environment?", options: ["Bind", "Haven", "Split", "Icebox"], correctAnswer: "Icebox" }
  ],
  medium: [
    { question: "Which agent's ultimate ability allows them to create a full copy of the map, revealing enemy locations?", options: ["Sova's Hunter's Fury", "Cypher's Neural Theft", "Omen's From the Shadows", "Brimstone's Orbital Strike"], correctAnswer: "Cypher's Neural Theft" },
    { question: "The map 'Bind' is unique for what feature?", options: ["Three bomb sites", "Ziplines", "One-way teleporters", "A closeable door in the middle"], correctAnswer: "One-way teleporters" },
    { question: "What is the name of Raze's rocket launcher ultimate?", options: ["Blast Pack", "Paint Shells", "Showstopper", "Boom Bot"], correctAnswer: "Showstopper" },
    { question: "What country is the agent Sova from?", options: ["Sweden", "Norway", "Russia", "Canada"], correctAnswer: "Russia" },
    { question: "What is the name of Killjoy's turret ability?", options: ["Nanoswarm", "Alarmbot", "Lockdown", "Turret"], correctAnswer: "Turret" }
  ],
  hard: [
    { question: "What is the name of the corporation that founded the VALORANT Protocol?", options: ["Kingdom Corporation", "Radiant Corp", "Sovereign Industries", "Valorant Inc."], correctAnswer: "Kingdom Corporation" },
    { question: "The agent Fade is from which country?", options: ["Egypt", "Morocco", "Greece", "Turkey"], correctAnswer: "Turkey" },
    { question: "What is the numerical agent number for Brimstone?", options: ["01", "02", "03", "04"], correctAnswer: "01" },
    { question: "Before the game's official release, what was the codename for Valorant?", options: ["Project: Valor", "Project: A", "Project: Strike", "Project: Titan"], correctAnswer: "Project: A" },
    { question: "The map 'Pearl' is unique because it is located where?", options: ["In space", "In the desert", "Underwater", "In a volcano"], correctAnswer: "Underwater" }
  ]
};

// Utility function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get questions data based on puzzle number
function getQuestionsDataByPuzzle(puzzleNumber) {
  switch (puzzleNumber) {
    case 1: return animeQuestionsData;
    case 2: return marvelDcQuestionsData;
    case 3: return scienceMathQuestionsData;
    case 4: return valorantQuestionsData;
    default: return animeQuestionsData;
  }
}

// Generate a set of 4 questions: 1 easy, 2 medium, 1 hard for specific puzzle
export function generatePuzzleQuestions(puzzleNumber = 1) {
  const questionsData = getQuestionsDataByPuzzle(puzzleNumber);
  const selectedQuestions = [];
  
  // Get random easy question
  const easyQuestions = shuffleArray(questionsData.easy);
  selectedQuestions.push({ ...easyQuestions[0], difficulty: 'easy' });
  
  // Get 2 random medium questions
  const mediumQuestions = shuffleArray(questionsData.medium);
  selectedQuestions.push({ ...mediumQuestions[0], difficulty: 'medium' });
  selectedQuestions.push({ ...mediumQuestions[1], difficulty: 'medium' });
  
  // Get random hard question
  const hardQuestions = shuffleArray(questionsData.hard);
  selectedQuestions.push({ ...hardQuestions[0], difficulty: 'hard' });
  
  // Shuffle options for each question and track correct answer position
  return selectedQuestions.map(q => {
    const shuffledOptions = shuffleArray(q.options);
    const correctIndex = shuffledOptions.findIndex(option => option === q.correctAnswer);
    
    return {
      question: q.question,
      options: shuffledOptions,
      correctIndex: correctIndex,
      difficulty: q.difficulty
    };
  });
}

// Get available subjects/topics based on puzzle number
export function getAvailableTopics(puzzleNumber = 1) {
  const questionsData = getQuestionsDataByPuzzle(puzzleNumber);
  const topics = new Set();
  
  [...questionsData.easy, ...questionsData.medium, ...questionsData.hard].forEach(q => {
    const match = q.question.match(/\[(.*?)\]/);
    if (match) {
      topics.add(match[1]);
    } else {
      // For valorant questions without brackets, add "Valorant"
      if (puzzleNumber === 4) {
        topics.add("Valorant");
      }
    }
  });
  
  return Array.from(topics);
}

// Get questions for a specific topic and difficulty
export function getQuestionByTopic(topic, difficulty, puzzleNumber = 1) {
  const questionsData = getQuestionsDataByPuzzle(puzzleNumber);
  const questions = questionsData[difficulty] || [];
  
  let topicQuestions;
  if (puzzleNumber === 4) {
    // For Valorant, all questions are about Valorant
    topicQuestions = questions;
  } else {
    topicQuestions = questions.filter(q => q.question.includes(`[${topic}]`));
  }
  
  if (topicQuestions.length === 0) return null;
  
  const randomQuestion = topicQuestions[Math.floor(Math.random() * topicQuestions.length)];
  const shuffledOptions = shuffleArray(randomQuestion.options);
  const correctIndex = shuffledOptions.findIndex(option => option === randomQuestion.correctAnswer);
  
  return {
    question: randomQuestion.question,
    options: shuffledOptions,
    correctIndex: correctIndex,
    difficulty: difficulty
  };
}

// Legacy function for backwards compatibility
export function getAvailableAnimes() {
  return getAvailableTopics(1);
}

// Legacy function for backwards compatibility
export function getQuestionByAnime(anime, difficulty) {
  return getQuestionByTopic(anime, difficulty, 1);
}