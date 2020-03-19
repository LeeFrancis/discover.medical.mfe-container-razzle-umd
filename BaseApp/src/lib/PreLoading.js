import axios from 'axios';
import { loadScript, loadStyle } from './LoadScript';

export const load = (url, name) => new Promise((resolve, reject) => {
    axios.get(`${url}/assets.json`)
        .then(({ data }) => {
            loadScript(`${url}${data.js}`, name)
                .then((amdModule) => {
                    resolve(amdModule);
                });

            loadStyle(`${url}${data.css}`);
        });
});