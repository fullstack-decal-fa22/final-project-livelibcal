import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
import {useState} from 'react'

function SliderMarkExample(props) {
    const [sliderValue, setSliderValue] = useState(50)
  
    const labelStyles = {
      mt: '1',
      ml: '-2.5',
      fontSize: '10',
    }

    function returnValue(){
      props.returnValue(sliderValue);
    }

    const covertSliderValue = (s) =>{
      if (s < 30){
        return props.begin;
      } else if (s > 70) {
        return props.end;}
        else
        {
        return props.middle
        }
        
    }
   
    return (
      <Box pt={6} pb={2}>
        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} onChangeEnd={returnValue}>
          <SliderMark flex value={5} {...labelStyles}>
            {props.begin}
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            {props.middle}
          </SliderMark>
          <SliderMark value={95} {...labelStyles}>
            {props.end}
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
            fontSize={10}
          >
            {covertSliderValue(sliderValue)}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }

  export default SliderMarkExample;