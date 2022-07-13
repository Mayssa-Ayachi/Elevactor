import React from "react";
import { FlatList } from "react-native-gesture-handler";
import LangCard from "../components/LangCard";

export default function SubTheme(){
    return (
        <FlatList>
            <LangCard />
        </FlatList>
    )
}