import { Express } from 'express'
import swaggerUi, { JsonObject } from 'swagger-ui-express'
import * as fs from 'fs'
import * as yaml from 'js-yaml'

const swaggerDocs = (app: Express, route: string, port: number) => {
  try {
    const apiSpec = yaml.load(
      fs.readFileSync('node_modules/ca3spec/spec.yaml', 'utf8')
    ) as JsonObject
    app.use(route, swaggerUi.serve, swaggerUi.setup(apiSpec))
    console.info(`Docs available at http://localhost:${port}/backend/docs`)
  } catch {
    console.info('Failed to load OpenAPI spec')
  }
}

export default swaggerDocs
