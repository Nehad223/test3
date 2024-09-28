import React from 'react';
import './Meals.css';
const MealsSummary = () => {
    var root = document.querySelector(':root');
    root.style.setProperty('--color','#333');
  return (
    
    <div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2'></div>
                    <div className='col-lg-8 col-md-8'>
                        <div className='text' >
                            <h3>delicious food , Luka App </h3>
                            <p>loernloernloernloernloernloernloerloernloernloernloernloernloernloern
                                loernloernloernloernloernloernloernloernloernloernloernloernloernloern
                                loernloernloernloernloernloernloern
                                loernloernloernloernloernloernloernloernloernloernloernloernloernloern
                                loernloernloernloernloernloernloern
                                loernloernloernloernloernloernloern
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2'></div>
                    
                        
                    

                </div>

            </div>
        </section>
      
    </div>
  )
}

export default MealsSummary
