const assert = require("assert");
const rankTransform = require("./");
const inputArray = require("./data/01/in.json");
const expectedOut = require("./data/01/out.json");

const result = rankTransform(inputArray);

assert.deepStrictEqual(result, expectedOut);
