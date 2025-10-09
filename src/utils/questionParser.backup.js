// Question data for Anime (Puzzle 1)
const animeQuestionsData = {
  easy: [
    {
      question: "[Demon Slayer] What is the name of Tanjiro Kamado's sister who was turned into a demon?",
      options: ["Kanao", "Nezuko", "Shinobu", "Mitsuri"],
      correctAnswer: "Nezuko"
    },
    {
      question: "[One Piece] What is the ultimate treasure that all pirates are searching for?",
      options: ["The All Blue", "The Poneglyphs", "The One Piece", "The Gomu Gomu no Mi"],
      correctAnswer: "The One Piece"
    },
    {
      question: "[Death Note] What must a person's name and face be known to kill them using the Death Note?",
      options: ["Name only", "Face only", "Name and Face", "Name and Date of Birth"],
      correctAnswer: "Name and Face"
    },
    {
      question: "[Chainsaw Man] What is the name of the main character who merges with his devil dog, Pochita?",
      options: ["Aki", "Power", "Denji", "Makima"],
      correctAnswer: "Denji"
    },
    {
      question: "[One Piece] Who is the captain of the Straw Hat Pirates?",
      options: ["Roronoa Zoro", "Vinsmoke Sanji", "Usopp", "Monkey D. Luffy"],
      correctAnswer: "Monkey D. Luffy"
    },
    {
      question: "[Demon Slayer] What do Demon Slayers use to kill demons?",
      options: ["Sunlight Blades", "Nichirin Blades", "Silver Swords", "Holy Water"],
      correctAnswer: "Nichirin Blades"
    },
    {
      question: "[Death Note] What is the name of the Shinigami who dropped the Death Note into the human world?",
      options: ["Rem", "Ryuk", "Sidoh", "Gelus"],
      correctAnswer: "Ryuk"
    },
    {
      question: "[Chainsaw Man] What animal is Power's beloved pet?",
      options: ["A dog", "A cat", "A bird", "A hamster"],
      correctAnswer: "A cat"
    },
    {
      question: "[One Piece] What kind of Devil Fruit did Luffy eat?",
      options: ["Flame-Flame Fruit", "Gum-Gum Fruit", "Chop-Chop Fruit", "Flower-Flower Fruit"],
      correctAnswer: "Gum-Gum Fruit"
    },
    {
      question: "[Demon Slayer] Who is the Hashira that uses Flame Breathing?",
      options: ["Giyu Tomioka", "Tengen Uzui", "Kyojuro Rengoku", "Muichiro Tokito"],
      correctAnswer: "Kyojuro Rengoku"
    }
  ],
  medium: [
    {
      question: "[Death Note] What is the false rule that Light Yagami makes Ryuk write in the Death Note to trick L?",
      options: ["The notebook will explode if touched by a god.", "If a person's name is misspelled four times, the user will die.", "The user must write a name every 30 days or they will die.", "If the owner doesn't use the notebook for 13 days, they die."],
      correctAnswer: "If the owner doesn't use the notebook for 13 days, they die."
    },
    {
      question: "[Chainsaw Man] Aki Hayakawa has a contract with the Fox Devil. What must he offer the Fox Devil to summon its head?",
      options: ["A piece of his own flesh.", "A drop of his blood.", "Part of his remaining lifespan.", "A memory."],
      correctAnswer: "A piece of his own flesh."
    },
    {
      question: "[One Piece] What is the name of the first island the Straw Hats visit in the Grand Line?",
      options: ["Alabasta", "Drum Island", "Whiskey Peak", "Little Garden"],
      correctAnswer: "Whiskey Peak"
    },
    {
      question: "[Demon Slayer] What is the name of the final selection process for becoming a Demon Slayer?",
      options: ["The Hashira Exam", "The Wisteria Trial", "The Final Selection", "The Mountain's Test"],
      correctAnswer: "The Final Selection"
    },
    {
      question: "[Death Note] What is Misa Amane's Shinigami's name?",
      options: ["Ryuk", "Sidoh", "Gelus", "Rem"],
      correctAnswer: "Rem"
    },
    {
      question: "[One Piece] Who was the original owner of Zoro's cursed sword, Sandai Kitetsu?",
      options: ["Kuina", "Ipponmatsu", "Tashigi", "Kozuki Oden"],
      correctAnswer: "Ipponmatsu"
    },
    {
      question: "[Chainsaw Man] What specific devil is Makima trying to control Denji to defeat?",
      options: ["The Gun Devil", "The Bomb Devil", "The Darkness Devil", "The Eternity Devil"],
      correctAnswer: "The Gun Devil"
    },
    {
      question: "[Demon Slayer] What is Inosuke Hashibira's unique breathing style that he created himself?",
      options: ["Beast Breathing", "Wind Breathing", "Mountain Breathing", "Boar Breathing"],
      correctAnswer: "Beast Breathing"
    },
    {
      question: "[One Piece] What is Sanji's ultimate goal?",
      options: ["To become the King of the Pirates.", "To find the All Blue.", "To map the entire world.", "To become the world's greatest swordsman."],
      correctAnswer: "To find the All Blue."
    },
    {
      question: "[Death Note] What alias does L use when he enrolls in the same university as Light?",
      options: ["Ryuga Hideki", "L-Prime", "Hitoshi Demegawa", "Deneuve"],
      correctAnswer: "Ryuga Hideki"
    },
    {
      question: "[Demon Slayer] What is the name of the demon that Tanjiro, Zenitsu, and Inosuke fight on the Mugen Train?",
      options: ["Akaza", "Daki", "Gyutaro", "Enmu"],
      correctAnswer: "Enmu"
    },
    {
      question: "[Chainsaw Man] The Katana Man is a hybrid. Who was his original human identity?",
      options: ["The grandson of a Yakuza boss Denji killed.", "Aki's former partner.", "A Public Safety Devil Hunter from another division.", "A random civilian who made a contract."],
      correctAnswer: "The grandson of a Yakuza boss Denji killed."
    },
    {
      question: "[One Piece] In the Arlong Park arc, what does Nami steal from the Straw Hats to give to Arlong?",
      options: ["Their ship, the Going Merry.", "All of their treasure.", "Luffy's straw hat.", "Sanji's cooking recipes."],
      correctAnswer: "Their ship, the Going Merry."
    },
    {
      question: "[Death Note] How many years of a person's remaining lifespan does a Shinigami Eye deal cost?",
      options: ["One year.", "Ten years.", "All of it.", "Half of it."],
      correctAnswer: "Half of it."
    },
    {
      question: "[Demon Slayer] Who is the creator of all demons and the primary antagonist?",
      options: ["Muzan Kibutsuji", "Kokushibo", "Douma", "Akaza"],
      correctAnswer: "Muzan Kibutsuji"
    },
    {
      question: "[Chainsaw Man] What is the name of the devil that resides in Aki's right eye, allowing him to see the future?",
      options: ["The Curse Devil", "The Future Devil", "The Prophecy Devil", "The Vision Devil"],
      correctAnswer: "The Future Devil"
    },
    {
      question: "[One Piece] What is the name of Dr. Hiriluk's medical research that Chopper inherited?",
      options: ["The Panacea", "The Cure-All Drug", "The Sakura Kingdom", "The Cherry Blossom research"],
      correctAnswer: "The Cherry Blossom research"
    },
    {
      question: "[Demon Slayer] Which Hashira has a talking crow named Ginko?",
      options: ["Shinobu Kocho", "Mitsuri Kanroji", "Giyu Tomioka", "Muichiro Tokito"],
      correctAnswer: "Muichiro Tokito"
    },
    {
      question: "[Death Note] What is Near's real name?",
      options: ["Mihael Keehl", "Mail Jeevas", "Nate River", "Teru Mikami"],
      correctAnswer: "Nate River"
    },
    {
      question: "[One Piece] What is the name of the giant ship that serves as the base for the Baroque Works organization in Alabasta?",
      options: ["Thriller Bark", "Oro Jackson", "Going Luffy-senpai", "The Going Merry"],
      correctAnswer: "Going Luffy-senpai"
    }
  ],
  hard: [
    {
      question: "[Chainsaw Man] What phrase does the Future Devil repeat when it appears before Aki?",
      options: ["The future is coming!", "The future rules!", "The future is best!", "Your death will be gruesome!"],
      correctAnswer: "The future rules!"
    },
    {
      question: "[Death Note] Who was the original owner of the Death Note that Sidoh came to the human world to retrieve?",
      options: ["Light Yagami", "Kyosuke Higuchi", "Mello", "Jack Neylon"],
      correctAnswer: "Jack Neylon"
    },
    {
      question: "[One Piece] What is the name of the giant, sentient island that the Straw Hats encounter in the New World, which is home to Zou?",
      options: ["Punk Hazard", "Dressrosa", "Zunesha", "Raftel"],
      correctAnswer: "Zunesha"
    },
    {
      question: "[Demon Slayer] What is the name of the flower Muzan is searching for, which he believes can grant him immunity to sunlight?",
      options: ["The Red Spider Lily", "The Golden Orchid", "The Blue Spider Lily", "The Moonpetal"],
      correctAnswer: "The Blue Spider Lily"
    },
    {
      question: "[Death Note] What is the name of the company where Kyosuke Higuchi, the third Kira, worked?",
      options: ["The Yotsuba Group", "The SPK", "Wammy's House", "To-Oh University"],
      correctAnswer: "The Yotsuba Group"
    },
    {
      question: "[One Piece] What is the name of the \"D\" in Gol D. Roger's name originally thought to be?",
      options: ["It was never speculated.", "Gold.", "Dragon.", "Danger."],
      correctAnswer: "Gold."
    },
    {
      question: "[Chainsaw Man] Santa Claus is a Devil that uses dolls. What country was the \"Santa Claus\" identity originally from?",
      options: ["Japan", "America", "Russia", "Germany"],
      correctAnswer: "Germany"
    },
    {
      question: "[Demon Slayer] Before becoming a demon, what was Kokushibo's human name as a Demon Slayer?",
      options: ["Yoriichi Tsugikuni", "Sanemi Shinazugawa", "Michikatsu Tsugikuni", "Gyomei Himejima"],
      correctAnswer: "Michikatsu Tsugikuni"
    },
    {
      question: "[One Piece] What is the full name of the weapon Franky designed that was based on the Ancient Weapon Pluton's blueprints?",
      options: ["The Gaon Cannon", "The Thousand Sunny", "The Battle Franky 38", "The Puffing Tom"],
      correctAnswer: "The Battle Franky 38"
    },
    {
      question: "[Death Note] What is the maximum number of pages a Shinigami can give to a human from their own Death Note?",
      options: ["One", "Six", "Thirteen", "There is no limit."],
      correctAnswer: "Six"
    }
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

// Get available anime names
export function getAvailableAnimes() {
  const animes = new Set();
  
  [...questionsData.easy, ...questionsData.medium, ...questionsData.hard].forEach(q => {
    const match = q.question.match(/\[(.*?)\]/);
    if (match) {
      animes.add(match[1]);
    }
  });
  
  return Array.from(animes);
}

// Get questions for a specific anime and difficulty
export function getQuestionByAnime(anime, difficulty) {
  const questions = questionsData[difficulty] || [];
  const animeQuestions = questions.filter(q => q.question.includes(`[${anime}]`));
  
  if (animeQuestions.length === 0) return null;
  
  const randomQuestion = animeQuestions[Math.floor(Math.random() * animeQuestions.length)];
  const shuffledOptions = shuffleArray(randomQuestion.options);
  const correctIndex = shuffledOptions.findIndex(option => option === randomQuestion.correctAnswer);
  
  return {
    question: randomQuestion.question,
    options: shuffledOptions,
    correctIndex: correctIndex,
    difficulty: difficulty
  };
}

// Generate a set of 4 questions: 1 easy, 2 medium, 1 hard
export function generatePuzzleQuestions() {
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