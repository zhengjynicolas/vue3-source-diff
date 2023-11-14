import SourceDiff from './components/SourceDiff.vue';
import type { App } from 'vue';
import type {ComponentOptions} from './types';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SourceDiff: typeof SourceDiff;
    }
}

export default {
    install: (app: App, options = {}) => {
        const { componentName = 'SourceDiff' } = options as ComponentOptions;
        app.component(componentName, SourceDiff);

    },
};

export { SourceDiff }