export function mapArrayKeyToObjectIdAndSort(oldarray) {
  if (oldarray && oldarray.length) {
    let mappedArray = new Array();

    oldarray.forEach(function(object) {
      mappedArray[object.id] = object;
    });

    mappedArray.sort();
    return mappedArray;
  }
}
