/**
 * Main entry point for the guest list application.
 * Coordinates data fetching and presentation.
 */
import { fetchData } from './dataFetcher.js';
import { presentData } from './presenter.js';

// Attach event listener to the load button to fetch and display data on click
document.getElementById('load-button').addEventListener('click', () => {
    fetchData().then(({ data, isCached }) => {
        presentData(data, isCached);
    });
});                 