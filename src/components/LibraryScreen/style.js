import {StyleSheet} from 'react-native';
import theme from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  date: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.lightGray,
  },
});

export default styles;
