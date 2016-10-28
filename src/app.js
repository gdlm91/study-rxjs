import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

/** Click Event */
/////////////////
const btn = document.getElementById("btn");
const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(e => console.log("Click Event from btn!"));

/** Key Up Event */
/////////////////
const input = document.getElementById("input");
const output_1 = document.getElementById("output_1");
const inputStream$ = Rx.Observable.fromEvent(input, "keyup");

inputStream$.subscribe(e => output_1.innerHTML = e.target.value);

/** Mouse Move Event */
//////////////////////
const output_2 = document.getElementById("output_2");
const mouseStream$ = Rx.Observable.fromEvent(document, "mousemove");

mouseStream$.subscribe(e => output_2.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`);