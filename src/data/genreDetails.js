// Comprehensive editorial data for movie genres supported by TMDB
export const GENRES_DATA = {
  28: {
    id: 28,
    name: 'Action',
    slug: 'action',
    tagline: 'High-octane spectacles, visceral choreography, and breathless stakes.',
    description:
      'Action cinema represents the pure visceral dynamism of storytelling. Driven by physical conflict, intricate stunt work, high-speed chases, and escalating tension, action films push characters to their physiological and moral limits. From tactical espionage thrillers and martial arts masterclasses to large-scale explosive blockbusters, the genre explores resilience, justice, and survival against overwhelming odds.',
    characteristics: [
      'Kinetic stunt choreography, martial arts, and practical physical performance',
      'High-stakes conflicts pitting determined protagonists against formidable adversaries',
      'Dynamic set pieces, car pursuits, ballistic confrontations, and ticking-clock tension',
      'Themes of perseverance, moral fortitude, personal sacrifice, and justice',
    ],
    subgenres: ['Martial Arts', 'Espionage / Spy Thriller', 'Superhero / Comic Adaptation', 'Heist Action', 'Disaster & Survival'],
    viewingTips: 'Best experienced with immersive multi-channel sound and high-framerate displays to appreciate intricate camera movement and sound design.',
    relatedGenreIds: [12, 53, 878, 80],
    guideSlug: 'best-action-movies',
  },
  12: {
    id: 12,
    name: 'Adventure',
    slug: 'adventure',
    tagline: 'Expansive odysseys, untamed frontiers, and perilous quests.',
    description:
      'Adventure films transport audiences beyond familiar horizons into uncharted territories. Whether scouring forgotten ancient ruins, navigating hostile wilderness, or embarking on epic interplanetary voyages, adventure stories center on discovery, curiosity, and camaraderie. Characters face extreme elements, hostile terrains, and internal doubts as they pursue prizes that often redefine their understanding of the world.',
    characteristics: [
      'Epic journeys across diverse, breathtaking geographical landscapes',
      'Quests driven by relics, forgotten history, exploration, or legendary treasure',
      'Resourceful protagonists overcoming natural hazards and cunning rivals',
      'Sense of wonder, discovery, and personal transformation through exploration',
    ],
    subgenres: ['Historical Expeditions', 'Treasure Hunting', 'Space Exploration', 'Wilderness Survival', 'Mythological Quests'],
    viewingTips: 'Ideal for viewers seeking sweeping cinematic landscapes, inspiring orchestral scores, and high-spirited escapism.',
    relatedGenreIds: [28, 14, 878, 16],
    guideSlug: 'how-to-find-a-good-movie',
  },
  16: {
    id: 16,
    name: 'Animation',
    slug: 'animation',
    tagline: 'Boundless imagination, striking visual artistry, and universal storytelling.',
    description:
      'Animation is an expressive artistic medium rather than merely a genre, capable of conveying profound emotional depth, satirical wit, and fantastical realms unconstrained by the laws of physics. From hand-drawn traditional cel animation and Japanese anime to state-of-the-art 3D computer rendering and stop-motion puppetry, animation speaks universally across all age demographics.',
    characteristics: [
      'Diverse artistic styles ranging from painterly 2D to photorealistic 3D and claymation',
      'Visual metaphors and imaginative world-building unfettered by live-action physical limits',
      'Multi-layered narratives crafted to engage both younger audiences and discerning adults',
      'Expressive vocal performances that bring stylized character designs to vibrant life',
    ],
    subgenres: ['Family Animation', 'Adult Animated Drama / Satire', 'Anime / Manga Adaptation', 'Stop-Motion / Claymation', 'Experimental Shorts'],
    viewingTips: 'Look beyond the surface aesthetic to appreciate color theory, lighting craft, and character animation nuances.',
    relatedGenreIds: [10751, 14, 12, 35],
    guideSlug: 'best-movies-for-family-movie-night',
  },
  35: {
    id: 35,
    name: 'Comedy',
    slug: 'comedy',
    tagline: 'Laughter, sharp wit, biting satire, and joyous human absurdity.',
    description:
      'Comedy holds a funhouse mirror up to human nature, illuminating our insecurities, social hypocrisies, and eccentricities through humor. From quick-witted screwball banter and observational satire to physical slapstick and dark existential irony, comedy remains one of the most culturally revealing and therapeutic forms of cinema.',
    characteristics: [
      'Impeccable comedic timing, subverted expectations, and verbal wordplay',
      'Relatable character flaws, awkward social situations, and comedic escalation',
      'Cultural commentary that uses humor to critique societal norms and behaviors',
      'Cathartic emotional release through communal laughter and empathy',
    ],
    subgenres: ['Romantic Comedy (Rom-Com)', 'Dark / Black Comedy', 'Satire & Parody', 'Slapstick / Physical Comedy', 'Buddy Comedy'],
    viewingTips: 'Comedies shine brightest when watched in communal settings where shared laughter enhances the comedic pacing.',
    relatedGenreIds: [10749, 18, 10751, 16],
    guideSlug: 'best-comedy-movies',
  },
  80: {
    id: 80,
    name: 'Crime',
    slug: 'crime',
    tagline: 'Shadowy underworlds, moral dilemmas, and intricate legal cat-and-mouse games.',
    description:
      'Crime films delve into the underbelly of society, examining what drives individuals to breach the social contract. Spanning gritty gangster sagas, elaborate bank heists, hardboiled detective mysteries, and legal courtroom thrillers, crime cinema scrutinizes ambition, corruption, loyalty, and the complex gray zone between law and morality.',
    characteristics: [
      'Exploration of institutional corruption, organized syndicates, and outlaw subcultures',
      'Procedural investigation, forensic deduction, and forensic chess matches',
      'Moral ambiguity where lines between law enforcement and criminals often blur',
      'Tense interrogations, calculated betrayals, and high-risk criminal operations',
    ],
    subgenres: ['Mob / Gangster Epics', 'Heist & Caper', 'True Crime & Biopics', 'Police Procedural', 'Neo-Noir Crime'],
    viewingTips: 'Pay close attention to narrative breadcrumbs, character motivations, and moral compromises.',
    relatedGenreIds: [9648, 53, 18, 28],
    guideSlug: 'best-mystery-movies',
  },
  99: {
    id: 99,
    name: 'Documentary',
    slug: 'documentary',
    tagline: 'Real-world truths, historical revelations, and investigative insights.',
    description:
      'Documentary filmmaking captures the untamed reality of our world. Through investigative journalism, archival discoveries, observational verité, and intimate personal portraits, documentaries inform, provoke, and inspire. They challenge preconceived notions, uncover systemic injustices, and celebrate extraordinary human resilience.',
    characteristics: [
      'Factual investigations based on authentic interviews, primary sources, and verified archives',
      'Direct cinema and verité recording capturing candid, unscripted human emotion',
      'Illuminating sociological, environmental, political, and scientific phenomena',
      'Rigorous investigative inquiry designed to inform, educate, and provoke societal discourse',
    ],
    subgenres: ['Investigative Journalism', 'Nature & Wildlife', 'Historical Retrospectives', 'Biographical Portraits', 'Social & Political Activism'],
    viewingTips: 'Complement your viewing by checking reputable supplementary journalism and source documentation.',
    relatedGenreIds: [36, 18, 10402],
    guideSlug: 'how-to-find-a-good-movie',
  },
  18: {
    id: 18,
    name: 'Drama',
    slug: 'drama',
    tagline: 'Emotional depth, authentic human vulnerability, and profound life journeys.',
    description:
      'Drama forms the bedrock of narrative cinema. Focusing on character development, intimate relationships, and internal moral dilemmas, drama explores the profound complexities of human existence. From quiet family portraits and biographical triumphs to systemic tragedies, drama offers an empathetic window into diverse lives and experiences.',
    characteristics: [
      'Nuanced, authentic character development driven by internal conflict and ethical decisions',
      'Intimate dialogue, lingering moments of vulnerability, and emotional resonance',
      'Realistic exploration of familial, societal, romantic, and occupational challenges',
      'Emphasis on emotional authenticity over sensationalism or external spectacle',
    ],
    subgenres: ['Family & Relationship Drama', 'Biographical Drama', 'Legal / Courtroom Drama', 'Historical & Period Drama', 'Psychological Character Study'],
    viewingTips: 'Give dramatic films your full, undivided attention to catch quiet subtleties in performance and subtext.',
    relatedGenreIds: [10749, 36, 80, 53],
    guideSlug: 'how-movie-ratings-work',
  },
  10751: {
    id: 10751,
    name: 'Family',
    slug: 'family',
    tagline: 'Heartfelt, cross-generational cinema that brings households together.',
    description:
      'Family films are masterfully engineered to entertain diverse audiences spanning grandparents to young children. Combining wholesome adventure, relatable developmental milestones, emotional warmth, and moral growth, family films cultivate meaningful shared memories and thoughtful conversations.',
    characteristics: [
      'Accessible, age-appropriate themes focusing on kindness, teamwork, and family bonds',
      'Multi-tiered humor and storytelling appealing to adults while delighting children',
      'Vibrant visual palettes, engaging musical motifs, and memorable characters',
      'Uplifting resolutions that celebrate empathy, courage, and understanding',
    ],
    subgenres: ['Animated Family Fun', 'Live-Action Animal Tales', 'Holiday Classics', 'Coming-of-Age Journeys', 'Magical Fantasy'],
    viewingTips: 'Ideal for weekend family movie nights with popcorn and post-film discussions about character choices.',
    relatedGenreIds: [16, 12, 35, 14],
    guideSlug: 'best-movies-for-family-movie-night',
  },
  14: {
    id: 14,
    name: 'Fantasy',
    slug: 'fantasy',
    tagline: 'Mythical realms, ancient sorcery, and extraordinary legendary quests.',
    description:
      'Fantasy invites audiences into realms governed by magic, mythical beings, and enchanted destinies. Drawing from age-old folklore, epic literature, and visionary world-building, fantasy films explore timeless allegories of power, corruption, destiny, and the perennial battle between hope and darkness.',
    characteristics: [
      'Richly detailed fictional worlds complete with custom mythologies, languages, and cultures',
      'Magical systems, enchanted artifacts, mythical creatures, and ancient curses',
      'Heroic journeys of ordinary individuals rising to meet extraordinary prophesied tasks',
      'Allegorical explorations of courage, sacrifice, and the corrupting nature of absolute power',
    ],
    subgenres: ['High / Epic Fantasy', 'Dark Fantasy', 'Urban / Contemporary Fantasy', 'Fairy Tale Reimagining', 'Sword & Sorcery'],
    viewingTips: 'Immerse yourself in the production design, practical creature suits, and sweep of the musical score.',
    relatedGenreIds: [12, 16, 878, 28],
    guideSlug: 'how-to-find-a-good-movie',
  },
  36: {
    id: 36,
    name: 'History',
    slug: 'history',
    tagline: 'Pivotal historical epochs, authentic recreation, and monumental moments.',
    description:
      'Historical films recreate the defining moments, ideological struggles, and influential figures that shaped our modern civilization. By blending meticulous period-accurate production design with compelling dramatic narratives, history films bridge the gap between textbook chronicles and lived human experience.',
    characteristics: [
      'Meticulous historical recreation of costumes, architecture, language, and cultural mores',
      'Dramatization of real events, geopolitical turning points, and cultural shifts',
      'Focus on the human cost and unintended consequences of monumental leadership decisions',
      'Philosophical reflection on memory, truth, and historical legacy',
    ],
    subgenres: ['War Retrospectives', 'Royal Court Intrigue', 'Civil Rights Chronicles', 'Ancient Antiquity Epics', 'Industrial & Scientific Breakthroughs'],
    viewingTips: 'Consider reading a brief historical timeline of the event before or after watching to deepen appreciation.',
    relatedGenreIds: [18, 10752, 99],
    guideSlug: 'how-to-find-a-good-movie',
  },
  27: {
    id: 27,
    name: 'Horror',
    slug: 'horror',
    tagline: 'Primal fears, atmospheric dread, and survival against the unknown.',
    description:
      'Horror taps directly into our deepest psychological anxieties, primal survival instincts, and fear of the unknown. Through unsettling atmosphere, shocking visual disruptions, psychological dread, and monstrous incarnations, horror films allow audiences to confront terror within a controlled, cathartic artistic environment.',
    characteristics: [
      'Mastery of suspense, tension release, sound design, and shadows',
      'Confrontation with supernatural entities, psychological breakdowns, or monstrous forces',
      'Exploration of societal anxieties, bodily vulnerability, and taboo themes',
      'Cathartic confrontation with mortality, survival, and dread',
    ],
    subgenres: ['Psychological Horror', 'Supernatural / Paranormal', 'Slasher & Monster', 'Body Horror', 'Folk Horror & Occult'],
    viewingTips: 'Best watched in a darkened room with high-fidelity headphones to appreciate the intricate acoustic design.',
    relatedGenreIds: [53, 9648, 878],
    guideSlug: 'best-thriller-movies',
  },
  10402: {
    id: 10402,
    name: 'Music',
    slug: 'music',
    tagline: 'Melodic storytelling, legendary concerts, and the sonic heartbeat of cinema.',
    description:
      'Music films celebrate the emotional power of melody, rhythm, and song. Encompassing extravagant theatrical musicals, backstage rock biopics, intimate singer-songwriter portraits, and legendary live concert films, this genre demonstrates how song elevates narrative storytelling to ecstatic heights.',
    characteristics: [
      'Original musical compositions, electrifying choreography, and lyrical dialogue',
      'Exploration of artistic inspiration, creative struggles, and stage performance',
      'Dynamic audio mixing prioritizing vocal clarity and orchestral dynamics',
      'Celebration of cultural movements sparked by musical innovation',
    ],
    subgenres: ['Broadway Musicals', 'Rock & Pop Biopics', 'Concert Films', 'Jukebox Musicals', 'Opera & Classical Retrospectives'],
    viewingTips: 'Ensure audio settings are tuned for dynamic range to experience full vocal nuance and bass impact.',
    relatedGenreIds: [18, 10749, 35],
    guideSlug: 'how-to-find-a-good-movie',
  },
  9648: {
    id: 9648,
    name: 'Mystery',
    slug: 'mystery',
    tagline: 'Intricate puzzle boxes, elusive culprits, and deduction against the clock.',
    description:
      'Mystery cinema challenges the viewer to become an active detective. Centering on unsolved crimes, enigmatic disappearances, and baffling supernatural occurrences, mystery films construct elaborate puzzles where every shadow, offhand comment, and misplaced object holds potential significance.',
    characteristics: [
      'Carefully placed clues, narrative misdirection, and ingenious red herrings',
      'Cerebral protagonists using inductive reasoning, interrogation, and observation',
      'Mounting suspense as deadlines approach and secret motives unravel',
      'Satisfying, logically cohesive revelations that recontextualize earlier scenes',
    ],
    subgenres: ['Whodunit & Parlor Mysteries', 'Neo-Noir & Hardboiled Private Eyes', 'Psychological Puzzlers', 'Conspiracy Mysteries', 'Locked-Room Riddles'],
    viewingTips: 'Avoid spoilers at all costs; watch actively and keep mental notes on background details and character alibis.',
    relatedGenreIds: [80, 53, 18],
    guideSlug: 'best-mystery-movies',
  },
  10749: {
    id: 10749,
    name: 'Romance',
    slug: 'romance',
    tagline: 'Passion, intimate connection, heartbreak, and enduring devotion.',
    description:
      'Romance films explore the intoxicating highs and agonizing vulnerabilities of human love. Whether charting star-crossed lovers navigating historical divides, witty modern courtship, or enduring marriages weathering turbulent storms, romance reminds us of the transformative power of emotional intimacy.',
    characteristics: [
      'Palpable on-screen chemistry and evolving emotional intimacy between characters',
      'Conflict stemming from societal barriers, internal insecurities, or geographical separation',
      'Moments of romantic grandeur balanced by intimate, honest dialogue',
      'Universal exploration of attachment, sacrifice, vulnerability, and devotion',
    ],
    subgenres: ['Romantic Comedy', 'Period / Regency Romance', 'Tragic / Star-Crossed Love', 'Contemporary Romance', 'Second-Chance Drama'],
    viewingTips: 'Focus on subtle shifts in body language, shared glances, and character development as feelings mature.',
    relatedGenreIds: [35, 18, 10751],
    guideSlug: 'how-to-find-a-good-movie',
  },
  878: {
    id: 878,
    name: 'Science Fiction',
    slug: 'science-fiction',
    tagline: 'Speculative futures, revolutionary tech, cosmic frontiers, and existential questions.',
    description:
      'Science fiction extrapolates modern scientific principles, emerging technologies, and philosophical questions into visionary future scenarios. From dystopian cyberpunk megacities and first-contact extraterrestrial encounters to time-travel paradoxes and artificial intelligence dilemmas, sci-fi asks "what if?" to examine who we are today.',
    characteristics: [
      'Plausible technological extrapolations including AI, interstellar travel, and biotechnology',
      'Philosophical scrutiny of human consciousness, societal ethics, and technological reliance',
      'Imaginative production design depicting alien biospheres and futuristic architecture',
      'Thought experiments exploring the consequences of scientific overreach and existential change',
    ],
    subgenres: ['Hard Sci-Fi', 'Cyberpunk & Dystopian', 'Space Opera', 'Time Travel & Multiverse', 'First Contact & Alien Lore'],
    viewingTips: 'Embrace the conceptual ideas and scientific allegories as much as the groundbreaking visual effects.',
    relatedGenreIds: [28, 12, 14, 53],
    guideSlug: 'best-science-fiction-movies',
  },
  10770: {
    id: 10770,
    name: 'TV Movie',
    slug: 'tv-movie',
    tagline: 'Focused, accessible storytelling crafted specifically for the small screen.',
    description:
      'TV Movies represent feature-length narratives produced specifically for television and streaming broadcasting. They offer focused, compelling storytelling across varied genres, frequently tackling topical social issues, cozy mysteries, or character-driven dramas designed for accessible home viewing.',
    characteristics: [
      'Pacing optimized for focused, engaging home viewing without theatrical bloat',
      'Concentrated narratives highlighting strong ensemble dialogue and character chemistry',
      'Frequent adaptation of contemporary news events, best-selling fiction, or holiday themes',
      'High accessibility for casual viewing sessions and communal discussions',
    ],
    subgenres: ['Holiday Specials', 'Made-for-TV Thrillers', 'True Story Adaptations', 'Cozy Mysteries', 'Prestige Cable Dramas'],
    viewingTips: 'Great for weeknight viewing when you want a complete, self-contained story without a multi-hour commitment.',
    relatedGenreIds: [18, 35, 9648],
    guideSlug: 'how-to-find-a-good-movie',
  },
  53: {
    id: 53,
    name: 'Thriller',
    slug: 'thriller',
    tagline: 'Relentless suspense, psychological mind games, and edge-of-your-seat tension.',
    description:
      'Thrillers are engineered to keep viewer adrenaline pumping through unrelenting suspense, psychological mind games, and escalating danger. Whether following a framed protagonist racing against the clock, an undercover agent deep behind enemy lines, or a psychological cat-and-mouse duel, thrillers keep you glued to the screen.',
    characteristics: [
      'Pacing designed around ticking clocks, narrow escapes, and escalating jeopardy',
      'Psychological tension where characters operate under intense duress and paranoia',
      'Twists, turns, and shifting power dynamics keeping the viewer guessing',
      'Relentless atmosphere where safety is an illusion and every second counts',
    ],
    subgenres: ['Psychological Thriller', 'Political & Espionage Thriller', 'Erotic Thriller', 'Techno-Thriller', 'Survival Thriller'],
    viewingTips: 'Prepare for high heart rates; minimize outside distractions to stay caught in the film’s narrative grip.',
    relatedGenreIds: [80, 28, 9648, 27],
    guideSlug: 'best-thriller-movies',
  },
  10752: {
    id: 10752,
    name: 'War',
    slug: 'war',
    tagline: 'Battlefield brotherhood, tragic sacrifices, and the moral crucible of combat.',
    description:
      'War cinema portrays the harrowing reality of armed conflict, the bonds forged under fire, and the profound trauma inflicted on both soldiers and civilians. By balancing tactical combat realism with poignant reflections on humanity, war films honor sacrifice while cautioning against conflict.',
    characteristics: [
      'Visceral combat recreations showcasing tactical strategy, artillery, and chaos',
      'Exploration of comradeship, courage, battlefield ethics, and post-traumatic stress',
      'Humanitarian perspectives highlighting the devastating civilian toll of warfare',
      'Moral reflection on the causes, propaganda, and human cost of geopolitical strife',
    ],
    subgenres: ['World War Retrospectives', 'Anti-War Masterpieces', 'Submarine & Naval Warfare', 'POW Survival & Escape', 'Modern Asymmetric Conflict'],
    viewingTips: 'Best appreciated with an awareness of the historical context and a recognition of the real-world sacrifices portrayed.',
    relatedGenreIds: [36, 18, 28],
    guideSlug: 'how-to-find-a-good-movie',
  },
  37: {
    id: 37,
    name: 'Western',
    slug: 'western',
    tagline: 'Rugged frontiers, moral showdowns, and the legendary mythos of the wilderness.',
    description:
      'Westerns chronicle the rugged mythos of the early frontier, where law was contested and moral codes were tested against vast, unforgiving horizons. Through dusty saloon shootouts, lone wandering gunslingers, cattle drives, and clashes between wilderness and civilization, Westerns examine justice, honor, and American folklore.',
    characteristics: [
      'Iconic frontier iconography: saloons, dusty main streets, steam trains, and wide plains',
      'Moral ambiguity embodied by lone outlaws, weary lawmen, and rugged bounty hunters',
      'Tense showdowns and precision quick-draw gunfights built on prolonged anticipation',
      'Philosophical tension between untamed individual freedom and the encroaching rule of law',
    ],
    subgenres: ['Spaghetti Westerns', 'Revisionist Westerns', 'Classic Golden Age Westerns', 'Acid / Surrealist Westerns', 'Contemporary Neo-Westerns'],
    viewingTips: 'Appreciate the widescreen panoramic cinematography and iconic whistled/acoustic musical scores.',
    relatedGenreIds: [28, 12, 18, 36],
    guideSlug: 'best-action-movies',
  },
};

export const ALL_GENRES_LIST = Object.values(GENRES_DATA);

export function getGenreById(id) {
  const numericId = Number(id);
  return GENRES_DATA[numericId] || null;
}

export function getGenreBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return ALL_GENRES_LIST.find((g) => g.slug === normalized || g.name.toLowerCase() === normalized) || null;
}
