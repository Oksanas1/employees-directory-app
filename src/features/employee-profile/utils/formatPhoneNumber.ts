export const formatPhoneNumber = (originalNumber: string): string => {
  const parts = originalNumber.split('-');

  if (parts.length < 4) {
    return parts.join(' ') || '';
  }
  const [countryCode, areaCode, firstPart, secondPart]: string[] = parts;
  const formattedSecondPart: string = secondPart.slice(0, 2);
  const formattedThirdPart: string = secondPart.slice(2);

  return `${countryCode} (${areaCode}) ${firstPart} ${formattedSecondPart} ${formattedThirdPart}`;
};
