exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@react-hook/,
              use: loaders.null(),
            },
            {
              test: /react-helmet/,
            
              use: loaders.null(),
            },
            {
              test: /sass/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }