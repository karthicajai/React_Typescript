import { SingleItem } from "../components/SingleItem"
import car from "../model/carsModel"

interface Props {
    cars: car[];
}

export const ListItem: React.FC<Props> = ({cars}) => {

    const ulStyle = {width : '100%',display:'flex', flexDirection: 'row', justifyContent: 'space-evenly'}

    return (
        <ul style={ulStyle as React.CSSProperties}>
            {cars.map((car) => (
                <SingleItem 
                    key={car.id}
                    car={car}
        />
        ))}
        </ul>
    );
};