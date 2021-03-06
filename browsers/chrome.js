
// Include main chrome manifest
require( 'file?name=manifest.json!./chrome/manifest.json' );

// Chrome requires extension icons
require( 'file?name=icon16.jpg!../assets/icon16.jpg' );
require( 'file?name=icon48.jpg!../assets/icon48.jpg' );
require( 'file?name=icon128.jpg!../assets/icon128.jpg' );

module.exports = {
	loadSettings: function( callback ) {
		chrome.storage.sync.get( null, ( data ) => {
			callback( data );
		} );
	},

	saveSettings: function( data ) {
		chrome.storage.sync.set( data );
	}
};
