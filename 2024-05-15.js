/*Paso Código de JS : Leer consigna (esta comentada en el JS), deberá encontrar si hay errores y corregirlos, 
además de proponer una mejora superadora en el código JavaScript. */

//Algorito n programa que simule un cajero automático con las siguientes funciones:

//iniciarSesion(pin): Inicializa la sesión del cajero automático verificando el pin ingresado.
//consultarSaldo(): Muestra el saldo actual de la cuenta del usuario.
//depositar(monto): Deposita un monto en la cuenta del usuario.
//retirar(monto): Retira un monto de la cuenta del usuario, verificando que el monto sea menor o igual al saldo disponible
//y que no exceda el límite diario de retiro.
//mostrarMenu(): Muestra un menú con las opciones disponibles para el usuario
//(consultar saldo, depositar, retirar, salir).

// Datos de la cuenta del usuario
const cuenta = {
  saldo: 10000,
  pinCorrecto: 1234,
  limiteRetiroDiario: 2000,
};

// Función para iniciar sesión
function iniciarSesion(pinIngresado) {
  if (pinIngresado === cuenta.pinCorrecto) {
    console.log("Sesión iniciada correctamente.");
    return true;
  } else {
    console.error("Error: PIN incorrecto. Inténtelo de nuevo.");
    return false; // Indica que la sesión no se inició
  }
}

// Función para consultar saldo
function consultarSaldo() {
  console.log(`Su saldo actual es de: $${cuenta.saldo}`);
}

// Función para depositar
function depositar(monto) {
  if (monto <= 0) {
    console.error("Error: El monto a depositar debe ser un valor positivo.");
  } else {
    cuenta.saldo += monto;
    console.log(
      `Se ha depositado $${monto} correctamente. Su nuevo saldo es de: $${cuenta.saldo}`
    );
  }
}

// Función para retirar
function retirar(monto) {
  if (monto <= 0) {
    console.error("Error: El monto a retirar debe ser un valor positivo.");
    return; // No se realiza el retiro si el monto es inválido
  }

  if (monto > cuenta.saldo) {
    console.error("Error: El monto a retirar excede su saldo disponible.");
    return; // No se realiza el retiro si el monto supera el saldo
  }

  if (monto > cuenta.limiteRetiroDiario) {
    console.error(
      "Error: El monto a retirar excede el límite diario de retiro."
    );
    return; // No se realiza el retiro si el monto supera el límite diario
  }

  cuenta.saldo -= monto;
  console.log(
    `Se ha retirado $${monto} correctamente. Su nuevo saldo es de: $${cuenta.saldo}`
  );
}

// Función para mostrar el menú
function mostrarMenu() {
  console.log("\nMenú Principal:");
  console.log("1. Consultar saldo");
  console.log("2. Depositar");
  console.log("3. Retirar");
  console.log("4. Salir");

  let salir = false;
  opcion = prompt("Ingrese una opción (1-4): ");

  do {
    opcion = parseInt(prompt("Ingrese una opción (1-4): ")); // Convertir la entrada a número
    switch (opcion) {
      case 1:
        consultarSaldo();
        break;
      case 2:
        let montoDepositar = parseFloat(
          prompt("Ingrese el monto a depositar: $")
        );
        depositar(montoDepositar);
        break;
      case 3:
        let montoRetirar = parseFloat(prompt("Ingrese el monto a retirar: $"));
        retirar(montoRetirar);
        break;
      case 4:
        console.log("Saliendo del cajero automático...");
        salir = true;
        break;
      default:
        console.error("Opción inválida. Inténtelo de nuevo.");
    }
  } while (!salir);
}

// Iniciar sesión y mostrar el menú principal
let pinIngresado = parseInt(prompt("Ingrese su PIN: "));
if (iniciarSesion(pinIngresado)) {
  mostrarMenu();
}
