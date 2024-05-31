const config = {
  siteTitle: 'Shahidul Islam Majumder',
  siteDescription: `I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to work with Node, React, MySQL, MongoDB and all other related technologies. When I am not coding, I like to read books, do gardening and spend time with my family and friends.`,
  siteUrl: 'https://v2021.shahid.pro/',
  siteLogo: '',
  contentPath: 'contents',
  headerLogoText: 'sh4hids',
  seoImage: '/images/seo-bg.jpg',
  heroImage: '',
  titleSeparator: '|',
  urlDateFormat: 'yyyy/MM/dd',
  displayDateFormat: 'MMMM dd , yyyy',
  pathPrefix: '/',
  blogPath: 'blog',
  blogTitle: 'Blog',
  baseEditUrl:
    'https://github.com/sh4hids/2021.shahid.pro/edit/main/contents/blog',
  postPerPage: 8,
  socialShareTitle: '-: SHARE :-',
  manifest: {
    icon: 'src/assets/images/logo.svg',
    backgroundColor: `#FAFAFC`,
    themeColor: `#27283F`,
  },
  author: {
    fullName: 'Shahidul Islam Majumder',
    nickName: 'Shahid',
    bio: 'JavaScripter (full-time) • Designer (part-time) • Gardening (pastime)',
    summary: `I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to work with Node, React, MySQL, MongoDB and all other related technologies. When I am not coding, I like to read books, do gardening and spend time with my family and friends.`,
    email: 'hello@shahid.pro',
    links: {
      facebook: 'https://facebook.com/sh4hids',
      github: 'https://github.com/sh4hids',
      instagram: 'https://instagram.com/sh4hids',
      linkedin: 'https://linkedin.com/in/sh4hids',
      twitter: 'https://twitter.com/sh4hids',
    },
  },
  utterancesCommentRepo: 'sh4hids/shahid.pro-comments',
  footer: {
    title: 'Words of Thanks',
    description: `<p>Hello there, thank you very much for visiting my site. If you like anything on this site and want to know how it’s made, you can check the source code on <a href="https://github.com/sh4hids/shahid.pro">github</a>.</p>`,
    copyright: `© 2018 - ${new Date().getFullYear()} Shahidul Islam Majumder. All Rights Reserved.`,
  },
};

module.exports = config;
