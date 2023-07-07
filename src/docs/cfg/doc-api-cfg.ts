import swaggerAutogen from 'swagger-autogen'
import path from 'path'

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
}

const outputFile = './src/docs/doc-api.ts'
const endpointsFiles = ['./src/server.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)
