class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    turnOn() {
      this.pluggedIn = true;
      console.log(`${this.name} включен в розетку`);
    }
  
    turnOff() {
      this.pluggedIn = false;
      console.log(`${this.name} выключен из розетки`);
    }
  }
  
  class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
    }
  
    adjustBrightness(level) {
      this.brightness = level;
      console.log(`${this.name} яркость установлена на ${level}`);
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, power, operatingSystem) {
      super(name, power);
      this.operatingSystem = operatingSystem;
    }
  
    runApplication(application) {
      console.log(`Запуск приложения ${application} на ${this.name}`);
    }
  }
  
  const deskLamp = new DeskLamp("Настольная лампа", 25, 50);
  const computer = new Computer("Компьютер", 500, "Windows");
  
  deskLamp.turnOn();
  computer.turnOn();
  
  function calculatePowerConsumption(...devices) {
    let totalPower = devices.reduce((total, device) => {
      return device.pluggedIn ? total + device.power : total;
    }, 0);
    console.log(`Общая потребляемая мощность: ${totalPower} Вт`);
  }
  
  calculatePowerConsumption(deskLamp, computer);
  