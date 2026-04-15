export const formatPhoneNumber = (text: string) => {
  const cleaned = text.replace(/\D/g, '');
  

  if (cleaned.length === 0) return '';

  let formatted = '+380';
  

  const match = cleaned.startsWith('') ? cleaned.slice(3) : cleaned;
  
  if (match.length > 0) {
    formatted += ` (${match.slice(0, 2)}`;
  }
  if (match.length > 2) {
    formatted += `) ${match.slice(2, 5)}`;
  }
  if (match.length > 5) {
    formatted += ` ${match.slice(5, 7)}`;
  }
  if (match.length > 7) {
    formatted += ` ${match.slice(7, 9)}`;
  }
  
  return formatted;
};