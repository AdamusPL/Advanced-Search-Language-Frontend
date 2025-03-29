import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "../css/Home.css";

export default function Home() {
    return (
        <>
            <Container id="container">
                <h1 className='rubik-80s-fade-regular'>Hi,</h1>
                <p className='rubik-wet-paint-regular'>Here you can search something intriuging in our database by not using regular SQL but X/Twitter manner</p>
                <ArrowDownwardIcon id='icon'></ArrowDownwardIcon>
                <div id='search'>
                    <SearchBar />
                </div>
            </Container>
        </>
    );
}