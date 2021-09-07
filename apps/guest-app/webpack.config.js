const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [
    '@angular12-micro-frontend-nx-workspace/services-lib'
  ]);

module.exports = {
  output: {
    uniqueName: "guestApp",
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
      name: "guestApp",
      filename: "guestAppEntry.js",
      exposes: {
        './GuestModule': './apps/guest-app/src/app/guest/guest.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "globalNav": "globalNav@http://localhost:4701/remoteEntry.js",
      //     "mainApp": "mainApp@http://localhost:4200/remoteEntry.js",
      //     "signUp": "signUp@http://localhost:4201/remoteEntry.js",
      //     "svgAnimation": "svgAnimation@http://localhost:4700/remoteEntry.js",

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
