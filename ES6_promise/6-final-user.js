import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => ({
    status: result.status,
    // If fulfilled, use 'value'; if rejected, use the error string
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  })));
}
