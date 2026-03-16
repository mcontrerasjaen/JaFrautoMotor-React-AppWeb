export const initialStore = () => {
 
  const persistencia = localStorage.getItem("starwars_store");
  
  if (persistencia) {
      return JSON.parse(persistencia);
  }

  
  return {
    personajes: [],
    naves: [],
    planetas: [],
    criaturas: [],
    droides: [],
    species: [],
    organizaciones: [],
    favoritos: [], 
  }
}

export default function storeReducer(store, action = {}) {
 
  switch (action.type) {
    case 'set_personajes':
      return { ...store, personajes: action.payload };
    case 'set_naves':
      return { ...store, naves: action.payload };
    case 'set_planetas':
      return { ...store, planetas: action.payload };
      case 'set_criaturas':
      return { ...store, criaturas: action.payload };
       case 'set_droides':
      return { ...store, droides: action.payload };
      case 'set_species':
      return { ...store, species: action.payload };
      case 'set_organizaciones':
      return { ...store, organizaciones: action.payload };
    case 'toggle_favorito':
      const item = action.payload;
      const existe = store.favoritos.some(fav => fav._id === item._id);
      return {
        ...store,
        favoritos: existe 
          ? store.favoritos.filter(fav => fav._id !== item._id) 
          : [...store.favoritos, item]
      };
    default:
      return store;
  }
}

