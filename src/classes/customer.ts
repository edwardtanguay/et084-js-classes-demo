import { Person } from "./person";

export class Customer extends Person {

	getCompanyCode = () => {
		return 'vercelGmbh';
	}
	
}