import React from "react";
import { Link } from "react-router-dom";
import car from "../model/carsModel";

interface Props {
    key: string;
    car: car;
}

export const SingleItem: React.FC<Props> = ({key, car}) => {

    //top
    const liStyle = {display:'flex', flexDirection: 'column', marginRight:'15px'}
    const nameStyle = {display:'flex', flexDirection: 'row'}
    const bodyTypeStyle = {textTransform:'uppercase', marginBottom:'0px'}

    const modelNameStyle = {marginTop:'16px', marginRight:'5px'}
    const modelTypeStyle = {fontWeight:'200'}

    //imgs
    const imgStyle = {height:'200px', width: '266px'}

    //links
    const linksStyle = {display:'flex', flexDirection: 'row', justifyContent: 'center'}
    const linkStyle = {display:'flex', flexDirection: 'row'}
    const arrowIconStyle = {height:'15px', margin:'23px 12px 0px 5px'}

  return (
    <li 
        key={key}
        style={liStyle as React.CSSProperties}>
        <p style={bodyTypeStyle as React.CSSProperties}>{car.bodyType}</p>
        <div style={nameStyle as React.CSSProperties}>
            <b style={modelNameStyle as React.CSSProperties}>{car.modelName}</b>
            <p style={modelTypeStyle as React.CSSProperties}>{car.modelType}</p>
        </div>
        <img 
            style={imgStyle as React.CSSProperties}
            src={car.imageUrl} 
            alt="Image missing" 
        />
        <div style={linksStyle as React.CSSProperties}>
            <Link 
                style={linkStyle as React.CSSProperties}
                to={`/learn/${car.id}`}>
                <h4>LEARN</h4>
                <img 
                    style={arrowIconStyle as React.CSSProperties}
                    src="/images/chevron-small.svg" 
                    alt="Arrow icon" 
                />
            </Link>
            <Link 
                style={linkStyle as React.CSSProperties}
                to={`/shop/${car.id}`}>
                <h4>SHOP</h4>
                <img 
                    style={arrowIconStyle as React.CSSProperties}
                    src="/images/chevron-small.svg" 
                    alt="Arrow icon" 
                />
            </Link>
        </div>
  </li>);
};