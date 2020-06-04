// Медиатор - паттерн поведения объектов.
// Это объект, инкапсулирующий способ взаимодействия множества объектю

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  sendMessage(message, recipientName) {
    this.chatroom.sendMessage(message, this.name, recipientName);
  }
  
  receiveMessage(message, senderName) {
    console.log(`${this.name} received a message drom ${senderName}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    user.chatroom = this;
    this.users.push(user);
  }
  
  sendMessage(message, senderName, recipientName) {
    const recipient = this.users.find(user => user.name === recipientName);
    recipient.receiveMessage(message, senderName);
  }
}

const chat = new ChatRoom();
const Bob = new User('Bob');
const Mary = new User('Mary');
chat.addUser(Bob);
chat.addUser(Mary);
Bob.sendMessage('Hey!', 'Mary'); // Mary received a message drom Bob: Hey!
