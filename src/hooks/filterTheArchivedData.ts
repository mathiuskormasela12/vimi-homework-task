// =========== Filter The Archived Data
// import all modules
import { IData } from '../interfaces';

export const filterTheArchivedData = (data: IData[]): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    resolve(data.filter((item: IData) => !item.archived));
  } catch (err) {
    reject(err);
  }
});
