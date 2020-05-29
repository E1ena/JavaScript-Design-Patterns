// Фасад - паттерн, структурирует объекты.
// Определяет интерфейс более высокого уровня.
// Клиенты общаются с фасадом, который переадресует запросы объектам подсистемы.

class TaskMenager {
  createTask(message, date, status) {
    return console.log(`Task was created. (${status})`);
  }
}

class DevelopersTeamLead {
  notify(status) {
    return console.log(`Team lead knows about new ${status} bug`);
  }
}

class User {
  notify(userEmail) {
    return console.log(`Email was send to user: ${userEmail}`);
  }
}

class BugTracker {
  constructor() {
    this._taskManager = new TaskMenager();
    this._teamLead = new DevelopersTeamLead();
    this._user = new User();
  }
  
  reportBug(message, date, userEmail, status) {
    this._taskManager.createTask(message, date, status);
    this._teamLead.notify(status);
    this._user.notify(userEmail);
  }
}

const bugTracker = new BugTracker();
bugTracker.reportBug('При создании нового сообщения, показывается ошибка', Date.now(), 'pupkin@gmail.com', 'critical');

// Task was created. (critical)
// Team lead knows about new critical bug
// Email was send to user: pupkin@gmail.com