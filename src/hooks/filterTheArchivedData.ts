// =========== Filter The Archived Data
// import all modules
import { IData } from '../interfaces';
import { SortingTypes } from '../types';
import { sortingData } from './sortingData';
import { filterDataByName } from './filterDataByName';

export const filterTheArchivedData = (data: IData[], sortingBy: SortingTypes, keyword: string): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    sortingData(data, sortingBy)
      .then((sortedData) => {
        filterDataByName(sortedData, keyword)
          .then((filteredData) => {
            const finalData = filteredData.filter((item: IData) => item.archived === 'false');
            resolve(finalData);
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
