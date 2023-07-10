import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { getWordTypes } from '../utilities/handleAPI';
import { WordTypeSelectorProps, WordType } from '../types';
import CustomAppBar from './CustomAppBar';

const WordTypeSelector: React.FC<WordTypeSelectorProps> = ({ onWordTypeChange }) => {
    const [wordTypes, setWordTypes] = useState<WordType[]>([]);
    const [selectedWordType, setSelectedWordType] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setError('')
        const fetchWordTypes = async () => {
            try {
                const data = await getWordTypes();
                setWordTypes(data);
                setSelectedWordType(data[0]?.id || '');
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };

        fetchWordTypes();
    }, []);

    const handleTabClick = (wordTypeId: string) => {
        setSelectedWordType(wordTypeId);
        onWordTypeChange(wordTypeId);
    };

    return (
        <Box>
            {
                (error) ? <Typography>Servers might be down, try again later</Typography> : 
                <Tabs value={selectedWordType} onChange={(_, value) => handleTabClick(value)}>
                {wordTypes.map((wordType) => (
                    <Tab key={wordType.id} label={wordType.name} value={wordType.id} wrapped />
                ))}
            </Tabs>}
        </Box>
    );
};

export default WordTypeSelector;
