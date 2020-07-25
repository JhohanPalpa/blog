module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Jhohan Palpa`,
    siteUrl: `palpa.website`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Exploremos el mundo de la programación`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/GersonJhohan?s=09`,
      },
      {
        name: `github`,
        url: `https://github.com/JhohanPalpa`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/jhohangersonpalpa/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jhohan-palpa-b364b91b3/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/palpa_logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
