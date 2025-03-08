import Papa, { type ParseResult } from "papaparse";

export const parseCSV = <T>(csvText: string): T[] => {
  const result: ParseResult<T> = Papa.parse<T>(csvText, {
    header: true, // Treat first row as headers
    skipEmptyLines: true,
    dynamicTyping: true, // Auto-convert numbers/booleans
  });

  return result.data;
};
