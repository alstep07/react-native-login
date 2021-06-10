import {StyleSheet} from 'react-native';
import theme from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  backgroundImage: {
    flex: 3,
    paddingTop: 42,
    paddingHorizontal: 24,
  },
  date: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.lightGray,
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '500',
    color: theme.colors.darkGray,
  },
  carousel: {
    backgroundColor: theme.colors.background,
    flex: 2,
  },
});

export default styles;
