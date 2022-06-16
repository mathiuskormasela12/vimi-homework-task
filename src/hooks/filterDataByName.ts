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
        /*
					I used any data type because, this object
					will be assigned after the object was created.
					If I use another data type, it will make an error
					because in Typescript we can't assign object property
					after the object was created.
				*/
        const condition: any = {};
        const keywords = keyword.split(' ');

        for (let key of keywords) {
          key = key.toLowerCase();
          // eslint-disable-next-line no-loop-func
          db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          })).forEach((item) => {
            if (String(item.archived) === key.replace('is:', '')) {
              // this code will error if the condition object was created without any data type
              condition.archived = key.replace('is:', '');
            } else if (item.name === key.replace('is:', '')) {
              // this code will error if the condition object was created without any data type
              condition.name = key.replace('is:', '');
            } else if (item.status === key.replace('is:', '')) {
              // this code will error if the condition object was created without any data type
              condition.status = key.replace('is:', '');
            } else if (item.type === key.replace('is:', '')) {
              // this code will error if the condition object was created without any data type
              condition.type = key.replace('is:', '');
            }
          });
        }

        if (condition !== {} && Object.keys(condition).length > 0) {
          let conditionString: string = '';

          Object.keys(condition).forEach((item, index) => {
            conditionString += `${index !== 0 ? ' && ' : ''} prop.${item} === '${String(Object.values(condition)[index]).toLowerCase()}'`;
          });

          results = db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          }))
          // eslint-disable-next-line no-unused-vars
            .filter((prop) => eval(conditionString));
        } else {
          results = db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          }));
        }
      } else if (keyword.startsWith('not:')) {
        const secondCondition: any = {};
        const secondKeywords = keyword.split(' ');

        for (const key of secondKeywords) {
          // eslint-disable-next-line no-loop-func
          db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          })).forEach((item) => {
            if (String(item.archived) === key.replace('not:', '')) {
              // this code will error if the condition object was created without any data type
              secondCondition.archived = key.replace('not:', '');
            } else if (item.name === key.replace('not:', '')) {
              // this code will error if the condition object was created without any data type
              secondCondition.name = key.replace('not:', '');
            } else if (item.status === key.replace('not:', '')) {
              // this code will error if the condition object was created without any data type
              secondCondition.status = key.replace('not:', '');
            } else if (item.type === key.replace('not:', '')) {
              // this code will error if the condition object was created without any data type
              secondCondition.type = key.replace('not:', '');
            }
          });
        }

        if (secondCondition !== {} && Object.keys(secondCondition).length > 0) {
          let conditionStringSecond: string = '';

          Object.keys(secondCondition).forEach((item, index) => {
            conditionStringSecond += `${index !== 0 ? ' && ' : ''} prop.${item} !== '${String(Object.values(secondCondition)[index]).toLowerCase()}'`;
          });

          // eslint-disable-next-line no-unused-vars
          results = db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          }))
          // eslint-disable-next-line no-unused-vars
            .filter((prop) => eval(conditionStringSecond));
        } else {
          results = db.map((item) => ({
            ...item,
            archived: String(item.archived).toLowerCase(),
            name: String(item.name).toLowerCase(),
            status: String(item.status).toLowerCase(),
            type: String(item.type).toLowerCase(),
          }));
        }
      } else {
        results = data.map((item) => ({
          ...item,
          archived: String(item.archived).toLowerCase(),
          name: String(item.name).toLowerCase(),
          status: String(item.status).toLowerCase(),
          type: String(item.type).toLowerCase(),
        })).filter((item: IData) => item.name.startsWith(keyword) || item.name.endsWith(keyword));
      }
    } else {
      results = db.map((item) => ({
        ...item,
        archived: String(item.archived).toLowerCase(),
        name: String(item.name).toLowerCase(),
        status: String(item.status).toLowerCase(),
        type: String(item.type).toLowerCase(),
      }));
    }
    const modifiedResults = results.map((item) => ({
      ...item,
      archived: String(item.archived).toLowerCase(),
      name: String(item.name).toLowerCase(),
      status: String(item.status).toLowerCase(),
      type: String(item.type).toLowerCase(),
    }));
    resolve(modifiedResults);
  } catch (err) {
    reject(err);
  }
});
