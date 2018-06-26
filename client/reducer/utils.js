import { OrderedMap } from 'immutable'

export function arrToMap(arr, ItemRecord) {
	return arr.reduce((acc, item) => {
		return acc.set(item.id ? item.id : item._id, ItemRecord ? new ItemRecord(item) : item)
	},
		new OrderedMap({})
	)
}