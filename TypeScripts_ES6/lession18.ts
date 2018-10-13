class Pepole {
        name: string;

        constructor(name: string) {
                this.name = name;
                console.log(this.name + " constructor");
        }
        static talk() {
                console.log("this is static method talk");
        }
        run(){
                console.log("Pepole is running");
        }
}
let p = new Pepole("Tai");
Pepole.talk();