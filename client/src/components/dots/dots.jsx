import React from 'react'
import { DotContainer, DotsContainer } from './dots.styled'


const Dot = ({ active }) => (
  <DotContainer
    // className={`${active ? 'active': ''}`}
    active={active}
  />
)

const Dots = ({ arraydata, activeIndex }) => (
  <DotsContainer
    
  >
    {arraydata.map((data, i) => (
      <Dot key={data.imageUrl} active={activeIndex === i*-100} />
    ))}
  </DotsContainer>
)

export default Dots