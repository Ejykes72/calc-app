import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	result: number;
	num1: number;
	num2: number;
	
	constructor() {
		
		this.result = 0;
		this.num1 = 0;
		this.num2 = 0;
		
	}
	
	add(firstNumber: HTMLInputElement, secondNumber: HTMLInputElement): boolean
	{

		this.num1 = parseInt(firstNumber.value);
		this.num2 = parseInt(secondNumber.value);		
		this.result = this.num1 + this.num2;
		
		return false;
	}

	subtract(firstNumber: HTMLInputElement, secondNumber: HTMLInputElement): boolean
	{
		this.num1 = parseInt(firstNumber.value);
		this.num2 = parseInt(secondNumber.value);	
		this.result = this.num1 - this.num2;
		
		return false;
	}

	multiply(firstNumber: HTMLInputElement, secondNumber: HTMLInputElement): boolean
	{
		this.num1 = parseInt(firstNumber.value);
		this.num2 = parseInt(secondNumber.value);	
		this.result = this.num1 * this.num2;

		return false;
	}

	divide(firstNumber: HTMLInputElement, secondNumber: HTMLInputElement): boolean
	{

		this.num1 = parseInt(firstNumber.value);
		this.num2 = parseInt(secondNumber.value);	
		this.result = this.num1 / this.num2;
		
		return false;
	}	
  
}