export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Initialize the count if the endpoint is not yet in the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the counter
  count += 1;

  // Update the weakMap with the new count
  weakMap.set(endpoint, count);

  // Check if the threshold has been reached
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
