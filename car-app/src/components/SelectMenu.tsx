import React from "react";

interface Props {
    options: string[];
    defaultOption : string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

export const SelectMenu: React.FC<Props> = ({options, defaultOption, setSelectedOption}) => {
    return(
        <select name="bodyType" id="bodyType" onChange={e => setSelectedOption(e.target.value)}>
             <option 
                key={defaultOption}
                value={defaultOption}
                >
                {defaultOption}
            </option>
            {options.map((value) => (
                <option 
                    key={value}
                    value={value}
                >
                    {value}
                </option>
            ))}
        </select>
    );
};
