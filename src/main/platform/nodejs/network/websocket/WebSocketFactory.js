class WebSocketFactory {
    /**
     * @static
     * @param {NetworkConfig} networkConfig
     * @return {WebSocketServer}
     */
    static newWebSocketServer(networkConfig) {
        const port = networkConfig.peerAddress.port;
        const sslConfig = networkConfig.sslConfig;

        const handler = (req, res) => {
            res.writeHead(200);
            res.end('Nimiq NodeJS Client\n');
        }

        const server = process.env.LOCAL === '1' ?
          http.createServer({}, handler) : https.createServer(options, handler)

        return new WebSocket.Server({ server: server.listen(port) })
    }

    /**
     * @static
     * @param {string} url
     * @param {*} [options]
     * @return {WebSocket}
     */
    static newWebSocket(url, options) {
        return new WebSocket(url, options);
    }
}
Class.register(WebSocketFactory);
