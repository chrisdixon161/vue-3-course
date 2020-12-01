const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `I'm baby chambray street art <strong>thundercats</strong> occupy four loko church-key disrupt. Shaman neutra bushwick chicharrones, tousled air plant lomo williamsburg. Listicle aesthetic whatever prism, ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. <br> Lo-fi meh austin, selfies
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

const links = [
  { id: 1, name: "home", url: "index.html" },
  { id: 2, name: "portfolio", url: "portfolio.html" },
  { id: 3, name: "contact me", url: "contact.html" },
];

const appHeader = {
  data() {
    return {
      name: "Chris Dixon",
      links,
    };
  },
  template: `<header>
  <h1>{{ name }}'s Portfolio</h1>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url">{{link.name}}</a>
      </li>
    </ul>
  </nav>
</header>`,
};
const blogPost = {
  props: ["post"],
  template: `
  <article>
   
    <h3>{{post.title}}</h3>
    <p v-html="post.body"></p>
    <p class="read_more">Read More</p>
  </article>
`,
};

const app = Vue.createApp({
  components: {
    "blog-post": blogPost,
    "app-header": appHeader,
  },
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      darkModeSet: false,
      darkMode: {
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
    async getPosts() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      this.posts = data;
    },
  },
});

// app.component("app-header", {
//   data() {
//     return {
//       name: "Chris Dixon",
//       links,
//     };
//   },
//   template: `<header>
//   <h1>{{ name }}'s Portfolio</h1>
//   <nav>
//     <ul>
//       <li v-for="link in links" :key="link.id">
//         <a :href="link.url">{{link.name}}</a>
//       </li>
//     </ul>
//   </nav>
// </header>`,
// });

// app.component("blog-post", {
//   props: ["post"],
//   template: `
//   <article>
//     <app-header></app-header>
//     <h3>{{post.title}}</h3>
//     <p v-html="post.body"></p>
//     <p class="read_more">Read More</p>
//   </article>
// `,
// });

app.mount("body");
