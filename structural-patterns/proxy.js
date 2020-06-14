// Прокси - пттрен,структурирующий объекты.
// Является сурогатом другого объекта и контролирует к нему доступ.

class YandexMusicApi {
  getMusicianSongs(name) {
    switch (name) {
      case 'AC/DC':
        return ['Highway to Hell', 'Thunderstruck', 'Back In Black'];
      case 'Billy Talent':
        return ['Surprise Surprise'];
    }
  }
}

class ApiProxy {
  constructor() {
    this.api = new YandexMusicApi();
    this.songsCash = {};
  }
  
  getMusicianSongs(name) {
    if(!this.songsCash[name]) {
      this.songsCash[name] = this.api.getMusicianSongs(name);
    }
    return this.songsCash[name];
  }  
}

const proxy = new ApiProxy();
proxy.getMusicianSongs('AC/DC');