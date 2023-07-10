import React, { useEffect, useState } from 'react';
import { Box, Chip } from '@mui/material';
import { getWordsByType } from '../utilities/handleAPI';
import { WordListProps, Word } from '../types';

const WordList: React.FC<WordListProps> = ({ wordTypeId, onWordAdd }) => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const data = await getWordsByType(wordTypeId);
        console.log(data);
        setWords(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWords();
  }, [wordTypeId]);

  const handleAddWordToSentence = (wordName: string) => {
    onWordAdd(wordName);
  };

  if (words.length === 0) {
    return <Box>No words associated with wordType</Box>;
  }

  return (
    <Box sx={{ p: 2, border: '1px dashed grey', height: '100%' }} >
      {words.map((word) => (
        <Chip
          key={word.id}
          label={word.name}
          size="medium"
          variant="outlined"
          onClick={() => handleAddWordToSentence(word.name)}
        />
      ))}
    </Box>
  );
};

export default WordList;
