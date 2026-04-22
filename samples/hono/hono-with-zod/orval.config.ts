import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'split',
      target: 'src/gen/petstore.ts',
      client: 'hono',
      clean: true,
      formatter: 'prettier',
      override: {
        hono: {
          handlers: 'src/handlers',
        },
        zod: {
          strict: {
            response: true,
          },
          preprocess: {
            response: {
              name: 'stripNill',
              path: './src/mutators.ts',
            },
          },
        },
      },
    },
    input: {
      target: './petstore.yaml',
    },
  },
});
