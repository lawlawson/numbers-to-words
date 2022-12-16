#!/usr/bin/env node

/**
 * numbers-to-words
 * Converts given integer to English language
 *
 * @author Lawrence <https://lawlawson.dev/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
