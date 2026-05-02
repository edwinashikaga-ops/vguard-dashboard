const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const express = require('express');

// Cache the app instance for warm starts
let cachedApp;

async function bootstrap() {
  if (cachedApp) return cachedApp;

  const { AppModule } = require('../dist/app.module');
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);

  const app = await NestFactory.create(AppModule, adapter, {
    logger: ['error', 'warn'],
  });

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
  });

  await app.init();
  cachedApp = expressApp;
  return cachedApp;
}

module.exports = async (req, res) => {
  const app = await bootstrap();
  app(req, res);
};
