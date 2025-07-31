import axios from 'axios';

export const sendSOS = async () => {
  try {
    await axios.get('https://your-streamlit-app-url.com');
    console.log('SOS alert sent');
  } catch (error) {
    console.error('Error sending SOS alert:', error);
  }
};
