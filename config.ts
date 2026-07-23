import dotenv from 'dotenv';
import { Config } from './src/models/Config';
dotenv.config();

const {

  enviroment,

  clientIDDEV,
  tokenDEV,

  clientIDPROD,
  tokenPROD

} = process.env;

const configPROD : Config = {
  enviroment : enviroment!,
  clientID : clientIDPROD!,
  token : tokenPROD!
};

const configDESA : Config = {
  enviroment : enviroment!,
  clientID : clientIDDEV!,
  token : tokenDEV!
};

let config = enviroment === 'PROD' ? configPROD : configDESA;

export { config };