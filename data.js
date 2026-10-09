/* ============================================================
   EDIT EVERYTHING HERE — text, images and links.
   Images live in /images. Leave a url as "" to show "coming soon".
   ============================================================ */
window.SITE = {
  name: "Tahsin Shaba",
  roles: ["Content Creator", "Digital Influencer"],
  tiktokReach: "225K+ on TikTok",
  intro: "Fashion, lifestyle and everyday stories, shared in short-form video and photo.",

  // "Work With Me" button. Replace with a mailto: link when you have an email,
  // e.g. "mailto:hello@example.com"
  contact: {
    label: "Work With Me",
    href: "https://www.instagram.com/sabaa._aaaa",
    hint: "Message on Instagram"
  },

  footer: { text: "Content creator open to selected brand collaborations." },

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Collaborate", href: "#collaborate" },
    { label: "Socials", href: "#socials" }
  ],

  hero: { image: "images/hero.jpg", alt: "Tahsin Shaba smiling beside a green rickshaw", pos: "50% 25%" },

  work: {
    title: "What I Create",
    lead: "Styled, shot and edited by me.",
    items: [
      { title: "Lifestyle & Fashion", text: "Festive and everyday looks, in natural light.", image: "images/work-lifestyle.jpg", pos: "50% 25%", ratio: "3/4" },
      { title: "Reels & Short-form Video", text: "Playful, vertical-first storytelling.", image: "images/work-reels.jpg", pos: "50% 45%", ratio: "1/1" },
      { title: "Promotional Content", text: "Outfits shown on the street, in motion.", image: "images/work-promo.jpg", pos: "50% 30%", ratio: "4/5" },
      { title: "Social Media Content", text: "Photo sets made for feeds and stories.", image: "images/work-social.jpg", pos: "50% 25%", ratio: "4/5" },
      { title: "Brand Campaign Content", text: "Styled scenes that carry a brand's look.", image: "images/work-campaign.jpg", pos: "50% 55%", ratio: "3/4" },
      { title: "Product Features", text: "Clothing and accessories shown up close.", image: "images/work-product.jpg", pos: "50% 30%", ratio: "3/4" }
    ]
  },

  collab: {
    title: "Let's create something together",
    text: "Open to selected promotional and brand collaborations. I show your product the way I'd share it with my own audience.",
    items: [
      { icon: "reel", tag: "Instagram", title: "Reels", text: "Styled videos that show your product in real use." },
      { icon: "tiktok", tag: "TikTok", title: "TikTok Videos", text: "Casual, trend-aware clips." },
      { icon: "story", tag: "Instagram", title: "Story Sets", text: "A few frames with a link sticker." },
      { icon: "photo", tag: "Instagram", title: "Photo Posts", text: "Styled promotional photos." },
      { icon: "bag", tag: "Product", title: "Product Features", text: "I wear or use your product. UGC-style too." },
      { icon: "spark", tag: "Campaign", title: "Campaign Content", text: "Planned posts around a launch." },
      { icon: "badge", tag: "Partnership", title: "Brand Ambassador", text: "A longer partnership with brands I genuinely fit.", wide: true }
    ],
    banner: { image: "images/work-product.jpg", pos: "50% 78%", posDesktop: "50% 54%" },
    ctaTitle: "Interested in collaborating?",
    ctaLabel: "Let's Work Together"
  },

  socials: {
    title: "Find Me Online",
    items: [
      { platform: "Instagram", handle: "@sabaa._aaaa", url: "https://www.instagram.com/sabaa._aaaa", image: "images/social-instagram.jpg", pos: "50% 30%" },
      { platform: "TikTok", handle: "@sablaa_bablaa", url: "https://www.tiktok.com/@sablaa_bablaa", image: "images/social-tiktok.jpg", pos: "50% 20%" },
      { platform: "YouTube", handle: "@tahsinshaba_11", url: "https://youtube.com/@tahsinshaba_11", image: "images/social-youtube.jpg", pos: "50% 45%" }
    ]
  }
};
