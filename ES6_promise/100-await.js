import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Wait for both promises to resolve
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (err) {
    // If any promise rejects, return the "empty" object
    return {
      photo: null,
      user: null,
    };
  }
}
