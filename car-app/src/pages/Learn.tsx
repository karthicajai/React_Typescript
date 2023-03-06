import React from "react";
import { useParams } from "react-router-dom";

  
export const Learn: React.FC = () => {
    const { id } = useParams();

    console.log(id);

    return <h1>Learn page!</h1>;
};
