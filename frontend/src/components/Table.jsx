import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

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

const paginationModel = { page: 0, pageSize: 5 };

export default function Table( {rows} ) {
    return (<>
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    </>)
}