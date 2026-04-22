import path from 'node:path';
import { describeApiGenerationSnapshots } from '../../../test-utils/snapshot-testing';

await describeApiGenerationSnapshots({
  dirs: [path.resolve(import.meta.dirname, 'src', 'handlers')],
  files: [
    path.resolve(import.meta.dirname, 'src', 'gen', 'petstore.ts'),
    path.resolve(import.meta.dirname, 'src', 'gen', 'petstore.context.ts'),
    path.resolve(import.meta.dirname, 'src', 'gen', 'petstore.schemas.ts'),
    path.resolve(import.meta.dirname, 'src', 'gen', 'petstore.validator.ts'),
    path.resolve(import.meta.dirname, 'src', 'gen', 'petstore.zod.ts'),
  ],
  snapshotsDir: path.resolve(import.meta.dirname, '__snapshots__'),
  rootDir: path.resolve(import.meta.dirname, '..', '..', '..'),
});
