const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '36b5a93ec8e34032bc355c40053a4637',
        clientSecret: '912bb3cfcf6444bdb3cde316105fca12'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        }).catch(() => {res.sendStatus(400)})
    })
})

app.listen(3001)