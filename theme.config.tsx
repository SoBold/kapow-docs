import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './components/Logo/Logo';

const config: DocsThemeConfig = {
    logo: Logo,
    project: {
        link: 'https://github.com/SoBold/kapow-docs',
    },
    docsRepositoryBase: 'https://github.com/SoBold/kapow-docs',
    footer: {
        text: 'Kapow Docs',
    },
};

export default config;
