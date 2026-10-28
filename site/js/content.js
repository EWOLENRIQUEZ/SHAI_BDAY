/**
 * Birthday Love Letter Template — editable content
 *
 * Change the values below, save the file, and refresh the page.
 * Keep photo and music paths relative to site/index.html. User-provided text is
 * inserted with textContent by main.js; HTML in these strings is not interpreted.
 */
window.SITE_CONTENT = {
  pageTitle: "A Birthday Letter for Shaina!",
  description: "A customizable floral birthday greeting, photo gallery, and heartfelt letter template.",

  occasion: "Happy Birthday",
  recipientName: "Shaina!",
  heroEyebrow: "A little celebration for you",
  heroSubtitle: "Dear Shaina, I hope your birthday is filled with love, laughter, and all the things that make you happiest. You deserve the best on your special day and always.",
  galleryEyebrow: "",
  galleryHeading: "A little gallery of you",
  photos: [
    {
      src: "assets/photos/shai-pic-1.jpg",
      alt: "Floral placeholder labeled Add photo 1",
      caption: "",
      date: ""
    },
    {
      src: "assets/photos/shai-pic-2.jpg",
      alt: "Floral placeholder labeled Add photo 2",
      caption: "",
      date: ""
    },
    {
      src: "assets/photos/shai-pic-3.png",
      alt: "Floral placeholder labeled Add photo 3",
      caption: "",
      date: ""
    },
    {
      src: "assets/photos/shai-pic-4.png",
      alt: "Floral placeholder labeled Add photo 4",
      caption: "",
      date: ""
    }
  ],

  letterDate: "NOVEMBER 04 ,2026",
  salutation: "My dearest Shai,",
  letterParagraphs: [
    "While composing this, I spent a lot of time thinking about how to structure all the letters of the alphabet during these insomniac nights. But it seems that I can't muster a word to say to you. Truth be told, words can't capture what ought to be a feeling, because I am beyond proud of what you’ve become and what you will be. So please bear with me, as writing letters is not my strongest suit. ‎.",
    " ‎It's been a while, so how have you been? ‎ ‎Did you know you are one of the people I always look up to? The way you carry yourself,  the way you present, and just simply the way you talk. It was a privilege to know you, its fascinating almost abstract knowing different sides of you.  It's like imagining a canvas that has a plethora of symbolism. But for what else matters these words than your own definition? ‎.",
    "‎I don't have a clue on what you are doing lately but I am certain that I am always so proud of you. Reminiscing back our SHS days feels like a rushing river, for youth should drive past in a fleeting moment to gain and lose anew. But that doesn't imply you have to rush,  we just have to enjoy those little moments. Rough days were just a measly  bumps, and its important to know that the years weight were not yours alone. Remember looking  ahead may also mean looking right beside you. And please cut yourself a slack and take care yourself always. ‎"
  ],
  signature: "P.S. I'll scream the loudest for you too.",
  footerText: "HAPPY BIRTHDAY, SHAI!",

  petals: {
    enabled: true,
    count: 24,
    colors: ["#ed9fb1", "#f5bdc9", "#df879d", "#f8d7de"]
  },
  confetti: {
    enabled: true,
    count: 90,
    colors: ["#bc6f83", "#d99856", "#f0b6c3", "#7f9b76", "#f4d7a7"]
  },

  // Music stays off until enabled and given a file. Only publish audio you are licensed to share.
  music: {
    enabled: false,
    file: "",
    title: "Your licensed song",
    delayedPlayback: {
      enabled: true,
      delayMs: 3000
    }
  }
};
