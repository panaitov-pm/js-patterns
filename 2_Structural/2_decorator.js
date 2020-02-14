class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAws = true;
    server.info = function() {
        return server.url;
    };

    return server;
}

function azure(server) {
    server.isAzure = true;
    server.info = function() {
        return server.url;
    };

    return server;
}

const s1 = aws(new Server('12.34.54.21', '8080'));
console.log('---s1.isAws', s1.isAws);
console.log('---s1.info', s1.info());
