function average(arr) {
  if (arr.length === 1) return arr[0];
  return arr.reduce((p, c) => p + c, 0) / arr.length;
}

function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 *
 * @param {number[]} inputArray
 * @returns {number[]}
 */
function rankTransform(inputArray) {
  const sortedInputArray = sortAscending(inputArray);

  const entryRanks = sortedInputArray.reduce((entryRanks, input, index) => {
    const entry = entryRanks.get(input) || { ranks: [] };

    const rank = index + 1;
    entry.ranks.push(rank);

    entryRanks.set(input, entry);

    return entryRanks;
  }, new Map());

  const ranks = inputArray.map((input) => {
    const entry = entryRanks.get(input);

    return average(entry.ranks);
  });

  return ranks;
}

module.exports = rankTransform;
