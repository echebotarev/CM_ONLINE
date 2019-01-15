import { OrderedMap } from "immutable";

export function arrToMap(arr, ItemRecord, ItemStyleRecord) {
  return arr.reduce((acc, item) => {
    if (item.style) item.style = new ItemStyleRecord(item.style);

    return acc.set(
      item.id ? item.id : item._id,
      ItemRecord ? new ItemRecord(item) : item
    );
  }, new OrderedMap({}));
}
