/** ES5 **/
// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }
//
// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:8080`;
// };

/** ES6 **/
class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`;
    }
}

const aws = new Server('AWS German', '82.23.32.23');

console.log('---aws.getUrl()', aws.getUrl());
