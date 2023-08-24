/* Задание 1: Создание бургер-меню
Создайте бургер-меню для мобильной версии веб-страницы. При клике на значок "бургер" меню должно разворачиваться или сворачиваться. Используйте свойство classList для добавления и удаления классов, а также стилизуйте его с помощью CSS.*/

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


/* Задание 2: Интерактивное меню

Создайте простое интерактивное меню, используя HTML, CSS и JavaScript. У вас будет список элементов меню, и при клике на каждый элемент меню он будет менять свой стиль. Используйте свойство classList для добавления и удаления классов, а также свойство style для изменения стилей элементов.*/
const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach(item => {
	item.addEventListener('click', () => {
		menuItems.forEach(menuItem => {
			menuItem.classList.remove('active')
		})
		item.classList.add('active')
	})
});


/* Задание 3:Spread оператор
Создайте массив numbers с несколькими числами.
Создайте новый массив numbersCopy, используя spread оператор, чтобы скопировать все элементы из массива numbers.
Добавьте новое число в массив numbers.
Выведите оба массива (numbers и numbersCopy) в консоль, чтобы показать, что изменения в одном массиве не влияют на другой.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersCopy = [...numbers, 11, 12, 13]
console.log(numbers);
console.log(numbersCopy);


/* Задание 4:Rest параметр
Напишите функцию sum с использованием rest параметра, которая принимает любое количество аргументов (чисел) и возвращает их сумму.
Вызовите функцию sum несколько раз с разным количеством аргументов.
Выведите результаты вызовов функции sum в консоль.
Это задание позволит ученикам понять, как использовать операторы spread и rest для работы с массивами и аргументами функций. Они смогут увидеть, как spread позволяет копировать данные, а rest параметр собирать их в массивы.*/
function sum (...rest) {
	console.log(rest);
    return rest.reduce((sum, number) => sum + number, 0)
}
console.log(sum(1, 2, 3, 4));
