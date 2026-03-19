const user = {
    name: "Tushar",
    age: 25,
    welcomeMessage : function (){
        console.log(`${this.name} just logged in`);  //this keyword refers to the current object.
        console.log(this);  //this keyword refers to the current object.
        
    }
}

user.welcomeMessage();
user.name="Vaidya";
user.welcomeMessage();
