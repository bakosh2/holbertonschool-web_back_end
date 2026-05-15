export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with the specific success object
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject with a new Error object and the required message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
