import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './components/Logo/Logo';

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: '%s - Kapow Docs',
            };
        }
    },
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
