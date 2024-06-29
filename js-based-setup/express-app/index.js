const express = require( 'express' );
const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'Hurray!! Express Server is Live' );
} );

app.listen( 3000 );