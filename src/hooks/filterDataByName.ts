/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unreachable-loop */
// =========== Filter Data By Name
// import all modules
import { IData } from '../interfaces';
import db from '../db/db.json';

export const filterDataByName = (data: IData[], keyword: string): Promise<IData[]> => new Promise((resolve, reject) => {
  try {
    let results: IData[] = [];

    if (keyword.length > 0) {
      results = data.filter((item: IData) => item.name.startsWith(keyword) || item.name.endsWith(keyword));
    } else {
      results = db;
    }
    resolve(results);
  } catch (err) {
    reject(err);
  }
});
