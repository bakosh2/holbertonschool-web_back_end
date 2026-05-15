export default function updateUniqueItems(map) {
  // Check if the argument is a Map instance
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map
  map.forEach((quantity, name) => {
    // If the initial quantity is 1, update it to 100
    if (quantity === 1) {
      map.set(name, 100);
    }
  });

  return map;
}
