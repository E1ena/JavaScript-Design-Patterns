// Одиночка — паттерн, пораждающий объекты.
// Назначение: гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.


class Server {
  constructor(env, port, host) {
    if(Server.instance) {
      return Server.instance;
    }
    Server.instance = this;
    this.env = env;
    this.port = port;
    this.host = host;
  }
}
const devServer = new Server('develop', 4300, 'localhost');
const testServer = new Server('test', 80, 'test.app.io');

console.log(devServer === testServer) // true

/*--------------------------------------*/

const Server = (function(){
  let _server;

  function ServerConstructor(env, port, host) {
    this.env = env;
    this.port = port;
    this.host = host;
  }

  function createServer(env, port, host) {
    _server = new ServerConstructor(env, port, host);
    return _server;
  }

  return {
    getInstance: (env, port, host) => {
      if(!_server) {
        _server = createServer(env, port, host);
      }        
      return _server;
    }
  }
})();

const devServer = Server.getInstance('develop', 4300, 'localhost');
const testServer = Server.getInstance('test', 80, 'test.app.io');

console.log(devServer === testServer) // true