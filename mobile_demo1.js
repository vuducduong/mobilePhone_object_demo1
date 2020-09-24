function Mobile(){
    this.battery = 100;
    this.draft = "";
    this.inbox = [];
    this.sent = [];
    this.status = false;

    this.isOn = function (){
        return this.status;
    }
    this.turnOn = function (){
        this.status = true;
    }
    this.turnOff = function (){
        this.status = false;
    }
    this.charge = function () {
        if(this.battery<100){
            this.battery++;
        }

    }
    this.typeMessage = function (message){
        if(this.isOn()){
            this.battery--;
            this.draft = message;
        }
    }
    this.receiveMessage = function (message){
        if(this.isOn()){
            this.battery--;
            this.inbox.push(message);
        }
    }
    this.sendMessage = function (mobile){
        if(this.isOn()){
            this.battery--;
            mobile.receiveMessage(this.draft);
        }
    }
    this.getInbox = function (){
        if(this.isOn()){
            this.battery--;
        return this.inbox;}
    }
}
let iphone = new Mobile();
let nokia = new Mobile();
iphone.turnOn();
nokia.turnOn();
iphone.typeMessage("what do you think");
iphone.sendMessage(nokia);

document.write(nokia.getInbox());
