import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { Text, Group, RoundedRect, useComputedValue,SkiaMutableValue, useValue } from "@shopify/react-native-skia";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const SQUARES_AMOUNT_HORIZONTAL = 7;
const SQUARE_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL;
const PADDING = SQUARE_CONTAINER_SIZE/20;
const SQUARE_SIZE = SQUARE_CONTAINER_SIZE - PADDING;
const SQUARES_AMOUNT_VERTICAL = Math.floor(SCREEN_HEIGHT / SQUARE_CONTAINER_SIZE) - 3;


function Word({ i, j, elem, font, point,pressed,word,setWord}) {

    const x = i * (SQUARE_SIZE + PADDING) + (PADDING / 2);
    const y = (j + 1) * (SQUARE_SIZE + PADDING);
    if (font === null) {
        return null;
    }
    const distance = (point.x ===null) ? null : Math.sqrt(
        (point.x - x-(SQUARE_SIZE/2)) ** 2 + (point.y - y-(SQUARE_SIZE/2)) ** 2
      )
    if ((distance !==null)&&(distance<(SQUARE_SIZE/2)))
        {
            
            if (word.current[word.current.length-2]===`${i} ${j}`)
            {
                
                pressed.current[c[0]][c[1]]=false;
            }
            else if (!(pressed.current[i][j]))
             {
                word.current.push(`${i} ${j}`);
                pressed.current[i][j]=true;
            }   
        }
        


    return (
        <Group >
            <RoundedRect width={SQUARE_SIZE}
                height={SQUARE_SIZE}
                x={x} y={y}
                color={ (pressed.current[i][j]) ? 'blue' : 'red'}/>
            <Text
                text={elem} x={(i * (SQUARE_SIZE + PADDING)) + (SQUARE_SIZE / 4) + (PADDING / 2)}
                y={((j + 1) * (SQUARE_SIZE + PADDING)) + 25 + (SQUARE_SIZE / 4)} font={font} />
        </Group>
    )
}

export default Word;