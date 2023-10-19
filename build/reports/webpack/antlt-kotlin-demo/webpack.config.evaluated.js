{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/huxiaodong/Documents/ideaspaces/antlr-kotlin-demo/build/js/packages/antlt-kotlin-demo/kotlin/antlt-kotlin-demo.js'
    ]
  },
  output: {
    path: '/Users/huxiaodong/Documents/ideaspaces/antlr-kotlin-demo/build/distributions',
    filename: [Function: filename],
    library: 'antlt-kotlin-demo',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/huxiaodong/Documents/ideaspaces/antlr-kotlin-demo/build/processedResources/js/main'
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  stats: {
    warnings: false,
    errors: false
  }
}