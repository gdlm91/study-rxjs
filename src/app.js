import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

/** Observables from Events */

    /** Click Event */
    const btn_1 = document.getElementById("btn_1");
    const btn_1Stream$ = Rx.Observable.fromEvent(btn_1, "click");
    
    btn_1Stream$.subscribe(e => console.log("Click Event from btn_1!"));

    /** Key Up Event */
    const input_1 = document.getElementById("input_1");
    const output_1 = document.getElementById("output_1");
    const input_1Stream$ = Rx.Observable.fromEvent(input_1, "keyup");

    input_1Stream$.subscribe(e => output_1.innerHTML = e.target.value);

    /** Mouse Move Event */
    const output_2 = document.getElementById("output_2");
    const mouseStream$ = Rx.Observable.fromEvent(document, "mousemove");

    mouseStream$.subscribe(e => output_2.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`);

/////////////////////////////

/** Observables from Arrays */

    /** Array of Numbers */
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output_3 = document.getElementById("output_3");
    const arrayStream$ = Rx.Observable.from(array);

    arrayStream$.subscribe(
        v => output_3.insertAdjacentHTML('beforeend', `<span>${v}</span>`),
        err => console.error(err),
        () => console.info("Array of Numbers Observable Done!")
    );

    /** Array of Objects */
    let arrayOfObjects = [
        {title: "Title", post: "Lorem!"},
        {title: "Title", post: "Lorem!"},
        {title: "Title", post: "Lorem!"}
    ];
    const output_4 = document.getElementById("output_4");
    const arrayOfObjectsStream$ = Rx.Observable.from(arrayOfObjects);

    arrayOfObjectsStream$.subscribe(
        v => output_4.insertAdjacentHTML('beforeend', `<li><b>${v.title}</b><p>${v.post}</p></li>`),
        err => console.error(err),
        () => console.info("Array of Objects Observable Done!")
    );
/////////////////////////////

/** Observables from Scratch */

    /** Observable with Completed */
    const output_5 = document.getElementById("output_5");
    const source_1$ = new Rx.Observable(observer =>  {
        output_5.insertAdjacentHTML('beforeend', `<p>Creating Observable...</p>`);

        setTimeout(() => observer.next("Hello World"), 3000);

        setTimeout(() => observer.next("Another Hello"), 6000);

        setTimeout(() => {
            observer.next("Yet, another value");
            observer.complete();
        }, 9000);

    });
    source_1$.subscribe(
        x => output_5.insertAdjacentHTML('beforeend', `<p>${x}</p>`),
        err => console.error(err),
        complete => output_5.insertAdjacentHTML('beforeend', `<p>Completed</p>`)
    );

    /** Observable with Error */
    const output_6 = document.getElementById("output_6");
    const source_2$ = new Rx.Observable(observer =>  {
        output_6.insertAdjacentHTML('beforeend', `<p>Creating Observable...</p>`);

        setTimeout(() => observer.next("Hello World"), 3000);

        setTimeout(() => {
            observer.next("Another Hello");
            observer.error(new Error('Error in Observer'));
        }, 6000);

        setTimeout(() => {
            observer.next("Yet, another value");
            observer.complete();
        }, 9000);

    });
    source_2$.subscribe(
        x => output_6.insertAdjacentHTML('beforeend', `<p>${x}</p>`),
        err => output_6.insertAdjacentHTML('beforeend', `<p><b>${err}</b></p>`),
        complete => output_6.insertAdjacentHTML('beforeend', `<p>Completed</p>`)
    );

//////////////////////////////