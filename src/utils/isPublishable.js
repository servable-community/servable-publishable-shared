import fieldsStatus from "./fieldsStatus.js"

export default ({ item }) => {
  const fields = fieldsStatus({ item })
  const candidates = fields.filter(a => a.type === 'required' && !a.isValid)
  return candidates.length === 0
}
