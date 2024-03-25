function dominantWritingDirection(text) {
  const countByDirection = {};

  // Function to get the character direction
  function charDirection(char) {
    const direction = char.direction;
    if (direction === "ltr" || direction === "rtl") {
      return direction;
    } else {
      return "other";
    }
  }

  // Iterate over each character in the text
  for (const char of text) {
    const direction = charDirection(char);
    countByDirection[direction] = (countByDirection[direction] || 0) + 1;
  }

  // Find the dominant direction
  const dominantDirection = Object.keys(countByDirection).reduce((a, b) =>
    countByDirection[a] > countByDirection[b] ? a : b
  );

  return dominantDirection;
}
