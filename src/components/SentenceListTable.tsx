import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getSentenceList } from '../utilities/handleAPI';

const SentenceListTable: React.FC = () => {
    const [sentences, setSentences] = useState<string[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchSentences = async () => {
            try {
                const data = await getSentenceList();
                setSentences(data);
            } catch (error) {
                console.log('Error fetching sentences. Please try refreshing your page.');
            }
        };

        fetchSentences();
    }, []);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><Typography variant={'h4'} >Sentences</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sentences.map((sentence, index) => (
                    <TableRow key={index}>
                        <TableCell>"{sentence}"</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default SentenceListTable;
