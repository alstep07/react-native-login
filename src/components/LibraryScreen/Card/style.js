import {StyleSheet} from 'react-native';
import theme from '../../../common/theme';

const styles = StyleSheet.create({
  container: {
    height: 88,
    padding: 18,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    shadowColor: theme.colors.shadow,
    elevation: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: theme.colors.darkGray,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.mediumGray,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  duration: {
    color: theme.colors.lightGray,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});

export default styles;
