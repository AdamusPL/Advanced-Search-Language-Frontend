import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBar( {onSearch} ) {
    const [input, setInput] = useState('');
    const [info, setInfo] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const search = () => {
        debugger;
        fetch(`http://localhost:8080/api/v1/search/article/custom?query=${input}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                onSearch(data);
            })
    }

    return (<>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                value={input}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        <p>{info}</p>
    </>)
}