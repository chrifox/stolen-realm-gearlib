const isLocal = import.meta.env.DEV;

export const getFortuneImageUrl = (path: string) =>
  isLocal
    ? `/images${path}` // Local proxy
    : `https://static.wikia.nocookie.net/stolen-realm/images/${path}`;
