module.exports = {
    echo: async (ctx) => {
      const { server } = strapi;
      const { websocket } = ctx;
  
      // Handle incoming WebSocket messages
      websocket.on('message', (message) => {
        console.log(`Received message from client: ${message}`);
  
        // Broadcast the received message to all connected clients
        server.websocketServer.broadcastAll(message);
      });
  
      // Handle WebSocket connection closure
      websocket.on('close', () => {
        console.log('WebSocket connection closed');
      });
    },
  };