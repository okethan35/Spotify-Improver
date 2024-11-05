import React from "react";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=36b5a93ec8e34032bc355c40053a4637&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return(
        <div>
            <a href={AUTH_URL}>
            Login
            </a>
        </div>
    )
}