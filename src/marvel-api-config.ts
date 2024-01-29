import { Md5 } from 'ts-md5';

export const marvelApiConfig = {
    apikey: import.meta.env.VITE_MARVEL_API_KEY as string,
    privateKey: import.meta.env.VITE_MARVEL_API_PRIVATE_KEY as string,
    getTimestamp: () => Math.floor(new Date().getTime() / 1000).toString(),
    getHash: (ts: string, privateKey: string, apikey: string) => {
        const inputString = ts + privateKey + apikey;
        const hash = Md5.hashStr(inputString);
        return hash;
    },
};

export const getMarvelApiParams = () => {
    const ts = marvelApiConfig.getTimestamp();
    const hash = marvelApiConfig.getHash(ts, marvelApiConfig.privateKey, marvelApiConfig.apikey);

    return `ts=${ts}&apikey=${marvelApiConfig.apikey}&hash=${hash}`;
};