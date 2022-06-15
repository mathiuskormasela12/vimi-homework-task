// =========== Filter The Archived Data
// import all modules
import { IData } from '../interfaces';
import { SortingTypes } from '../types';
import { sortingData } from './sortingData';
import { filterDataByName } from './filterDataByName';

export const filterTheArchivedData = (data: IData[], sortingBy: SortingTypes, keyword: string): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    let results: IData[] = [];
    results = data.filter((item: IData) => !item.archived);

    sortingData(results, sortingBy)
      .then((sortedData) => {
        filterDataByName(sortedData, keyword)
          .then((filteredData) => {
            resolve(filteredData);
          })
          .catch(() => {
            resolve([]);
          });
      })
      .catch(() => {
        resolve([]);
      });
  } catch (err) {
    reject(err);
  }
});
