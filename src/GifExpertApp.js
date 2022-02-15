import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Así no podemos añadir elementos de manera dinámica
    // const categories = ['One Pouch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // No podemos usar categories.push() ya que al ser el hook useState se ha de modificar usando
    //     setCategories([...categories, 'HunterXHunter']);
    //     // setCategories(cats => [ ...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={ handleAdd }>Añadir</button> */}            

            <ol>
                    { 
                        categories.map( category => (
                            <GifGrid 
                                key={category}
                                category={category} 
                            />
                        ))
                    }
            </ol>
        </>
    );   
  
  }