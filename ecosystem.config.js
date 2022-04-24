const isDevEnv = process.env.PM2_ENV === 'dev';

module.exports = {
  apps: [
    // Main Process
    isDevEnv && {
      name: "server-dev",
      script: "node",
      args: '--inspect=3001 -r ts-node/register process/server.ts',
      watch: ['src'],
      ignore_watch: ['node_modules'],
    },
    !isDevEnv && {
      name: "server-prod",
      script: "node",
      args: "dist/process/server.js"
    },
    // Other Process
    isDevEnv && {
      name: "example-dev",
      script: "node",
      args: '-r ts-node/register process/example.ts',
      watch: ['process'],
      ignore_watch: ['node_modules'],
      autorestart: false
    },
    !isDevEnv && {
      name: "example-prod",
      script: "node",
      args: "dist/process/example.js",
      autorestart: false
    },
  ].filter(Boolean),
}
