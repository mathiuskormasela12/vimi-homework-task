// =========== Sorting Data
// import all modules
import { IData } from '../interfaces';
import { SortingTypes } from '../types';

export const sortingData = (data: IData[], sorting: SortingTypes): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    resolve(data.sort((a, b) => {
      if (sorting === 'ASC') {
        return new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime();
      }

      return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
    }));
  } catch (err) {
    reject(err);
  }
});
