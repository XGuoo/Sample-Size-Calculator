import { ReplaySubject, Subject } from 'rxjs';
/**
 * Defines global variables on the `window` object.
 */
declare global {
    interface Window {
        /**
         * Subject to notify the readiness of the MathJax namespace.
         */
        mathJaxHub$: Subject<any>;
    }
}
/**
 * A internal utility service.
 */
export declare class MathJaxService {
    /**
     * Signals when the MathJax object is ready.
     */
    readonly MathJaxHub$: ReplaySubject<any>;
    /**
     * Must call `init` method explicitly during module initialization.
     */
    init(): void;
}
