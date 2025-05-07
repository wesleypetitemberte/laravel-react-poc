import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init(); // barra de progresso

createInertiaApp({
    resolve: name => {
        return import(`./Pages/${name}.jsx`).catch(() => {
            console.error(`Page component "./Pages/${name}.jsx" not found.`);
        });
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
