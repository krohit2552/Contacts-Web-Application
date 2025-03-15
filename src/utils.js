export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendSMS = async (phoneNumber, message) => {
  // In a real app, this would use Twilio's API
  console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};