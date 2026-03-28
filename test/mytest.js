import { isFakeEmail } from '../index.js';

const email = "aba25tushar@sharebot.net";
if (isFakeEmail(email)) {
    console.log("This is a fake email.");
} else {
    console.log("This is a valid email.");
}