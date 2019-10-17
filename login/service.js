const service = {
  login: function(user, password) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // login esta hecho
        if (user === "example" && password === "1234") {
          const account = {
            user,
            password,
            name: "hola"
          };
          resolve({ success: true, account });
        } else {
          reject({ code: 404, msg: "Usuario incorrecto" });
        }
      }, 3000);
    });
    // setInterval
  },
  getUsers: function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve([
          {
            user: "example",
            password: "1234",
            name: "Ejemplo"
          },
          {
            user: "test",
            password: "4321",
            name: "Prueba"
          }
        ]);
      }, 2000);
    });
  }
};
