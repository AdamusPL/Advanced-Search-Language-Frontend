import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

export default function Table({ rows, setRows, fields, setFields, paginationModel, setPaginationModel }) {
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'description', headerName: 'Description' },
        {
            field: 'language',
            headerName: 'Language',
            type: 'string',
        },
        {
            field: 'name_surname',
            headerName: 'Author',
        },
    ];
    
    const [rowCount, setRowCount] = useState(0);
    
    function fetchData() {
        debugger;
        let query = fields.map(field => field.value.trim()).join(' ');

        fetch(
            `http://localhost:8080/api/v1/search/article/custom?query=${query}limit:${paginationModel.pageSize}&page=${paginationModel.page+1}`
        ).then(response => {
            return response.json();
        }).then(data => {
            debugger;
            setRows(data);
            setRowCount(data.totalPages * paginationModel.pageSize);
        });
    };
    
    useEffect(() => {
        fetchData();
    }, [paginationModel]);

    return (<>
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                pagination
                rows={rows.posts}
                columns={columns}
                paginationMode="server"
                paginationModel={paginationModel}
                onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
                rowCount={rowCount}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    </>)
}