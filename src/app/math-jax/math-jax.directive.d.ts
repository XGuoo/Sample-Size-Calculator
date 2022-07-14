import { AfterViewInit, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MathJaxService } from './math-jax.service';
/**
 * Typeset the content or expressions using MathJax library.
 */
export declare class MathJaxDirective implements AfterViewInit, OnChanges, OnDestroy {
    /**
     * An array of input MathJax expressions.
     */
    MathJaxExpressions: string[];
    private readonly mathJaxHub$;
    /**
     * The associated native element.
     */
    private readonly element;
    /**
     * Observes the change of the input expression.
     */
    private expressionChangeSubject;
    /**
     * Observes the completion of the initial MathJax typesetting.
     */
    private readonly mathJaxTypesetSubject;
    private readonly expressionChangeSubscription;
    /**
     * Observe the readiness of all the Jax instances in the element.
     */
    private readonly allJax$;
    private readonly typesetSubscription;
    private hubSubscription;
    private isDestroying;
    constructor(el: ElementRef, service: MathJaxService);
    ngAfterViewInit(): void;
    /**
     * Explicitly trigger the MathJax typeset process.
     *
     * This is useful if the content is loaded dynamically.
     */
    MathJaxTypeset(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
