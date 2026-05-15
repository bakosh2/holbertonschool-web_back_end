export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Attempt to execute the function and push the result
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    // If it fails, push the string representation of the error
    queue.push(String(err));
  } finally {
    // This always runs, adding the final message to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
