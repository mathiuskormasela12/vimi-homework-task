// =========== Filter The Archived Data
// import all modules
import { IData } from '../interfaces';
import { SortingTypes } from '../types';
import { sortingData } from './sortingData';

export const filterTheArchivedData = (data: IData[], sortingBy: SortingTypes): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    let results: IData[] = [];
    results = data.filter((item: IData) => !item.archived);

    sortingData(results, sortingBy)
      .then((sortedData) => {
        resolve(sortedData);
      })
      .catch(() => {
        resolve([]);
      });
  } catch (err) {
    reject(err);
  }
});
