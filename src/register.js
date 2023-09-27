import classes from './classes.js'

export default ({ overrides = classes } = {}) => {
  Object.keys(overrides).forEach((key) => {
    Parse.Object.registerSubclass(key, overrides[key])
  })
}
