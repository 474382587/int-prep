import fs from 'fs';

export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}
  data: T[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
