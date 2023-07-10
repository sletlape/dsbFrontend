import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomAppBar from './components/CustomAppBar';
import SentenceListTable from './components/SentenceListTable';
import { getSentenceList } from './utilities/handleAPI';

const Home: React.FC = () => {
    const [sentences, setSentences] = useState<string[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchSentences = async () => {
            try {
                const data = await getSentenceList();
                setSentences(data);
            } catch (error) {
                setError('Error fetching sentences. Please try refreshing your page.');
            }
        };

        fetchSentences();
    }, []);

    if (error) {
        return (<>
            <CustomAppBar />
            <Typography color="error">{error}</Typography>;
        </>)
    }

    if (sentences.length === 0) {
        return (
            <>
                <CustomAppBar />
                <Box>No sentences uploaded yet. Go to the Build page to build and upload your own.</Box>
            </>
        );
    }

    return (
        <>
            <CustomAppBar />
            <SentenceListTable />
        </>
    );
};

export default Home;
