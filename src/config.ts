import { cleanEnv, num, str, bool } from 'envalid'

const env = cleanEnv(process.env, {
  PORT: num(),
  FRONTEND_ENDPOINT: str(),

  DB_NAME: str(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_HOST: str(),

  DB_LOGGING: bool({ default: true }),
  DB_DIALECT: str(),
  DB_STORAGE_PATH: str({ default: '' })
})

export default env
