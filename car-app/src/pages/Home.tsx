import { useState, useEffect } from "react"
import { HorizontalScroll } from "../components/HorizontalScroll";
import { ListItem } from "../components/ListItem";
import { SelectMenu } from "../components/SelectMenu";
import car from "../model/carsModel";


export const Home: React.FC = () => {

    //command to run json server locally : npx json-server -p 3500 -w public/api/cars.json
    const API_URL = 'http://localhost:3500/cars';
    const CARS_VIEW_SIZE = 4;
    const DEFAULT_FILTER = "*";

    const [cars, setCars] = useState<car[]>([]);
    const [carFilter, setcarFilter] = useState(DEFAULT_FILTER);
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
                <SelectMenu 
                    options={cars.map(car => car.bodyType.toUpperCase()).filter((value, index, self) => self.indexOf(value) === index)}
                    defaultOption={DEFAULT_FILTER}
                    setSelectedOption={setcarFilter}
                />
                <ListItem 
                    cars={cars.filter(car => carFilter == DEFAULT_FILTER? car : (car.bodyType.toUpperCase() === carFilter) ).slice(startPos,endPos)}
                />
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