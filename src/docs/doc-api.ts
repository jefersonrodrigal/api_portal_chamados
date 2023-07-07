export const docApi = {
  swagger: '2.0',
  info: {
    title: 'My API',
    description: 'Description',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/users/create': {
      post: {
        description: '',
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/users/listusers/{id?}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/users/alterar/{id?}': {
      put: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/users/deletar/{id?}': {
      delete: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/login/': {
      post: {
        description: '',
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/dashboard/{id?}': {
      post: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
          {
            name: 'authorization',
            in: 'header',
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '400': {
            description: 'Bad Request',
          },
        },
      },
      get: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
          {
            name: 'authorization',
            in: 'header',
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '400': {
            description: 'Bad Request',
          },
        },
      },
    },
    '/atendentes/create': {
      post: {
        description: '',
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/atendentes/listar/{id?}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'id?',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/atendentes/alterar/{id}': {
      put: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/atendentes/deletar/{id}': {
      delete: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
  },
}
