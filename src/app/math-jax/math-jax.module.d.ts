/**
 * @author davidshen84
 */
import { ModuleWithProviders } from '@angular/core';
import { MathJaxService } from './math-jax.service';
/**
 * Module configuration class.
 *
 * @example
 *
 * {
 *   version: '2.7.5',
 *   config: 'TeX-AMS_HTML',
 *   hostname: 'cdnjs.cloudflare.com'
 * }
 */
export declare class ModuleConfiguration {
    /**
     * The version of the MathJax library.
     */
    version: string;
    /**
     * The config name of the MathJax library.
     * Please check the MathJax [documentation](https://docs.mathjax.org/en/latest/config-files.html) for all the configuration names.
     */
    config: string;
    /**
     * MathJax CDN hostname. Please check [here](https://docs.mathjax.org/en/latest/start.html#mathjax-cdn) for available CDN servers.
     */
    hostname: string;
}
/**
 * Module to load and configure the MathJax library.
 *
 * @example
 *
 * MathJaxModule.config(
 * {
 *     version: '2.7.5',
 *     config: 'TeX-AMS_HTML',
 *     hostname: 'cdnjs.cloudflare.com'
 * })
 */
export declare class MathJaxModule {
    constructor(service: MathJaxService, moduleConfig?: ModuleConfiguration);
    /**
     * Configure the provider for hte module.
     *
     * @deprecated Use forRoot or forChild method instead.
     * @param {boolean} forRoot Make sure it is set to `true` for the root module and `false` for any child module.
     * @param {ModuleConfiguration} moduleConfiguration A {ModuleConfiguration} instance.
     *
     * @return {ModuleWithproviders<MathJaxModule>} instance
     */
    static config(forRoot?: boolean, moduleConfiguration?: ModuleConfiguration): ModuleWithProviders<MathJaxModule>;
    /**
     * Configure the module for the root module.
     *
     * @param {ModuleConfiguration} moduleConfiguration configuration
     *
     * @return {ModuleWithproviders<MathJaxModule>}
     */
    static forRoot(moduleConfiguration?: ModuleConfiguration): ModuleWithProviders<MathJaxModule>;
    /**
     * Configure the module for a child module.
     *
     * @return {object}
     */
    static forChild(): ModuleWithProviders<MathJaxModule>;
}
