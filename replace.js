var fs = require('fs');
var path = require( 'path' );

var version = process.env.npm_package_govuk_template_version;

if( !version ){
	console.log( 'Please specify a version of the govuk template.' );
	process.exit( 1 );
}

var fileName = path.resolve( __dirname, ( 'govuk_template-' + version ), 'govuk_template.html' );
var findJsFiles = /(^.+?\/.+?.js.+$)/gm;
var findAssetUrl = /\/assets\//g;
var findCookeBlock = /^.+?id="global-cookie-message"(.|\s)+?\/div>.*?$/gm;
var newAssetUrl = ( '/govuk-' + version + '/assets/' );
var file = fs.createReadStream( fileName, 'utf8' );
var newContent = '';


file.on( 'data', function( chunk ){

	newContent += chunk.toString().replace( findAssetUrl, newAssetUrl ).replace( findJsFiles, '' ).replace( findCookeBlock, '' );
});

file.on( 'end', function(){

	fs.writeFile( fileName, newContent, function( err ){

		if( err ){

			console.log( err );
			process.exit( 2 );
		}
	});
});