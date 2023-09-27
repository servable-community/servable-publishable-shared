import isPublishable from "./isPublishable.js"

export default ({ item }) => {
  const status = item.get('publishableStatus')
  switch (status) {
    case 'published': {
      const _isPublishable = isPublishable({ item })
      if (!_isPublishable) {
        item.set('publishableStatus', 'draft')
      }
    } break
    default: break
  }
}
