const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the application
const themeDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the application root
const resolveTheme = ( relativePath ) => path.resolve( themeDirectory, relativePath );

module.exports = {
  themeAssets: resolveTheme( 'assets' ),
  themeIndex: resolveTheme( 'assets/js/index.js' ),
  themeJs: resolveTheme( 'assets/js/' ),
  themePackage: resolveTheme( 'package.json' ),
  themeRoot: resolveTheme( './' )
};