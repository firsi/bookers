import { useState } from 'react';
import { theme } from '../theme/theme';

const SearchBar = ({handleSearch}) => {
    const [value, setValue] = useState("");
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <div>
            <input 
                type="search" 
                onChange={handleChange}
                value={value} 
                placeholder="What book do you want to read ?"
                aria-label="Search"
                onKeyDown={(event) => event.keyCode==13 && handleSearch(event)}
                />
            <style jsx>{`
                input{
                    background-color: ${theme.color.primary_light};
                    border: none;
                    border-radius: 20px;
                    padding: 1em;
                    color: ${theme.color.secondary_light};
                    max-width: 100%;
                }
                input::placeholder{
                    color: #aca9a9;
                }
            `}
            </style>
        </div>
    )
}

export default SearchBar;