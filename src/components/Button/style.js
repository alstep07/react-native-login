import {StyleSheet} from 'react-native';
import colors from '../../common/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 22,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#fff',
  },
});

export default styles;
