const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]       
 

/* Ejercicio 1 */
console.log("Explorers: ");
explorers.forEach(element => console.log(element.name))

/* Ejercicio 2 */
console.log("Explorers Stack: ");
explorers.forEach(element => console.log(element.stack))

/* Ejercicio 3 */
console.log("Lista de stacks: ")
const stacklist = explorers.map((element) => {return element.stack})
console.log(stacklist)

/* Ejercicio 4 */
console.log("lista de explorers con js: ")
const lsttypelist = explorers.filter((element) => element.stack.includes("js"))
console.log(lsttypelist)

/* Ejercicio 5 */
console.log("Primer coincidencia: ")
const location = explorers.find((element) => element.city == "CDMX")
console.log(location)

/* Ejercicio 6 */
console.log("Suma de todos los exercises: ")
const totalExercises = explorers.reduce((acc, element) => acc + element.exercises_completed,0)
console.log(totalExercises)

/* Ejercicio 7 */
console.log("Validación de ejercicios terminados: ")
const validation = explorers.some((element) => element.missions.frontend.exercisesFinished === true)
console.log(validation)

/* Ejercicio 8 */
console.log("Validación de onboarding de explorers: ")
const validateOnboarding = explorers.every((element) => element.missions.onboarding.isFinished === true)
console.log(validateOnboarding)