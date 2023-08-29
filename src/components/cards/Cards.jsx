import React from 'react'

const Cards = ({results}) => {
    let personagem;
    if(results){
        personagem = results.map(({id, name, image, location, status}) => {
            return(
                <div key={id} className=''>
                    <div className=''>
                        <img style={{width: '100px', height: '100px'}} src={image} alt="" className="" />
                        <div className="content">
                            <div className="">{name}</div>
                            <div className="">
                                <div className="">Last Location</div>
                                <div className="">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>{status}</div>
                </div>
            )
        });
    } else {
        personagem = "Personagem não encontrado";
    }
  return (
    <div className='col-4'>{personagem}</div>
  )
}

export default Cards