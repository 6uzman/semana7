// service
//   .login("example", "1234")
//   .then(function(user) {
//     console.log("El login fue exitoso");
//     console.log(user);
//   })
//   .catch(function() {
//     console.log("el login fue erroneo");
//   });
const mainLogin = document.getElementById("main-login")
const button = document.getElementById("login_button")
const userInput = document.querySelector('input[type="text"]')
const passInput = document.querySelector('input[type="password"]')

button.addEventListener("click", function(e) {
  console.log(userInput.value)
  console.log(passInput.value)
  if (userInput.value.length === 0 || passInput.value.length === 0) {
    alert("Alguno de los campos está vacio")
  } else {
    service
      .login(userInput.value, passInput.value)
      .then(function(user) {
        console.log(user)
        alert("Bienvenido")
        loadUsers()
      })
      .catch(function() {
        alert("Error, prueba de nuevo")
        userInput.value = ""
        passInput.value = ""
      })
  }

  console.log("Se ha hecho click")
})

function loadUsers() {
  service
    .getUsers()
    .then(function(users) {
      console.log(users)
      const table = createTable()
      mainLogin.appendChild(table)

      for (let user of users) {
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.innerHTML = user.user

        const td2 = document.createElement("td")
        td2.innerHTML = user.name
        tr.appendChild(td1)
        tr.appendChild(td2)
        //let card = document.querySelector(".card")
        //card.remove()
        document.querySelector("table > tbody").appendChild(tr)
        //table.tbody.appendChild(tr)
      }
      console.log(table)
    })
    .catch(function(error) {
      console.log("Error al obtener los usuarios: " + error)
    })
}

function createTable() {
  const table = document.createElement("table")
  table.className = "table"
  const thead = document.createElement("thead")
  const tr = document.createElement("tr")
  const th1 = createTh("col", "user")
  const th2 = createTh("col", "name")
  tr.appendChild(th1)
  tr.appendChild(th2)
  thead.appendChild(tr)

  const tbody = document.createElement("tbody")

  table.appendChild(thead)
  table.appendChild(tbody)

  return table
}

function createTh(scope, value) {
  const th = document.createElement("th")
  th.scope = scope
  th.innerHTML = value
  return th
}
