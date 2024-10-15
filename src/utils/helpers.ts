export const capitalize = (text: string) => {
  const firstWord = text[0].toUpperCase();
  const otherLetters = text.slice(1);
  const combinedLetters = firstWord + otherLetters;
  return combinedLetters;
};
