import dotenv from 'dotenv';
import { Config } from './src/models/Config';
dotenv.config();

const {

  enviroment,

  clientIDDEV,
  tokenDEV,
  serverIDDEV,

  clientIDPROD,
  tokenPROD,
  serverIDPROD

} = process.env;

const configPROD : Config = {
  enviroment : enviroment!,
  clientID : clientIDPROD!,
  token : tokenPROD!,
  serverID : serverIDDEV!
};

const configDESA : Config = {
  enviroment : enviroment!,
  clientID : clientIDDEV!,
  token : tokenDEV!,
  serverID : serverIDPROD!
};

let config = enviroment === 'PROD' ? configPROD : configDESA;

export { config };