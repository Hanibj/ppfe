import React from 'react'
import '../css/Infoo.css'
import styled from 'styled-components'
import happinessatwork from "../image/happiness-at-work.png"
const Container = styled.div`
width: 100%;
background: linear-gradient(
    rgba(0, 110, 88, 0.308),
    rgba(255, 255, 255, 0.5)
  )
    center;
background-size: cover;
align-items: center;
justify-content: center;
padding-left: 20px;
padding-right: 20px;
    
    `



const Info = () => {
  return (
   
      <Container>
    <div className="container">
      
        <div className='hinner'>
        <div className='leftPanel'>
        
          <div className="header-content">
            <h4>Dopee est une platform qui perment au entreprise d'amelioration
 la satisfaction et le bien-être des employes au travail, notre projet va
offrir une gamme d'outils tels que  des ateliers
et des  ́evaluations pour l'aider  acreer un environnement de
travail positif et a remonter le moral de leurs employes .qui va permettra
d'augmenter la productivitde  et reduire le roulement et de creer une  ́equipe
plus heureuse et plus engage.</h4>
            
            
         
        </div>
        </div>
        <div className='rightPanel'>
       
            <img src={happinessatwork} alt="#" />
         
        </div>
      </div>
    </div>
   
    </Container>

  )
}

export default Info