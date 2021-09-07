const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  []);

module.exports = {
  output: {
    uniqueName: "remoteSvgAnimation",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "remoteSvgAnimation",
        filename: "svgAnimationEntry.js",
        exposes: {
            './RemoteSvgAnimationModule': './apps/svg-animation/src/app/remote-svg-animation/remote-svg-animation.module.ts',
            './SvgAnimationComponent': './apps/svg-animation/src/app/remote-svg-animation/components/svg-animation/svg-animation.component.ts',
        },
        // name: "svgAnimation",
        // filename: "svgAnimationEntry.js",
        // exposes: {
        //     './SvgAnimationComponent': './apps/svg-animation/src/app/components/svg-animation/svg-animation.component.ts',
        // },
        
        // For hosts (please adjust)
        // remotes: {
        //     "mainApp": "mainApp@http://localhost:4200/remoteEntry.js",
        //     "signUp": "signUp@http://localhost:4201/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
