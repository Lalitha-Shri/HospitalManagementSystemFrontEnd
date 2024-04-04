import React from 'react'
import doc2 from './images/doc2.png'
import magil from './images/magil.png'
import doc3 from './images/doc3.png'
import hex from './images/hex.png'
import founder from './images/founder.png'
import md1 from './images/md1.png'
import chief from './images/chief.png'
const HomeComponent = () => {
  return (
    <>
    <div className= "col bg-danger text-center" style={{height:"160px"}}>
       <img
            src={doc2}
            width="150"
            height="auto"
            className="float-left"
            alt=""
          />
         
          <img
            src={magil}
            width="300"
            height="auto"
            className="float-left mt-3 "
            alt=""
          />
           <img
            src={doc3}
            width="240"
            height="auto"
            className="float-left"
            alt=""
          />
        <div className='float-right'> 
   {/* <h2 className=' text-white text-center pt-5'> Lifting you up with Healing vibes</h2> */}
   <h4 className=' text-white text-center pt-5'>"Our hospital is filled with heroes wearing scurbs"</h4>
   <h5 className=' text-white text-center pb-5'>"For your hope truimphs over despair"</h5></div> 
    </div>
    <div className='col bg-secondary' style={{height:"160px"}}>
      <h4 className='text-center text-white pt-3'>OUR MISSION
      <h5 className='pt-2 text-white'>“To provide affordable healthcare of international standard with human care.”</h5></h4>
     
      <img
            src={hex}
            width="700"
            height="auto"
            className="float-left"
            alt=""
          />
   
    
    </div>
    <div className="col-sm  text-center mt-1">
    <div class="card float-right mr-5" style={{width: "12rem"}}>
    <img
            src={chief} class="card-img-top" alt="..." height="130px"/>
    <div class="card-body ">
      <h5 class="card-title">Chief Doctor</h5>
      <p class="card-text">Dr. S.Santhosh Prathap </p>
      <p class="card-text">MBBS MD  </p>
      
    </div>
    </div>
    </div>
    <div className="col-sm  text-center mr-5">
    <div class="card float-right mr-5" style={{width: "12rem"}}>
    <img
            src={md1} class="card-img-top" alt="..." height="130px"/>
    <div class="card-body">
      <h5 class="card-title">Medical Director</h5>
      <p class="card-text">Dr.Aruna N Palanisamy </p>
      <p class="card-text">MS Gyneocologist </p>
      
    </div>
    </div>
    
    </div>
    <div className="col-sm  text-center mr-5">
    <div class="card float-right mr-5" style={{width: "12rem"}}>
    <img
            src={founder} class="card-img-top" alt="..." height="130px"/>
    <div class="card-body">
      <h5 class="card-title">Founder</h5>
      <p class="card-text">Dr.Prathap C Reddy</p>
      <p class="card-text">MD MBBS FCCP FRCS</p>
      
    </div>
    </div>
    
    </div>
    </>
  )
}

export default HomeComponent