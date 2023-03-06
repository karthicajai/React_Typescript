import { useState, useEffect } from "react"
import { HorizontalScroll } from "../components/HorizontalScroll";
import { ListItem } from "../components/ListItem";
import car from "../model/carsModel";


export const Home: React.FC = () => {

    //command to run json server locally : npx json-server -p 3500 -w data/db.json
    const API_URL = 'http://localhost:3500/cars';
    const CARS_VIEW_SIZE = 4;

    const [cars, setCars] = useState<car[]>([]);
    const [carFilter, setcarFilter] = useState('');
    const [startPos, setStartPos] = useState(0);
    const [endPos, setEndPos] = useState(CARS_VIEW_SIZE);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Did not receive expected data');
            const listItems = await response.json();

            setCars(listItems);
            setFetchError(null);
          } catch (err: any) {//check any
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 2000);
    
      }, [])

    const handleScrollAction = (direction: string) => {

        if(direction === "right"){
            if(cars.length === endPos) return;

            setStartPos(startPos+1);
            setEndPos(endPos + 1)
        } else {
            if(startPos === 0) return;

            setStartPos(startPos - 1);
            setEndPos(endPos - 1)
        }
    }

    return (
        <main>
        {cars.length? (
            <div>
                <ListItem cars={cars.filter(car => carFilter? (car.bodyType === "estate") : car ).slice(startPos,endPos)}/>
                <HorizontalScroll
                    length={cars.length}
                    currentLeftPosition={startPos}
                    currentRightPosition={endPos}
                    handleScrollAction={handleScrollAction}
                />
            </div>
        ) : (
          <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )}
      </main>);
};