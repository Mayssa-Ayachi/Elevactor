import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { Text, Group, RoundedRect, useComputedValue, SkiaMutableValue, useValue } from "@shopify/react-native-skia";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const SQUARES_AMOUNT_HORIZONTAL = 7;
const SQUARE_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL;
const PADDING = SQUARE_CONTAINER_SIZE / 20;
const SQUARE_SIZE = SQUARE_CONTAINER_SIZE - PADDING;
const SQUARES_AMOUNT_VERTICAL = Math.floor(SCREEN_HEIGHT / SQUARE_CONTAINER_SIZE) - 3;


function Word({ i, j, elem, font, point, pressed, word, randomColor, color }) {
    const x = i * (SQUARE_SIZE + PADDING) + (PADDING / 2);
    const y = j  * (SQUARE_SIZE + PADDING);
    if (font === null) {
        return null;
    }
    const distance = (point.x === null) ? null : Math.sqrt(
        (point.x - x - (SQUARE_SIZE / 2)) ** 2 + (point.y - y - (SQUARE_SIZE / 2)) ** 2
    )
    if ((distance !== null) && (distance < (SQUARE_SIZE / 2))) {
        if (word.current[word.current.length - 2] === `${i} ${j}`) {
            let c = word.current.splice(word.current.length - 1);
            c = c[0].split(' ');
            pressed.current[c[0]][c[1]] = false;
            color[c[0]][c[1]] = { red: 255, blue: 255, green: 255 }

        }
        else {
            if (word.current.length !== 0) {
                let k = word.current[word.current.length - 1];
                k = k.split(' ');
                if (((Math.abs(k[1] - j) === 1) && ((Math.abs(k[0] - i) < 2))) || ((Math.abs(k[0] - i) === 1)) && (Math.abs(k[1] - j) < 2)) {
                    word.current.push(`${i} ${j}`);
                    pressed.current[i][j] = true;
                    color[i][j] = { red: Math.round((color[i][j].red + randomColor.red) / 2), blue: Math.round((color[i][j].blue + randomColor.blue) / 2), green: Math.round((color[i][j].green + randomColor.green) / 2) }
                    console.log(`${i} ${j}+`)
                }
            }
            else {
                word.current.push(`${i} ${j}`);
                pressed.current[i][j] = true;
                color[i][j] = { red: Math.round((color[i][j].red + randomColor.red) / 2), blue: Math.round((color[i][j].blue + randomColor.blue) / 2), green: Math.round((color[i][j].green + randomColor.green) / 2) }
                console.log(`${i} ${j}+`)
            }
        }
    }
    const houwa = `rgb(${color[i][j].red},${color[i][j].blue},${color[i][j].green})`
    return (
        <Group >
            <RoundedRect width={SQUARE_SIZE}
                height={SQUARE_SIZE}
                x={x} y={y}
                color={houwa} />
            <Text
                text={elem} x={(i * (SQUARE_SIZE + PADDING)) + (SQUARE_SIZE / 4) + (PADDING / 2)}
                y={( j * (SQUARE_SIZE + PADDING)) + 25 + (SQUARE_SIZE / 4)} font={font} />
        </Group>
    )
}

export default Word;