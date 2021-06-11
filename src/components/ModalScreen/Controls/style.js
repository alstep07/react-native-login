import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  slider: {
    width: '100%',
    height: 20,
  },
  controlsContainer: {
    marginTop: 20,
    width: '70%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    fontSize: 24,
  },
  finishButton: {
    paddingVertical: 20,
    marginBottom: 50,
    width: '80%',
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
  finishText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    opacity: 1,
  },
});

export default styles;
