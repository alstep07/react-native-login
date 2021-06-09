import {StyleSheet} from 'react-native';
import theme from '../../../common/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.mediumGray,
  },
  link: {
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: 'underline',
    color: theme.colors.mediumGray,
  },
});

export default styles;
