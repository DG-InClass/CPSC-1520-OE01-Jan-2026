// The import statement tells the JavaScript Runtime Engine (JRE)
// to include the code from the file.
import './minimal-theme-switcher'; // This module has no exports, but importing runs its code to initialize the theme switcher
// Typically when we import from a JavaScript module, there are
// some functions, objects or other items that the module has
// exported.
import { aboutUser } from './about-user';

const contentContainer = document.getElementById('content');
const progress = document.querySelector('#content progress');
const output = document.querySelector('#content p');
aboutUser(progress, output);
