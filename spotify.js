async function callback(){
  let auth_token = await fetch("https://accounts.spotify.com/api/token")     
	let code_payload = {
		'grant_type': 'authorization_code',
		'code': str(auth_token),
		'redirect_uri': REDIRECT_URI,
  };
  
  let auth_str = '{}:{}'.format('590ede83e63d4a6f87f3653e01cf2711', '7362572cf6f3416d9f957e866e86a1a8', 'utf-8');
	let b64_auth_str = base64.b64encode(auth_str.encode()).decode('utf-8');

	let headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Basic {}'.format(b64_auth_str)
	};

	let post_request = requests.post(SPOTIFY_TOKEN_URL, data=code_payload, headers=headers);

	let response_data = json.loads(post_request.text);
  

  console.log(response_data)

}

callback();