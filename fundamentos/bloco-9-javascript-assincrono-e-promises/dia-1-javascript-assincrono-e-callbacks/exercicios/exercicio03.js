/*
 * A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
 * Modifique getPlanet, de forma que Marte seja impresso assincronamente,
 * depois de 4 segundos. 
 */

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };
  
  setTimeout(() => console.log('4'), 1000); // Counter
  setTimeout(() => console.log('3'), 2000); // Counter
  setTimeout(() => console.log('2'), 3000); // Counter
  setTimeout(() => console.log('1'), 4000); // Counter
  setTimeout(() => getPlanet() , 4000); // Delay 4 Segundos
