# Fake Contact Detector Project

## Overview
This project provides functionality to check whether an email address is associated with a fake domain. The core logic is implemented in the `index.js` file. It reads a JSON file with domain data and uses it to verify if an email's domain is considered fake, either via an exact match or a subdomain check.

## Installation
1. Clone the repository.
2. Ensure you have Node.js installed.
3. Run `npm install` to install any necessary dependencies.

## Usage
- Place your JSON file containing the fake domains at `./json/data.json`.
- Import and use the `isFakeEmail` function from `index.js` to determine if an email address is fake.
- A copy of data is taken from https://github.com/7c/fakefilter/tree/main/json , however you can add more to this list.
- This is ES module and simple to use, in future phone number detector will be added to this package.

### Example
```javascript
import { isFakeEmail } from './index.js';

const email = "example@fake-domain.com";
if (isFakeEmail(email)) {
    console.log("This is a fake email.");
} else {
    console.log("This is a valid email.");
}
