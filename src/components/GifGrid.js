import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading} = useFetchGifs( category );

    // // Poniendo el [] sólo se ejecuta una vez al renderizar el componente por pirmera vez
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages )
    // }, []);
    

    // Se puede dejar aquí, pèro hemos creado la carpta helpers para hacer este tipo de llamadas
    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=H5JM7KGPURr40mT0RReblutg7zxFfKMD`;
    //     const resp = await fetch( url);
    //     const {data} = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages(gifs);

    // }

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>     

            { loading && <p className='animate__animated animate__flash animate__infinite'>Loading</p> }
                 
            <div className='card-grid'>

                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}
