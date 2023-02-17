import { useTheme } from '../../theme/themeProvider/themeProvider'
import { StylesOrCreatorType } from '../../types/type'

const makeStyles = (stylesOrCreator: StylesOrCreatorType) => {
  return (props?: any) => {
    if (props && props instanceof Object)
      return stylesOrCreator({
        theme: useTheme() as any,
        ...(props && { props }),
      })
    return stylesOrCreator(useTheme() as any)
  }
}

export default makeStyles
