import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[myNgIf]'
})
export class MyNgIfDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set myNgIf(condition: boolean) {
        if (condition) {
            // 호스트 뷰에 ng-template 요소를 추가
            this.viewContainer.createEmbeddedView(this.templateRef); // ①
        } else {
            // 호스트 뷰에서 ng-template 요소를 제거
            this.viewContainer.clear(); // ②
        }
    }
}