import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',  // Softer lavender shade as background
    padding: 20,
  },
  gradientBackground: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A5ACD',
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adds depth to buttons
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4B0082',  // Darker lavender for text
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#D8BFD8',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A5ACD',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#6A5ACD',
  },
  iconContainer: {
    backgroundColor: '#E6E6FA',
    padding: 10,
    borderRadius: 50,
    marginRight: 15,
  },
});

export default theme;
