import React from 'react'
import { Row,Container,Col} from 'react-bootstrap'
import './Section.css'

function Sections({
  lightBg,
  imgr,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  imgStart
}) {
  return (
    <> 
      <br/>
      <div className={lightBg ? 'Lbg' : 'Dbg'} >
        <Container>
          <Row style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row' : 'row-reverse'
          }}>
            <Col>
              <img alt='Text' src={img} 
                style={{
                  width: '480px', paddingRight: '0px',
                  height: '380px', margin: '0px 0px 20px 10px',
                  
                }} />
            </Col>
            <Col>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                  {description}</p>
              </div>
            </Col>
          </Row>
        </Container>
    </div >
      
        </>
    )
}

export default Sections
