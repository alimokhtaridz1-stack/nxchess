// Owner-reviewed facts belong here; unconfirmed content stays explicitly marked.
export const site = {
  name: 'NX Chess',
  preview: true,
  contentApproved: false,
  email: '',
  phone: '+971557678025',
  phoneDisplay: '+971 55 767 8025',
  whatsapp: '971557678025',
  contactConfirmed: true,
  coaches: [],
  photo: 'https://images.pexels.com/photos/163427/chess-figure-game-play-163427.jpeg?auto=compress&fit=crop&w=1400&q=85',
  photoSource: 'https://www.pexels.com/photo/brown-and-black-wooden-chess-piece-163427/',
};

export const navigation = [
  ['/', 'Home'], ['/programs/', 'Programs'], ['/curriculum/', 'Curriculum'],
  ['/coaches/', 'Coaches'], ['/about/', 'About'], ['/faq/', 'FAQs'], ['/contact/', 'Contact us'],
];

export const stages = [
  { id: 'first-moves', name: 'First moves', short: 'Start with the board. Build from there.', for: 'New to chess', icon: '♙', topics: ['Board setup & piece movement', 'Check, checkmate & stalemate', 'Legal moves and captures'], practice: 'Set up the board and play a short, guided position.', outcomes: ['Move every piece legally.', 'Recognize the difference between checkmate and stalemate.'] },
  { id: 'good-habits', name: 'Build good habits', short: 'Give every move a reason.', for: 'Learning to play full games', icon: '♘', topics: ['Development & the center', 'King safety', 'Threats and undefended pieces'], practice: 'Compare two candidate moves and explain which one keeps your pieces safer.', outcomes: ['Explain a simple opening plan.', 'Check for immediate threats before moving.'] },
  { id: 'tactics', name: 'Spot tactics', short: 'See the possibilities in a position.', for: 'Ready for tactical patterns', icon: '♗', topics: ['Forks, pins & skewers', 'Discovered attacks', 'Elementary mating patterns'], practice: 'Solve a position, then show what happens after the opponent replies.', outcomes: ['Recognize common tactical motifs.', 'Check a short sequence of moves.'] },
  { id: 'planning', name: 'Make a plan', short: 'Connect your next move to a bigger idea.', for: 'Developing middlegame thinking', icon: '♖', topics: ['Piece activity & exchanges', 'Pawn structures', 'Weak squares & candidate moves'], practice: 'Describe a position and choose one useful thing to improve.', outcomes: ['Identify the main features of a position.', 'Connect a candidate move to a clear plan.'] },
  { id: 'review', name: 'Finish & review', short: 'Make the end of a game a new beginning.', for: 'Bringing the ideas together', icon: '♔', topics: ['Basic pawn endings & opposition', 'King activity & elementary mates', 'Time management & game review'], practice: 'Play a simplified ending, then annotate one decision from your game.', outcomes: ['Demonstrate selected basic endings.', 'Find a lesson to carry into the next game.'] },
];

export const programs = [
  { id: 'foundations', name: 'Chess foundations', label: 'A place to begin', range: 'Stages 01–02', icon: '♙', description: 'An introduction to the board, the pieces, and the small habits that make a game easier to understand.', audience: 'Learners exploring the rules and their first complete games.', focus: 'Legal moves, king safety, and opening principles.', stage: 'first-moves' },
  { id: 'developing-players', name: 'Developing players', label: 'Look a little deeper', range: 'Stages 03–04', icon: '♘', description: 'Explore tactical patterns and learn to connect individual moves to a thoughtful plan.', audience: 'Players who know the rules and want to understand their decisions.', focus: 'Tactics, piece activity, and evaluating candidate moves.', stage: 'tactics' },
  { id: 'guided-review', name: 'Guided game review', label: 'Learn from the whole game', range: 'Stage 05', icon: '♖', description: 'Bring your ideas together through endgames, reflection, and a closer look at the moves you played.', audience: 'Learners ready to reflect on complete games.', focus: 'Basic endings, time management, and reviewing decisions.', stage: 'review' },
];

export const faqs = [
  { group: 'Getting started', question: 'What should I share in my first message?', answer: 'A little about your chess experience, your interests, and any questions about lessons is enough. There is no need to send documents or sensitive student information.', link: ['/contact/', 'Start a conversation'] },
  { group: 'Getting started', question: 'Where should I begin if I am new to chess?', answer: 'Start by exploring First moves in the curriculum. It introduces the board, the pieces, and the basic rules. The proposed learning path is available to read without an account.', link: ['/curriculum/#first-moves', 'Explore First moves'] },
  { group: 'Getting started', question: 'Can I ask which starting level suits me?', answer: 'Yes. Tell us a little about your experience and what you would like to learn. You do not need to choose a level before getting in touch.', link: ['/contact/', 'Talk to NX Chess'] },
  { group: 'Programs & learning', question: 'What is the difference between programs and curriculum?', answer: 'Programs describe ways of organizing the learning. The curriculum describes the topics and progression within it. The program outlines shown in this preview are proposals, with availability still to be confirmed.' },
  { group: 'Programs & learning', question: 'Do I need an account to view the curriculum?', answer: 'No. Every curriculum stage is public. There is no login, registration, or member area on this website.' },
  { group: 'Lesson arrangements', question: 'Are lessons online or in person?', answer: 'Lesson formats and locations have not yet been confirmed for this preview. Contact NX Chess for the current arrangements.', link: ['/contact/', 'Ask about lesson formats'] },
  { group: 'Lesson arrangements', question: 'Where can I find ages, schedules, and fees?', answer: 'These details will be added after confirmation. Please ask NX Chess about the learner’s age group, suitable times, and current fees before making arrangements.', link: ['/contact/', 'Ask about availability'] },
  { group: 'Programs & learning', question: 'How could I recognize progress in my learning?', answer: 'The proposed curriculum includes practical outcomes, such as identifying a threat or explaining a plan. These offer concrete things to discuss with a coach. Any formal assessment or reporting arrangements still need confirmation.', link: ['/curriculum/', 'See the stage outcomes'] },
  { group: 'Lesson arrangements', question: 'Can I ask about private lessons, school groups, or tournament preparation?', answer: 'Yes. Tell us which format interests you and ask about current options. These are inquiry topics, not confirmed services or scheduled events.', link: ['/programs/', 'Explore learning pathways'] },
];
