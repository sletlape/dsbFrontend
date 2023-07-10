
const baseURL = import.meta.env.VITE_DSB_API_URL

const sentencesEndpoint = `${baseURL}/sentence`;
const wordTypesEndpoint = `${baseURL}/wordType`;
const wordsEndpoint = `${baseURL}/word`;

export const getSentenceList = async (): Promise<string[]> => {
  try {
    const response = await fetch(sentencesEndpoint);
    if (response.ok) {
      const data = await response.json();
      return data.map((sentence: { content: string }) => sentence.content);
    } else {
      throw new Error('Error fetching sentences');
    }
  } catch (error) {
    throw new Error('Error fetching sentences');
  }
};

export const getWordTypes = async (): Promise<{ id: string; name: string }[]> => {
  try {
    const response = await fetch(wordTypesEndpoint);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching word types');
    }
  } catch (error) {
    throw new Error('Error fetching word types');
  }
};

export async function getWordsByType(wordTypeId: string): Promise<Word[]> {
  try {
    const response = await fetch(`${baseURL}/word?wordTypeId=${wordTypeId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch words.');
    }
  } catch (error) {
    throw new Error('Error fetching words. Please try refreshing your page.');
  }
}

export const submitSentence = async (sentence: string): Promise<void> => {
  try {
    const response = await fetch(sentencesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: sentence }),
    });
    if (!response.ok) {
      throw new Error(`Failed to submit sentence: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error('Failed to submit sentence');
  }
};
