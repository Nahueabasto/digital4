import axios from 'axios';


export const getExchangeRates = async (req, res) => {
  try {
    const response = await axios.get('https://api.bluelytics.com.ar/v2/latest');
    const data = response.data;

    const result = {
      official: {
        value_avg: data.oficial.value_avg,
        value_sell: data.oficial.value_sell,
        value_buy: data.oficial.value_buy,
      },
      blue: {
        value_avg: data.blue.value_avg,
        value_sell: data.blue.value_sell,
        value_buy: data.blue.value_buy,
      },
      official_euro: {
        value_avg: data.oficial_euro.value_avg,
        value_sell: data.oficial_euro.value_sell,
        value_buy: data.oficial_euro.value_buy,
      },
      blue_euro: {
        value_avg: data.blue_euro.value_avg,
        value_sell: data.blue_euro.value_sell,
        value_buy: data.blue_euro.value_buy,
      }
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).json({ message: 'Error fetching exchange rates' });
  }
}



























// //va a llamar al enpoint de la api y me va a traer toda la info que voy a necesitar 
// const getApiInfo = async () => {
    
//     const allDogs = await axios.get("https://api.thedogapi.com/v1/breeds"); //await porque nunca sabe cuanto puede demorar en cargar la respuesta entonces con eso espero hasta que se cargue para la const allDogs, trabaja de manera asincrona
//     const perros = await allDogs.data.map((e) => { //mapeo esa info
//         return{ //devolveme unicamente lo que yo necesito traerme desde el back para mi aplicacion
//             id: e.id,
//             name: e.name,
//             image: e.image.url, //necesito la url
//             temperament: e.temperament, //hago un map porque debe devolver varios temperament, porque me devuelve un arreglo, entonces tengo que hacer un map para que me devuelva todos 
//             height: e.height.metric, //para acceder al peso
//             weight: e.weight.metric, //para acceder a la altura,
//             life_span: e.life_span,
//         }
//     })
//     return perros;

// }

// //info de la base de datos:
// const getDbInfo = async () => {
//     return await Dogs.findAll({
//         include: {
//             model: Temperament,
//             attributes: ["name"], //del modelo temperament devolveme el nombre del temperament
//             through: { //sobre la tabla atributos, esa configuracion va siempre
//             attributes: [],
//           },
//         }
//     })
// }

// const getAllDogs = async () => {
//     const apiInfo = await getApiInfo(); 
//     const dbInfo = await getDbInfo();
//     const infoTotal = apiInfo.concat(dbInfo);
//     return infoTotal; //me devuelve un arreglo
// }

// module.exports = {
//     getApiInfo,
//     getDbInfo,
//     getAllDogs,
// }


