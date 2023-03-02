//zav1
/*const languageInfo = {
    ua: {
      daysOfWeek: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'],
      enterDayNumberMsg: 'Введіть номер дня неділі від 1 до 7?',
      invalidInputMsg: 'Ви ввели неправильні дані. Спробуйте ще раз.',
    },
    en: {
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      enterDayNumberMsg: 'Enter the day number of the week (from 1 to 7)?',
      invalidInputMsg: 'You entered invalid input. Please try again.',
    }
  };
  
  function getLanguage() {
    let lang = prompt('Виберіть мову "ua" або "en"?').toLowerCase();
    while (!(lang === 'ua' || lang === 'en')) {
      lang = prompt(languageInfo[lang].invalidInputMsg + '\n' + 'Виберіть мову "ua" або "en"?').toLowerCase();
    }
    return lang;
  }
  
  function getDayOfWeek(lang) {
    let dayNumber = parseInt(prompt(languageInfo[lang].enterDayNumberMsg));
    while (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber)) {
      dayNumber = parseInt(prompt(languageInfo[lang].invalidInputMsg + '\n' + languageInfo[lang].enterDayNumberMsg));
    }
    return languageInfo[lang].daysOfWeek[dayNumber - 1];
  }
  
  const lang = getLanguage();
  const dayOfWeek = getDayOfWeek(lang);
  alert(dayOfWeek);
  */
 //zav2
/* function ChessBoard(length, width) {
    this.length = length;
    this.width = width;
    
    this.drawBoard = function() {
      let board = "";
      const symbols = ["#", "@"];
      
      for (let i = length; i >= 1; i--) {
        for (let j = 1; j <= width; j++) {
          board += symbols[(i + j) % 2];
        }
        board += " " + i + "\n";
      }
      
      board += " ";
      for (let j = 1; j <= width; j++) {
        board += String.fromCharCode(64 + j) + " ";
      }
      
      console.log(board);
    };
  }
  
  // Приклад створення об'єкту дошки з розмірами 8x8
  const board1 = new ChessBoard(8, 8);
  board1.drawBoard();
  
  // Приклад створення об'єкту дошки з розмірами 6x10
  const board2 = new ChessBoard(6, 10);
  board2.drawBoard();
  */
 //zav3
 /*class Random {
    static nextDouble(low, high) {
      return Math.random() * (high - low) + low;
    }
  
    static nextInt(low, high) {
      return Math.floor(Math.random() * (high - low)) + low;
    }
  
    static nextElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
  */
 //zav4
 /*function Greetable(str) {
  this.str = str;
}

Greetable.prototype.greet = function(greeting) {
  return `${greeting}, ${this.str}!`;
};

function createGreetable(str) {
  return new Greetable(str);
}
*/
//zav5
/*function sequence(start = 0, step = 1) {
  return function* () {
    let currentValue = start;
    while (true) {
      yield currentValue;
      currentValue += step;
    }
  }
}
*/
//zav6
/* let characters = [
  {name: "barney", age: 36},
  {name: "fred", age: 40}
];
console.log(pluck(characters, 'name')); // ['barney', 'fred']

}*/
//zav7
/*function count(obj) {
  if (Array.isArray(obj)) {
    return obj.length;
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length;
  } else {
    return 0;
  }

let a = { a: 1, b: 2 };
console.log(count(a)); // 2

let b = function () {};
console.log(count(b)); // 0

let c = [1, 2, 3];
console.log(count(c)); // 3

let d = [];
d[100] = 1;
console.log(count(d)); // 1
}*/
//zav 8
/*class Task {
  constructor(name, description, startDate, endDate) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.subtasks = [];
  }

  addSubtask(subtask) {
    this.subtasks.push(subtask);
  }
}

class ExecutableTask extends Task {
  constructor(name, description, startDate, endDate, percentage = 0, isCompleted = false) {
    super(name, description, startDate, endDate);
    this.percentage = percentage;
    this.isCompleted = isCompleted;
  }

  updatePercentage(percentage) {
    this.percentage = percentage;
    if (this.percentage === 100) {
      this.isCompleted = true;
    }
  }
}
// Створення головного завдання
const mainTask = new Task('Завдання 1', 'Опис завдання 1', new Date(2023, 3, 1), new Date(2023, 3, 15));

// Створення підзадач для головного завдання
const subtask1 = new Task('Підзавдання 1', 'Опис підзавдання 1', new Date(2023, 3, 2), new Date(2023, 3, 7));
const subtask2 = new Task('Підзавдання 2', 'Опис підзавдання 2', new Date(2023, 3, 8), new Date(2023, 3, 13));
*/
//zav9
/*class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}
const john = new Worker('John', 'Doe', 10, 20);
console.log(john.getSalary()); // 200
*/
//zav10
//Клас Електростанція
class PowerStation {
  constructor(power) {
    this.power = power;
  }
  
  getPower() {
    return this.power;
  }
}
//Клас Сонячні панелі
class SolarPanel {
  constructor(power) {
    this.power = power;
  }
  
  getPower(isDay) {
    return isDay ? this.power : 0;
  }
}
//Клас Житловий будинок
class ResidentialBuilding {
  constructor(numApartments) {
    this.numApartments = numApartments;
  }
  
  getPower(isDay) {
    return isDay ? this.numApartments * 4 : this.numApartments;
  }
}
class PowerLine {
  constructor(capacity, price) {
    this.capacity = capacity;
    this.price = price;
  }
  
  getPrice() {
    return this.price;
  }
  
  getCapacity() {
    return this.capacity;
  }
}
class ElectricNetwork {
  constructor(network, dayPrice, nightPrice) {
    this.network = network;
    this.dayPrice = dayPrice;
    this.nightPrice = nightPrice;
  }
  
  getPowerUsage(isDay) {
    let totalPowerUsage = 0;
    for (let i = 0; i < this.network.length; i++) {
      const element = this.network[i];
      totalPowerUsage += element.getPower(isDay);
    }
    return totalPowerUsage;
  }
  
  getPowerProduction(isDay) {
    let totalPowerProduction = 0;
    for (let i = 0; i < this.network.length; i++) {
      const element = this.network[i];
      if (element instanceof PowerStation || element instanceof SolarPanel) {
        totalPowerProduction += element.getPower(isDay);
      }
    }
    return totalPowerProduction;
  }
  
  getPowerSurplus(isDay) {
    const powerProduction = this.getPowerProduction(isDay);
    const powerUsage = this.getPowerUsage(isDay);
    return powerProduction - powerUsage;
  }
  
  getPowerDeficit(isDay) {
    const powerProduction = this.getPowerProduction(isDay);
    const powerUsage = this.getPowerUsage(isDay);
    return powerUsage - powerProduction;
  }
}