export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    console.log(task, task2);
  }

  return [task, task2];
}
