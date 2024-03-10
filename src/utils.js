import {
  Disney,
  Evernote,
  Google,
  Intercom,
  Invision,
  Mailchimp,
  Microsoft,
  Paypal,
  Shopify,
  WIX,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
} from "./assets";

export const DashboardData = [
  {
    brandName: "WIX",
    brand: WIX,
    noOfChats: 2,
    description:
      "A website builder platform that allows users to create professional-looking websites with ease.",
    members: [user1, user2, user3, user4, user5],
    categories: [
      { name: "Automation", border: "rgb(124 58 237)", color: "rgb(196 181 253)" },
    ],
    tags: ["#DigitalTransformation", "#OnlineShopping"],
    nextMeeting: "in 30 minutes",
  },
  {
    brandName: "Shopify",
    brand: Shopify,
    description:
      "An e-commerce platform that enables businesses to create online stores and sell products.",
    members: [user6, user7, user8, user1, user2],
    categories: [
      { name: "E-commerce", border: "rgb(140 69 69)", color: "rgb(252 165 165)" },
      { name: "B2B", border: "rgb(191 118 59)", color: "rgb(253 186 116)" },
    ],
    tags: ["#OnlineShopping", "#DigitalTransformation"],
    nextMeeting: "Tomorrow",
  },
  {
    brandName: "Mailchimp",
    brand: Mailchimp,
    description:
      "A marketing automation platform and an email marketing service that helps businesses with their email campaigns.",
    members: [user6, user7, user8, user5, user4],
    categories: [
      { name: "SAAS", border: "rgb(50 168 82)", color: "rgb(134 239 172)" },
      { name: "Mobile", border: "rgb(202 138 4)", color: "rgb(253 224 71)" },
    ],
    tags: ["#TechInnovation", "#Cloud"],
    nextMeeting: "Tomorrow",
  },
  {
    brandName: "Paypal",
    brand: Paypal,
    noOfChats: 7,
    description:
      "An online payment platform that allows users to make secure online transactions.",
    members: [user8, user5, user4],
    categories: [
      { name: "Marketplace", border: "rgb(50 168 82)", color: "rgb(134 239 172)" },
    ],
    tags: ["#BuyOnline", "#OnlineMarketing"],
    nextMeeting: "in 6 hours",
  },
  {
    brandName: "Disney",
    brand: Disney,
    description:
      "A multinational entertainment and media conglomerate known for its film studios, theme parks, and media networks.",
    members: [user8, user5, user6, user2, user1, user3],
    categories: [
      { name: "B2B", border: "rgb(191 118 59)", color: "rgb(253 186 116)" },
      { name: "B2C", border: "rgb(111 188 76)", color: "rgb(190 242 100)" },
    ],
    tags: ["#BusinessPartnerships"],
    nextMeeting: "No contact",
  },
  {
    brandName: "Intercom",
    brand: Intercom,
    noOfChats: 9,
    description:
      "A customer communication platform that provides solutions for live chat, marketing automation, and customer support.",
    members: [user2, user1, user3],
    categories: [
      { name: "Technology", border: "rgb(86 130 205)", color: "rgb(147 197 253)" },
      { name: "SAAS", border: "rgb(50 168 82)", color: "rgb(134 239 172)" },
    ],
    tags: ["#SmartFinance", "#SAAS"],
    nextMeeting: "in 1 hour",
  },
  {
    brandName: "Google",
    brand: Google,
    noOfChats: 5,
    description:
      "A multinational technology company that specializes in Internet-related services and products, including search engines, online advertising technologies, and cloud computing.",
    members: [user2, user1, user3],
    categories: [
      { name: "Finance", border: "rgb(202 138 4)", color: "rgb(253 224 71)" },
      { name: "Automation", border: "rgb(124 58 237)", color: "rgb(196 181 253)" },
    ],
    tags: ["#SmartFinance", "#WorldFinance"],
    nextMeeting: "in 30 hours",
  },
  {
    brandName: "Evernote",
    brand: Evernote,
    description:
      "A note-taking app that allows users to capture and organize ideas, save images, and create to-do lists.",
    members: [user2, user1, user3],
    categories: [
      { name: "Transportation", border: "rgb(202 138 4)", color: "rgb(253 224 71)" },
    ],
    tags: ["#LogisticsTech", "#UX"],
    nextMeeting: "Next month",
  },
  {
    brandName: "Microsoft",
    brand: Microsoft,
    noOfChats: 14,
    description:
      "A multinational technology company that produces, licenses, and sells computer software, consumer electronics, and personal computers.",
    members: [user2, user1, user3],
    categories: [
      { name: "Publishing", border: "rgb(147 51 234)", color: "rgb(216 180 254)" },
      { name: "B2C", border: "rgb(111 188 76)", color: "rgb(190 242 100)" },
    ],
    tags: ["#LogisticsTech", "#UX"],
    nextMeeting: "No contact",
  },
  {
    brandName: "Invision",
    brand: Invision,
    description:
      "A digital product design and collaboration platform that allows teams to create interactive prototypes and collaborate on design projects.",
    members: [user2, user1, user3],
    categories: [
      { name: "Web Services", border: "rgb(86 130 205)", color: "rgb(147 197 253)" },
    ],
    tags: ["#APIIntegration", "#UX"],
    nextMeeting: "Next month",
  },
];
