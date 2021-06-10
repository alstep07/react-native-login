import {StyleSheet} from 'react-native';
import theme from '../../../common/theme';

const styles = StyleSheet.create({
  container: {
    height: 88,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
  },
  title: {
    color: theme.colors.darkGray,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});

export default styles;
