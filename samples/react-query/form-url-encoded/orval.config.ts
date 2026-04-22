import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      target: './gen/endpoints.ts',
      schemas: './gen/models',
      client: 'react-query',
      httpClient: 'axios',
      clean: true,
      formatter: 'prettier',
      override: {
        mutator: {
          path: './custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: './petstore.yaml',
    },
  },
});
