const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharrones, tousled air plant lomo williamsburg. Listicle aesthetic whatever prism, ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`,
  },
  {
    id: 2,
    title: "Using the Vue CDN",
    body: `I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharrones, tousled air plant lomo williamsburg. Listicle aesthetic whatever prism, ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`,
  },
  {
    id: 3,
    title: "How I mastered Vue",
    body: `I'm baby chambray street art thundercats occupy four loko church-key disrupt. Shaman neutra bushwick chicharrones, tousled air plant lomo williamsburg. Listicle aesthetic whatever prism, ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`,
  },
];

Vue.createApp({
  data() {
    return {
      name: "Chris Dixon",
      links: ["home", "portfolio", "contact me"],
    };
  },
}).mount("header");
Vue.createApp({
  data() {
    return {
      posts,
    };
  },
}).mount("#blog");
