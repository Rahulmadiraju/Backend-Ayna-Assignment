module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/websocket',
        handler: 'websocket.echo',
        config: {
          handler: 'websocket.echo',
          websocket: true,
        },
      },
    ],
  };