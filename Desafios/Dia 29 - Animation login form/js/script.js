function showORhide() {
  var x = document.getElementById("password"); //Puxa o elemento por id | Get the element by id
  var i = document.getElementById("icon"); //Puxa o elemento por id | Get the element by id
  //Se o tipo for identico a password | If the type is identical the password
  if (x.type === "password") {
    x.type = "text"; //troque o tipo por text | change the type to text
    i.classList.remove("fa-lock"); //remova a classe |  remove the class
    i.classList.add("fa-lock-open"); //adiciona a classe | add the class
  } else {
    //senão
    x.type = "password"; //troque o tipo por password | change the type to password
    i.classList.remove("fa-lock-open"); //remova a classe |  remove the class
    i.classList.add("fa-lock"); //adiciona a classe | add the class
  }
}
