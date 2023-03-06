import React from "react";
import { useParams } from "react-router-dom";

  
export const Shop: React.FC = () => {
    const { id } = useParams();

    console.log(id);

    return <h1>Shop page!</h1>;
};
