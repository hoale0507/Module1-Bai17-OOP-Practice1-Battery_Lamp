class Battery {
    _energy;
    constructor(energy) {
        this._energy = energy;
    }
    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    decreaseEnergy(){
        if(this.energy > 0){
            this.energy--;
        }
    }
}
class FlashLamp {
    _status;
    _battery;
    constructor(status,battery) {
        this._status = status;
        this._battery = battery;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }
    getBatteryInfo () {
        return this.battery.energy;
    };
    light() {
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };

    turnOn() {
        this.status = true;
    };

    turnOff() {
        this.status = false;
    }
}