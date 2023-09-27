import requiredFields from './requiredFields.js'
import optionalFields from './optionalFields.js'

export default ({ item }) => {
  const fields = [
    ...requiredFields({ item }).map(a => ({ ...a, type: 'required' })),
    ...optionalFields({ item }).map(a => ({ ...a, type: 'optional' })),
  ]

  return fields.map(field => {
    let isValid = true
    if (field.validator && !field.validator()) {
      isValid = false
    }

    if (isValid && !item.get(field.id)) {
      isValid = false
    }

    return {
      ...field,
      isValid
    }
  })
}
