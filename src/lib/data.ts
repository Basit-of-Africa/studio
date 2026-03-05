export type PickupLine = {
  id: number;
  line: string;
  context: string;
  category: 'Cheesy' | 'Sincere' | 'Spiritual' | 'Funny';
};

export const pickupLines: PickupLine[] = [
  {
    id: 1,
    line: "Are you a prayer mat? Because I find myself wanting to be on you five times a day.",
    context: "Use with caution and a good sense of humor. Best for someone you already know well.",
    category: 'Cheesy'
  },
  {
    id: 2,
    line: "My love for you is like my iman, it only grows stronger.",
    context: "A sweet and sincere line. Good for expressing genuine feelings.",
    category: 'Sincere'
  },
  {
    id: 3,
    line: "Are you from Mecca? Because you're the direction of my Qibla.",
    context: "A classic cheesy line. Deliver with a smile and a wink.",
    category: 'Cheesy'
  },
  {
    id: 4,
    line: "I must be fasting, because I can't think of anything but you.",
    context: "Playful and light-hearted. Good for breaking the ice during Ramadan (or any time).",
    category: 'Funny'
  },
  {
    id: 5,
    line: "They say marriage is half of deen. Will you be my other half?",
    context: "This one is serious! Use only when you're ready to take the next step.",
    category: 'Sincere'
  },
  {
    id: 6,
    line: "Is your name Fajr? Because I want to wake up to you every day.",
    context: "Sweet and romantic. Shows commitment and a desire for a shared future.",
    category: 'Sincere'
  },
  {
    id: 7,
    line: "Are you Zamzam water? Because you're a miracle I've been praying for.",
    context: "Very romantic and spiritual. Best for a serious prospect.",
    category: 'Spiritual'
  },
  {
    id: 8,
    line: "Is it sunnah to look this good, or is it just you?",
    context: "Playful and complimentary. Good for a lighthearted flirtation.",
    category: 'Cheesy'
  },
  {
    id: 9,
    line: "I don't need a GPS, because I've already found the path to your heart.",
    context: "A bit cheesy but sweet. Focuses on finding the right direction together.",
    category: 'Cheesy'
  },
  {
    id: 10,
    line: "Are you a Surah? Because I want to memorize every bit of you.",
    context: "Deeply respectful and romantic. Use with someone who appreciates the beauty of the Quran.",
    category: 'Spiritual'
  },
  {
    id: 11,
    line: "My heart does tawaf around you.",
    context: "A strong metaphor for devotion. Use when you want to show someone they are your center.",
    category: 'Spiritual'
  },
  {
    id: 12,
    line: "I'd never play hide and seek with you, because someone like you is impossible to find again.",
    context: "A universal compliment tailored for a special person.",
    category: 'Sincere'
  },
  {
    id: 13,
    line: "You must be the moon on the 14th night, because you're completing my world.",
    context: "A poetic reference to the full moon. Very classical and elegant.",
    category: 'Sincere'
  },
  {
    id: 14,
    line: "Is your name Noor? Because you've brought so much light into my life.",
    context: "A classic and endearing play on the word 'Noor' (light).",
    category: 'Sincere'
  },
  {
    id: 15,
    line: "I was going to lower my gaze, but then I saw you and forgot everything else.",
    context: "A cheeky take on the concept of lowering the gaze. Use with a playful tone.",
    category: 'Funny'
  },
  {
    id: 16,
    line: "Are we in Jannah? Because I can't imagine anything more beautiful than this moment.",
    context: "High praise for a special moment. Best used in a romantic setting.",
    category: 'Spiritual'
  },
  {
    id: 17,
    line: "I'm not a scholar, but I know we're a match made in heaven.",
    context: "Simple, confident, and sweet.",
    category: 'Sincere'
  },
  {
    id: 18,
    line: "You're the answer to my Tahajjud prayers.",
    context: "Very spiritual and intimate. Implies that you've been searching for someone exactly like them.",
    category: 'Spiritual'
  },
  {
    id: 19,
    line: "If beauty was a sin, you'd be looking at a lot of istighfar.",
    context: "Witty and slightly edgy, while staying within the theme.",
    category: 'Funny'
  },
  {
    id: 20,
    line: "I'd travel across the desert just to share a date with you.",
    context: "A fun pun on the fruit and the social outing. Perfect for breaking the ice.",
    category: 'Funny'
  }
];