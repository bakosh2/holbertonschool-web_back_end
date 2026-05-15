export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the bounds of the buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified length (number of bytes)
  const buffer = new ArrayBuffer(length);

  // Use a DataView to manipulate the buffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specific byte offset (position)
  view.setInt8(position, value);

  return view;
}
