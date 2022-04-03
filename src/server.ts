import { join } from 'path';
import { config } from 'dotenv';
import { app } from './app';

void function main() {
  if (process.env.NODE_ENV !== 'production') {
    config({ path: join(process.cwd(), '.env.local') });
  } else {
    config();
  }

  app.listen({ port: parseInt(process.env.PORT as string, 10) }, (err) => {
    if (err) throw err;
  });
}();
