import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from '@mui/material';

export default function SearchBar({ fields, setFields, onSearch }) {
    const suggestions = ["from:", "\"\"", "since:", "until:", "findtitle:", "lang:", "findcontent:", "OR", "AND"];

    const addField = (newValue) => {
        if (!fields.some(field => field.value === newValue) && suggestions.includes(newValue)) {
            setFields(prevFields => [...prevFields, { id: prevFields.length + 1, value: '' }]);
        }
    };

    const handleChange = (id, event, newValue) => {
        setFields(prevFields => prevFields.map(field =>
            field.id === id ? { ...field, value: newValue } : field
        ));
    };

    const handleClear = (id) => {
        setFields(prevFields => prevFields.length > 1 ? prevFields.filter(field => field.id !== id) : prevFields);
    };

    const search = () => {
        let query = fields.map(field => field.value.trim()).join(' ') + "limit:5 offset:0";

        fetch(`http://localhost:8080/api/v1/search/article/custom?query=${query}`)
            .then(response => response.json())
            .then(data => {
                debugger;
                console.log(data);
                onSearch(data);
            });
    };

    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            {fields.map((field, index) => (
                <Autocomplete
                    key={field.id}
                    freeSolo
                    options={suggestions}
                    value={field.value}
                    onInputChange={(event, newValue) => {
                        handleChange(field.id, event, newValue);
                        if (newValue && suggestions.includes(newValue) && index === fields.length - 1) {
                            addField(newValue);
                        }
                    }}
                    onChange={(event, newValue) => {
                        if (!newValue && fields.length > 1 && field.id === fields.length) {
                            handleClear(field.id);
                        }
                    }}
                    sx={{ flex: `1 1 ${100 / fields.length}%`, mx: 0.5 }}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Search" variant="standard" sx={{ ml: 1, flex: 1, mb: 1 }} />
                    )}
                />
            ))}
            <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
