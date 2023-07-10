import React, { useState } from 'react';
import { Box, Button, Chip, Stack } from '@mui/material';
import { SentenceBuilderProps } from '../types';


const SentenceBuilder: React.FC<SentenceBuilderProps> = ({
    onWordRemove,
    onClearSentence,
    onSubmitSentence,
    selectedWords,
}) => {
    const [sentence, setSentence] = useState<string>('');


    const handleChipClick = (index: number) => {
        const words = sentence.split(' ');
        words.splice(index, 1);
        setSentence(words.join(' '));
        onWordRemove(index);
    };

    const handleClearSentence = () => {
        setSentence('');
        onClearSentence();
    };

    const handleSentenceSubmit = () => {
        onSubmitSentence(sentence.trim());
        setSentence('');
        onClearSentence();
    };

    return (
        <Box sx={{ p: 2, border: '1px dashed grey', height: '100%', mx: 'auto' }}>
            {selectedWords.map((word, index) => (
                <Chip
                    key={index}
                    label={word}
                    onClick={() => handleChipClick(index)}
                    onDelete={() => handleChipClick(index)}
                />
            ))}
            <Box m={1} display={"flex"} justifyContent={"center"} alignItems={"center"} >
               { selectedWords.length > 0 && <Stack direction="row" spacing={1}>
                    <Button variant="outlined" color="error" onClick={handleClearSentence}>
                        Clear
                    </Button>
                    <Button variant="contained" onClick={handleSentenceSubmit}>
                        Submit
                    </Button>
                </Stack>}
            </Box>
        </Box>
    );
};

export default SentenceBuilder;
