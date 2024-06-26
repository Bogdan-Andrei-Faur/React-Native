import React from "react";
import { FlatList } from 'react-native';
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.js";
const RepositoryList = () => {
    const { repositories } = useRepositories()

    return (
        <FlatList 
            data={repositories}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}/>
            )}
        />
    )
}

export default RepositoryList;