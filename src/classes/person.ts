export class Person {

	private _firstName = '';
	private _lastName = '';

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	private getFullName = () => {
		return `${ this._firstName } ${ this._lastName }`;
	}

	public getNametagText = () => {
		return `Hello, my name is ${this.getFullName()}`;
	};
}