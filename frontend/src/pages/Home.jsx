import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "../css/Home.css";
import Table from '../components/Table';
import { useState } from 'react';

export default function Home() {
    const [rows, setRows] = useState({}); 
    const [fields, setFields] = useState([{ id: 1, value: '' }]);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });

    const handleSearchResults = (data) => {
        setRows(data);
        setPaginationModel({ page: 0, pageSize: paginationModel.pageSize });
    };

    return (
        <>
            <Container id="container">
                <h1 className='rubik-80s-fade-regular'>Hi,</h1>
                <p className='rubik-wet-paint-regular'>Here you can search something intriuging in our database, not by using regular SQL, but X/Twitter manner</p>
                <ArrowDownwardIcon id='icon'></ArrowDownwardIcon>
                <div id='search'>
                    <SearchBar fields={fields} setFields={setFields} onSearch={handleSearchResults} />
                </div>
                <Table rows={rows} setRows={setRows} fields={fields} setFields={setFields} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
            </Container>
        </>
    );
}