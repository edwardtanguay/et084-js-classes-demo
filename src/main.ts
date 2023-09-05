import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import './style.css';

const person1 = new Customer('Janice', 'Schmidt');
const person2 = new Employee('Robert', 'Wheyton');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div>
	<h1 class="text-3xl">Conference Site</h1>	
	<h2 class="text-2xl mt-4 text-yellow-300">Attendee List</h2>
	<ul>
		<li>${person1.getNametagText()}</li>
		<li>${person2.getNametagText()}</li>
	</ul>
	<h2 class="text-2xl mt-4 text-yellow-300">Nametags</h2>
		${person1.getNametagHtml()}
		${person2.getNametagHtml()}
</div>
`;
