// =========== IAppStates
// import all modules
import { SortingTypes } from '../types';
import { IData } from './IData';

export interface IAppStates {
	keyword: string;
	loading: boolean;
	data: IData[];
	sortingBy: SortingTypes;
}
