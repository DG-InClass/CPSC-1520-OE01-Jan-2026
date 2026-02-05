import './minimal-theme-switcher'; // This module has no exports, but importing runs its code to initialize the theme switcher
import { aboutUser } from './about-user';

const contentContainer = document.getElementById('content');
const progress = document.querySelector('#content progress');
const output = document.querySelector('#content p');
aboutUser(progress, output);
