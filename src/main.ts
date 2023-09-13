
interface IUser {
  username: string;
  password: string;
}

let myUser: IUser = {
  username: "",
  password: ""
}

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  nik: string
}

let iniEmployee: Employee = {
  name: "Andi",
  age: 23,
  nik: "2313344"
}

console.log(iniEmployee)

let username:any = document.querySelector("#username");
let password:any = document.querySelector("#password");
let button: any = document.querySelector("#button");

username.addEventListener("keyup", (e: any) => {
  myUser.username = e.target.value;
});

password.addEventListener("keyup", (e: any) => {
  myUser.password = e.target.value;
})

button.addEventListener("click", () => {
  fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(myUser)
  })
    .then(res=>res.json())
    .then(json=> {
      console.log(json);
      localStorage.setItem("TOKEN", json.token)
    })  
})









