export class Person {

	public _firstName = '';
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

	public getNametagHtml = () => {
		return /*html*/ `
		<div class="bg-slate-900 mt-3 w-[25rem] flex justify-center p-4">
			<div>${this.getFullName()}</div>
		</div>	
		`;
	};
}