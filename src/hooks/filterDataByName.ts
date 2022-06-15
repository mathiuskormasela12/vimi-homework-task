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
      if (keyword.startsWith('is:') && !keyword.startsWith('not:')) {
        const condition: any = {};
        const keywords = keyword.split(' ');

        for (const key of keywords) {
          // eslint-disable-next-line no-loop-func
          data.forEach((item) => {
            if (String(item.archived) === key.replace('is:', '')) {
              condition.archived = key.replace('is:', '');
            } else if (item.name === key.replace('is:', '')) {
              condition.name = key.replace('is:', '');
            } else if (item.status === key.replace('is:', '')) {
              condition.status = key.replace('is:', '');
            } else if (item.type === key.replace('is:', '')) {
              condition.type = key.replace('is:', '');
            }
          });
        }

        if (condition !== {} && Object.keys(condition).length > 0) {
          let conditionString: string = '';

          Object.keys(condition).forEach((item, index) => {
            conditionString += `${index !== 0 ? ' && ' : ''} prop.${item} === '${Object.values(condition)[index]}'`;
          });

          // eslint-disable-next-line no-unused-vars
          results = data.filter((prop) => eval(conditionString));
        } else {
          results = db;
        }
      } else if (keyword.startsWith('not:')) {
        const secondCondition: any = {};
        const secondKeywords = keyword.split(' ');

        for (const key of secondKeywords) {
          // eslint-disable-next-line no-loop-func
          data.forEach((item) => {
            if (String(item.archived) === key.replace('not:', '')) {
              secondCondition.archived = key.replace('not:', '');
            } else if (item.name === key.replace('not:', '')) {
              secondCondition.name = key.replace('not:', '');
            } else if (item.status === key.replace('not:', '')) {
              secondCondition.status = key.replace('not:', '');
            } else if (item.type === key.replace('not:', '')) {
              secondCondition.type = key.replace('not:', '');
            }
          });
        }

        if (secondCondition !== {} && Object.keys(secondCondition).length > 0) {
          let conditionStringSecond: string = '';

          Object.keys(secondCondition).forEach((item, index) => {
            conditionStringSecond += `${index !== 0 ? ' && ' : ''} prop.${item} !== '${Object.values(secondCondition)[index]}'`;
          });

          // eslint-disable-next-line no-unused-vars
          results = data.filter((prop) => eval(conditionStringSecond));
        } else {
          results = db;
        }
      } else {
        results = data.filter((item: IData) => item.name.startsWith(keyword) || item.name.endsWith(keyword));
      }
    } else {
      results = db;
    }
    resolve(results);
  } catch (err) {
    reject(err);
  }
});
