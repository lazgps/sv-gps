import { get } from 'svelte/store';
import { formValues } from "$lib/store";

let  tmpArray = [];

tmpArray = get(formValues);

console.log(tmpArray);




