const PORT = '3000';
// const SERVER_URL = 'http://localhost:' + PORT;
const SERVER_URL = 'http://192.168.0.94:' + PORT;

export const config = {
  STORE_INFO_URL : SERVER_URL + '/storeInfo',
  ALL_DATA_URL :  SERVER_URL + '/all',
  DELETE_USER_DATA_URL :  SERVER_URL + '/deleteUser',
  UPDATE_USER_DATA_URL :  SERVER_URL + '/updateUserData',
  SEND_EMAIL_URL : SERVER_URL + '/sendEmail'
};
