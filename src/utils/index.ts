export const moveArr = (arr: any, oldIndex: number, newIndex: number) => {
  const moveItem = arr.splice(oldIndex, 1);
  arr.splice(newIndex, 0, moveItem[0]);
  return arr;
};
