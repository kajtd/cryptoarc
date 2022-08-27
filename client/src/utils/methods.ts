export const formatAddress = (string = ''): string =>
  `${string.slice(0, 5)}...${string.slice(string.length - 5)}`;
