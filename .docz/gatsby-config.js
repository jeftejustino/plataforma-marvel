const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Plataforma Marvel',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Plataforma Marvel',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\jefte\\Projetos\\plataforma-marvel',
          templates:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz',
          cache: 'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\.cache',
          app: 'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app',
          appPackageJson:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\package.json',
          appTsConfig:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app\\index.html',
          db:
            'C:\\Users\\jefte\\Projetos\\plataforma-marvel\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
