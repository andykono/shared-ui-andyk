import { fileURLToPath } from 'url';

const aliases = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@ui': fileURLToPath(new URL('./src/components', import.meta.url)),
};

export default aliases;
