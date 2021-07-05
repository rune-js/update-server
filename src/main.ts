import UpdateServer from './update-server';
import 'source-map-support/register';
import { logger } from '@runejs/core';


UpdateServer.launch()
    .then(() => logger.info(`Ready to accept connections.`))
    .catch(() => logger.error(`Error launching Update Server.`));
