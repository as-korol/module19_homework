function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
  ElectricalAppliance.prototype.turnOn = function() {
    this.pluggedIn = true;
    console.log(this.name + " включен в розетку");
  };
  
  ElectricalAppliance.prototype.turnOff = function() {
    this.pluggedIn = false;
    console.log(this.name + " выключен из розетки");
  };
  
  function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
  }
  
  DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
  
  DeskLamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(this.name + " яркость установлена на " + level);
  };
  
  function Computer(name, power, operatingSystem) {
    ElectricalAppliance.call(this, name, power);
    this.operatingSystem = operatingSystem;
  }
  
  Computer.prototype = Object.create(ElectricalAppliance.prototype);
  
  Computer.prototype.runApplication = function(application) {
    console.log("Запуск приложения " + application + " на " + this.name);
  };
  
  const deskLamp = new DeskLamp("Настольная лампа", 25, 50);
  const computer = new Computer("Компьютер", 500, "Windows");
  
  deskLamp.turnOn();
  computer.turnOn();
  
  function calculatePowerConsumption(...devices) {
    let totalPower = 0;
    devices.forEach(device => {
      if (device.pluggedIn) {
        totalPower += device.power;
      }
    });
    console.log("Общая потребляемая мощность: " + totalPower + " Вт");
  }
  
  calculatePowerConsumption(deskLamp, computer);
  