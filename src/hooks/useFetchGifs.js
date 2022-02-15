import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//Custom hook. Se comportan como si fueran funtional components
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Poniendo [category] sólo se lanzará el efectocuando la categoría cambie
    // En este caso no va ha cambiar así que sólo se ejecutará la primera vez
    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {

                // Ponemos el timeout para simular lentitud y poder ver el loading
                //setTimeout(() => {                    
                    setState({
                        data: imgs,
                        loading:false
                    });
                //}, 3000);
            });

    }, [category]);

    return state;

}
