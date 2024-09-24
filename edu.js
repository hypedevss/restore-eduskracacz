// THE EDUSHORTENER RESTORE CODE
// VERY SIMPLE + VERY BAD

const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];
head.innerHTML = '';
body.innerHTML = '';
const base32str = window.location.pathname.split("/").pop();
function base32Decode(base32) {
    const base32Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let decoded = "";
    base32 = base32.replace(/=+$/, "");
    for (let i = 0; i < base32.length; i++) {
        const val = base32Chars.indexOf(base32[i].toUpperCase());
        if (val === -1) {
            throw new Error("Invalid character found in Base32 string");
        }
        bits += val.toString(2).padStart(5, '0');
    }
    for (let i = 0; i + 8 <= bits.length; i += 8) {
        const byte = bits.slice(i, i + 8);
        decoded += String.fromCharCode(parseInt(byte, 2));
    }

    return decoded;
}

if (base32str) {
	const decoded = base32Decode(base32str);
	if (decoded) {
		window.location.href = decoded;
	}
	
}