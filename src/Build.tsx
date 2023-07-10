import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import CustomAppBar from './components/CustomAppBar';
import WordTypeSelector from './components/WordTypeSelector';
import WordList from './components/WordList';
import SentenceBuilder from './components/SentenceBuilder';
import { submitSentence } from './utilities/handleAPI';

const Build: React.FC = () => {
    const [selectedWordType, setSelectedWordType] = useState<string>('');
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [words, setWords] = useState<string[]>([]);

    const handleWordTypeChange = (newWordTypeId: string) => {
        setSelectedWordType(newWordTypeId);
    };

    const handleWordAdd = (word: string) => {
        setSelectedWords((prevWords) => [...prevWords, word]);
    };

    const handleWordRemove = (index: number) => {
        setSelectedWords((prevWords) => {
            const newWords = [...prevWords];
            newWords.splice(index, 1);
            return newWords;
        });
    };

    const handleClearSentence = () => {
        setSelectedWords([]);
    };

    const handleSentenceSubmit = async (sentence: string) => {
        try {
            await submitSentence(sentence);
            setSelectedWords([]);
            alert('Sentence submitted successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to submit sentence. Please try again.');
        }
    };

    return (
        <>
            <CustomAppBar />
            <Paper variant="outlined" sx={{ height: '90%' }}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item xs={12} sx={{height: '100%'}}>
                        <WordTypeSelector onWordTypeChange={handleWordTypeChange} />
                    </Grid>
                    <Grid item xs={6}  >
                        <Box p={0.5} className="wordList" sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
                            <WordList 
                            wordTypeId={selectedWordType} onWordAdd={handleWordAdd} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}  sx={{height: '100%'}}>
                        <Box p={0.5} className="wordList" sx={{ height: '100%'}}>
                            <SentenceBuilder
                                onWordAdd={handleWordAdd}
                                onWordRemove={handleWordRemove}
                                onClearSentence={handleClearSentence}
                                onSubmitSentence={handleSentenceSubmit}
                                selectedWords={selectedWords}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Build;
