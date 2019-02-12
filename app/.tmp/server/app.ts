import 'isomorphic-fetch';

import * as express from 'express';
import * as helmet from 'helmet';
import * as next from 'next';
import * as path from 'path';

// import { getUser } from '../lib/api/public';
// import routesWithSlug from './routesWithSlug';
import env from '../lib/env';

/**
 * Load env configuration
 */
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const { PRODUCTION_URL_APP } = env;
const ROOT_URL = dev ? `http://localhost:${port}` : PRODUCTION_URL_APP;

/**
 * Loads next app and request handler
 */
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Next app & express server configuration
 */
app.prepare().then(() => {
  // create express server
  const server = express();

  // give all Nextjs's request to Nextjs before anything else
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  // static files are served directly
  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  // use helmet security & protection extension
  server.use(helmet());
  // use express json
  server.use(express.json());

  // trust to proxy only when app is in production mode
  if (!dev) {
    server.set('trust proxy', 1); // sets req.hostname, req.ip
  }

  // middleware that populates req.user via fetching from API
  /*
  server.use(async (req: any, _, nextfn) => {
    const headers: any = {};
    if (req.headers && req.headers.cookie) {
      headers.cookie = req.headers.cookie;
    }

    try {
      const { user } = await getUser({ headers });
      req.user = user;
    } catch (error) {
      console.log(error);
    }

    nextfn();
  });
  */

  /*
  server.get('/', async (req: any, res) => {
    let redirectUrl = 'login';

    if (req.user) {
      if (!req.user.defaultTeamSlug) {
        redirectUrl = 'settings/create-team';
      } else {
        redirectUrl = `team/${req.user.defaultTeamSlug}/t/projects`;
      }
    }

    res.redirect(`${ROOT_URL}/${redirectUrl}`);
  });
  */

  // serve robots.txt directly
  server.get('/robots.txt', (_, res) => {
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  });

  //routesWithSlug({ server, app });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  // start express server to listen on specific port
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`);
  });
});
