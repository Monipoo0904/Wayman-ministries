// All content below is taken from wayman.org and its ministry pages.

export const channelId = "UC88lMrs-898tVFWKxs_9LSA";

export const links = {
  live: "https://wayman.org/ministries/?page_id=139",
  give: "https://wayman.org/ministries/?page_id=175",
  calendar: "https://wayman.org/ministries/?page_id=157",
  youtube: `https://www.youtube.com/channel/${channelId}`,
  // Existing Vanco giving page — used when Stripe isn't configured
  vanco: "https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=Fi1giPL8kwX_Oe1AO50jRiEtqNj9vltGrbTz0bnMDBShjXsUKRLlmI4vCU4-rZZZ2EvVVAEjqawDomKT1pbouZC09bmPsAJQUclLON5xk_A=&ver=3",
  facebook: "https://www.facebook.com/WaymanMinistries/",
  academy: "http://www.waymanacademy.org/",
  cdc: "http://www.waymancommunity.org/",
};

export const contact = {
  email: "temple@wayman.org",
  // From the church's "Ways to Give" graphic
  mailingAddress: ["Wayman Temple AME Church", "P.O. Box 56017", "Jacksonville, FL 32241"],
};

export const campuses = [
  {
    name: "Wayman Temple South",
    short: "South Campus",
    formerly: "Wayman Chapel AME Church",
    formerlyLogo: "/images/logo-wayman-chapel.png",
    photo: "/images/sanctuary-south.jpg",
    desc: "We are a family-oriented church located on Jacksonville’s historic Southside. At Wayman, we are excited to share with you all the great ministries and activities as we begin our era of new beginnings.",
    time: "Sundays · 10:00 AM",
    street: "8855 Sanchez Road",
    city: "Jacksonville, FL 32217",
    phone: "(904) 739-7500",
    phoneHref: "tel:+19047397500",
    fax: "(904) 739-5980",
    map: "https://maps.google.com/?q=8855+Sanchez+Road+Jacksonville+FL+32217",
  },
  {
    name: "Wayman Temple West",
    short: "West Campus",
    formerly: "Spirit of Life Worship Center",
    formerlyLogo: "/images/logo-spirit-of-life.png",
    photo: "/images/sanctuary-west.jpg",
    desc: "We are a family-oriented church located on Jacksonville’s Westside. At the WEST Campus, we are excited to share with you all the great ministries and activities as we begin our era of new beginnings.",
    time: "Sundays · 12:00 PM",
    street: "1176 LaBelle Street",
    city: "Jacksonville, FL 32205",
    phone: "(904) 693-1503",
    phoneHref: "tel:+19046931503",
    fax: "(904) 693-1127",
    map: "https://maps.google.com/?q=1176+LaBelle+Street+Jacksonville+FL+32205",
  },
];

export const serviceTimes = [
  { label: "South Campus", day: "Sunday", time: "10:00 AM" },
  { label: "West Campus", day: "Sunday", time: "12:00 PM" },
  { label: "Midweek Service", day: "Wednesday", time: "6:30 PM" },
];

export const prayerCall = {
  when: "Fridays · 7:00 AM",
  dial: "1-605-468-8001",
  dialHref: "tel:+16054688001",
  code: "860679",
};

export const purpose = [
  "To Welcome All",
  "To Learn God’s Ways",
  "To Do Work in the World",
  "To Win Others",
  "To Worship the Lord",
];

export const visionOfTheHouse = [
  "We Are A Church Of Love.",
  "We Are Committed And Consistent.",
  "We Are A Church Of Evangelism.",
  "We Are A Family Church.",
  "We Have A Spirit Of Excellence.",
  "We Are A Tithing Church.",
  "We Are An Obedient Church.",
  "We Are A Church With Character.",
  "We Are A Spirit-Filled Church.",
  "We Are A Church that Worships and Praises",
  "We Are A Preaching and Teaching Church",
  "We Are A Church that Forgives",
  "We Are A Praying and Fasting Church",
  "We Are A Church of Faith",
  "We Are A Timely Church",
  "We Are A Church of Relevance",
  "We Are A Church Of Order",
  "We Are A Church Of Community",
  "We Are A Church Of Prosperity",
  "We Are A Church That Honors Tradition",
];

export const givingQuote = "I don’t give to be blessed, I am blessed therefore I give.";

// Funds named on the church's "Ways to Give: Tithes & Offerings" graphic
export const givingFunds = ["Tithes", "Offerings"] as const;
