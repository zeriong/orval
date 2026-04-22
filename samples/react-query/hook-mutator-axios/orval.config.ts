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
          path: './use-custom-instance.ts',
          name: 'useCustomInstance',
        },

        // only for the operation id 'createPets'
        // operations: {
        //   createPets: {
        //     mutator: {
        //       path: './use-custom-instance.ts',
        //       name: 'useCustomInstance',
        //     },
        //   },
        // },
        // only for the tag 'pets'
        // tags: {
        //   pets: {
        //     mutator: {
        //       path: './use-custom-instance.ts',
        //       name: 'useCustomInstance',
        //     },
        //   },
        // },
        // for ES Module imports
        // {
        //  mutator: {
        //    path: './use-custom-instance.ts',
        //    name: 'useCustomInstance',
        //    extension: '.js',
        //  }
        // }
      },
    },
    input: {
      target: './petstore.yaml',
    },
  },
});
