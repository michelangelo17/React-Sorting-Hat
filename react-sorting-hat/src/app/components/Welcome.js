import React from 'react'
import { FlexContainer, H1, H2, P, Button } from '../emotionalThings/EmoTools'

const Welcome = () => {
  return (
    <FlexContainer white fdc aic w='50%'>
      <H1>Welcome to Hogwarts!</H1>
      <H2>First things first!</H2>
      <P>Time to get sorted into your house. Ready to begin?</P>
      <Button type='button'>Let's Go!</Button>
    </FlexContainer>
  )
}

export default Welcome
