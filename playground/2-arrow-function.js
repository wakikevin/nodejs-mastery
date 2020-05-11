// const square = function(x){
//     return x*x;
// }

// const square = (x) =>{
//     return x*x
// }

//const square = (x) => x*x;
//console.log(square(6));
// var event = {
//     name: "Party",
//     printGuestList : function (){
//         console.log(`Guest list for : ${this.name}`)
//     }
// }

// var event = {
//     name: "Party",
//     printGuestList : ()=> {
//         console.log(`Guest list for : ${this.name}`)
//     }
// }

var event = {
    name: "Birthday Party",
    guestList : ['Kevin','Sheila', 'Test'],
    printGuestList(){
        console.log(`Guest list for : ${this.name}`)
        this.guestList.forEach((guest)=>{
            console.log(`${guest} is atteding ${this.name}`)
        })
    }
}
event.printGuestList();