export const formatPhoneNumber = (originalNumber: string): string => {
  const [countryCode, areaCode, firstPart, secondPart]: string[] = originalNumber.split('-');
  const formattedSecondPart: string = secondPart.slice(0, 2);
  const formattedThirdPart: string = secondPart.slice(2);

  return `${countryCode} (${areaCode}) ${firstPart} ${formattedSecondPart} ${formattedThirdPart}`;
};
