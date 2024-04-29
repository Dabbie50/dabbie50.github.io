/*
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
*/
let method = "POST"
let url = "https://accounts.spotify.com/api/token"
let xhr = new XMLHttpRequest()
xhr.open(method, url)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
let body = "grant_type=client_credentials&client_id=d42fa8b098a14a769be65e9d110f5646&client_secret=58add988e7f74c52b2f65d9939da3d0a"