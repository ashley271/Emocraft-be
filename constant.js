const EMOTION_LABEL = {
    SERENITY: "serenity",
    JOY: "joy",
    ECSTASY: "ecstasy",
    ACCEPTANCE: "acceptance",
    TRUST: "trust",
    ADMIRATION: "admiration",
    // APPREHENSION: "apprehension",
    DISTRESSED: "distressed",
    FEAR: "fear",
    TERROR: "terror",
    DISTRACTION: "distraction",
    SURPRISE: "surprise",
    AMAZEMENT: "amazement",
    PENSIVENESS: "pensiveness",
    SADNESS: "sadness",
    GRIEF: "grief",
    BOREDOM: "boredom",
    DISGUST: "disgust",
    LOATHING: "loathing",
    ANNOYANCE: "annoyance",
    ANGER: "anger",
    RAGE: "rage",
    INTEREST: "interest",
    ANTICIPATION: "anticipation",
    VIGILANCE: "vigilance",
};

const EMOTION_DIMENSION = {
    [EMOTION_LABEL.SERENITY]: 1,
    [EMOTION_LABEL.JOY]: 1,
    [EMOTION_LABEL.ECSTASY]: 1,
    [EMOTION_LABEL.ACCEPTANCE]: 2,
    [EMOTION_LABEL.ADMIRATION]: 2,
    [EMOTION_LABEL.TRUST]: 2,
    [EMOTION_LABEL.FEAR]: 3,
    // [EMOTION_LABEL.APPREHENSION]: 3,
    [EMOTION_LABEL.DISTRESSED]: 3,
    [EMOTION_LABEL.TERROR]: 3,
    [EMOTION_LABEL.AMAZEMENT]: 4,
    [EMOTION_LABEL.SURPRISE]: 4,
    [EMOTION_LABEL.DISTRACTION]: 4,
    [EMOTION_LABEL.PENSIVENESS]: 5,
    [EMOTION_LABEL.SADNESS]: 5,
    [EMOTION_LABEL.GRIEF]: 5,
    [EMOTION_LABEL.BOREDOM]: 6,
    [EMOTION_LABEL.DISGUST]: 6,
    [EMOTION_LABEL.LOATHING]: 6,
    [EMOTION_LABEL.ANNOYANCE]: 7,
    [EMOTION_LABEL.ANGER]: 7,
    [EMOTION_LABEL.RAGE]: 7,
    [EMOTION_LABEL.INTEREST]: 8,
    [EMOTION_LABEL.ANTICIPATION]: 8,
    [EMOTION_LABEL.VIGILANCE]: 8,
};

const PHASE_LABEL = {
    PHASE_1: "beginning",
    PHASE_2: "emotion_classify",
    PHASE_4: "reflect_negative_emotion",
    PHASE_5: "reflect_positive_emotion",
    PHASE_6: "goodbye",
};

const GPT = {
    MODEL: "gpt-4o-2024-08-06",
    MODEL_USER: "gpt-4o-mini",
};

const PREDEFINED_LOCATION = {
    "Home": "home",
    "Classroom": "classroom",
    "Dormitory": "dormitory",
    "Library": "library",
    "Restaurant": "restaurant",
    "Cafe": "cafe",
    "Pub": "pub",
    "Club room": "club room",
    "Laboratory": "laboratory",
    "Place for exercise": "place for exercise",
    "Place for leisure": "place for leisure",
    "Outdoor": "outdoor",
    "Place for part-time job": "place for part-time job",
    "Public transportation": "public transportation",
};

const PREDEFINED_ACTIVITY = {
    "Class": "class",
    "Studying": "studying",
    "Research": "research",
    "Resting": "resting",
    "Meeting": "meeting",
    "Eating": "eating",
    "Drinking": "drinking",
    "Part-time work": "part-time work",
    "Club activity": "club activity",
    "Socializing": "socializing",
    "Leisure activity": "leisure activity",
    "Exercise": "exercise",
    "Moving": "moving",
};

const PREDEFINED_PEOPLE = {
    "Alone": "alone",
    "Family": "family",
    "Boyfriend/Girlfriend": "boyfriend/girlfriend",
    "Roommate": "roommate",
    "Friend": "friend",
    "Colleague": "colleague",
    "Professor": "professor",
};

const TIMES_OF_DAY = {
    "morning": "morning",
    "noon": "noon",
    "afternoon": "afternoon",
    "evening": "evening",
    "night": "night",
    "dawn": "dawn",
    "all day": "all day",
};

module.exports = {
    EMOTION_LABEL,
    PHASE_LABEL,
    EMOTION_DIMENSION,
    GPT,
    PREDEFINED_LOCATION,
    PREDEFINED_ACTIVITY,
    PREDEFINED_PEOPLE,
    TIMES_OF_DAY,
};