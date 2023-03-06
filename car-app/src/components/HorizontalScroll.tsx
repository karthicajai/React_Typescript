import { useEffect, useState } from "react";

interface Props {
    length: number;
    currentLeftPosition: number;
    currentRightPosition: number;
    handleScrollAction: (direction : string) => void;
  }


export const HorizontalScroll: React.FC<Props> = ({length, currentLeftPosition, currentRightPosition, handleScrollAction}) => {

    const [enableLeftArrow, setEnableLeftArrow] = useState(false);
    const [enableRightArrow, setEnableRightArrow] = useState(true);

    useEffect(() => {
        setEnableRightArrow( (length === currentRightPosition) ? false : true);
        setEnableLeftArrow( (currentLeftPosition === 0) ? false : true);
      }, [currentRightPosition])
    
    const imgsStyle = {display:'flex', flexDirection: 'row', justifyContent:"end", marginRight:"15px"}
    const arrowLeftStyle = {opacity: enableLeftArrow ? "1" : "0.5", height:'25px', transform:'rotate(180deg)',  marginRight:"5px"}
    const arrowRightStyle = {opacity: enableRightArrow ? "1" : "0.5", height:'25px'}

    return (
        <div style={imgsStyle as React.CSSProperties}>
            <img 
                style={arrowLeftStyle as React.CSSProperties}
                src="/images/chevron-circled.svg" 
                alt="Arrow icon" 
                onClick={() => handleScrollAction("left")}
                />
            <img
                style={arrowRightStyle as React.CSSProperties}
                src="/images/chevron-circled.svg" 
                alt="Arrow icon" 
                onClick={() => handleScrollAction("right")}
                />
        </div>
    );
};