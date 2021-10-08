import { info } from "console"

//interface for the result output
interface IDetails{
    firstName:string,
    lastName:string,
    age:number,
    weight:number,
    height:number,
    saddist:string,
    hardworking:string
}

//console input for the user
const promp = require("prompt-sync")()

//with physical details of user
class Person{
    firstName:string
    lastName:string
    age:number
    weight:number
    height:number
}

//with behavioural details of user and extends class person 
class User extends Person{
    saddist:string
    hardworking:string
    details:IDetails
    
    //saves inputs of the user
    infoInput(){
    this.firstName = promp("what is your firstname?")
    this.lastName = promp("what is your lastname?")
    this.age = promp("How old are you?")
    this.weight = promp("what's your weight?")
    this.height = promp("How tall are you?")
    this.saddist = promp("Do you feel saddictic most of the time?")
    this.hardworking = promp("Do you think you are hardworking enough?")
        
        this.details = {
        firstName: this.firstName,
        lastName : this.lastName,
        age : this.age,
        weight : this.weight,
        height : this.height,
        saddist : this.saddist,
        hardworking : this.hardworking
        }
        console.log("")
        console.log("THESE ARE YOUR DETAILS BELOW")
        console.log(this.details)
    }
    
    

}
const UserObj = new User()
UserObj.infoInput()
