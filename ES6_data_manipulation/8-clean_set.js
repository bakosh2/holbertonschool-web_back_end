export default function cleanSet(set, startString) {
  // Check for empty or invalid startString
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const parts = [];

  for (const value of set) {
    // Check if the value is a string and starts with the prefix
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Append only the part after the startString
      parts.push(value.slice(startString.length));
    }
  }

  // Join all parts with a hyphen
  return parts.join('-');
}
