// =========== IAppStates
// import all modules
import { IData } from './IData';

export interface IAppStates {
	keyword: string;
	loading: boolean;
	data: IData[];
}
