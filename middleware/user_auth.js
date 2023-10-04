export async function generate_code_challenge(codeVerifier) {
	function base_64_encode(string) {
	  return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
	}
  
	const encoder = new TextEncoder();
	const data = encoder.encode(codeVerifier);
	const digest = await crypto.subtle.digest('SHA-256', data);
  
	return base_64_encode(digest);
  }

  export function generate_random_string(length) {
	let text = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
	for (let i = 0; i < length; i++) {
	  text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
	return text;
  }

  function auth() {

  }