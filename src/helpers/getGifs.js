

export const getGifs = async(category, limit = 9) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=${limit}&api_key=H5JM7KGPURr40mT0RReblutg7zxFfKMD`;
    const resp = await fetch( url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}