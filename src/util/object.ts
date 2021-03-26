export const getKeyValue = <T extends object>(object: T, key: string) => {
  if (key in object) return (object as any)[key];
  return '';
};
