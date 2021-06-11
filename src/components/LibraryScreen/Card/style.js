import {StyleSheet} from 'react-native';
import theme from '../../../common/theme';

const styles = StyleSheet.create({
  container: {
    height: 88,
    paddingHorizontal: 6,
  },
  innerContainer: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 20,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.shadow,
    elevation: 20,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 16,
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
