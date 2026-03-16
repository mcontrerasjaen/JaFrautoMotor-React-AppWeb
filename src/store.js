export const initialStore = () => {
  const persistencia = localStorage.getItem("taller_app_data");
  
  if (persistencia) {
      try {
          return JSON.parse(persistencia);
      } catch (e) {
          console.error("Error al leer el localStorage", e);
      }
  }

  return {
    servicios: [],    
    urgente: [],      
    vehiculo: null,   
    citas: [],        
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_servicios':
      return { ...store, servicios: action.payload };

    case 'toggle_urgente':
      const item = action.payload;
      const existe = store.urgente.some(serv => serv.id === item.id);
      
      const nuevoEstado = {
        ...store,
        urgente: existe 
          ? store.urgente.filter(serv => serv.id !== item.id) 
          : [...store.urgente, item]
      };

      localStorage.setItem("taller_app_data", JSON.stringify(nuevoEstado));
      return nuevoEstado;

    default:
      return store;
  }
}