// @ts-check
"use strict";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, './json/data.json');
const fileContent = fs.readFileSync(filepath, 'utf8');


const static_json_v1 = JSON.parse(fileContent);


/**
 * Extracts the hostname from an email address.
 *
 * @param {string} email - The email address to extract the hostname from.
 * @returns {string|null} The hostname part of the email address if valid, otherwise null.
 */
function hostnameFromEmailAddress(email) {
    if (email && typeof email === 'string' && email.search(/@/) > 0)
        return email.split(/@/)[1]
    return null
}



/**
 * Checks if a given domain is considered a "fake" domain based on predefined criteria.
 *
 * @param {string} domain - The domain to be checked.
 * @returns {boolean} - Returns `true` if the domain matches any of the predefined fake domains
 *                      (exact match or subdomain match), otherwise `false`.
 */
function isFakeDomain(domain) {
    for (let dom of Object.keys(static_json_v1.domains)) {
        if (dom === domain.toLowerCase().trim()) return true
        if (domain.search(new RegExp(`.+\\.${dom}`)) === 0) return true
    }
    return false
}

/**
 * Determines if an email address is fake by checking its domain.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} - Returns `true` if the email is fake, otherwise `false`.
 */
export function isFakeEmail(email) {
    if (!email || typeof email !== 'string') return true
    const domain = hostnameFromEmailAddress(email)
    if (!domain) return true
    return isFakeDomain(domain)
}