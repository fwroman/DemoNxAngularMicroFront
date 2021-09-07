import { Directive, Input, OnChanges, Output, ViewContainerRef, EventEmitter, ComponentRef } from "@angular/core";
import { RemoteInstance } from "../interfaces/remote-instance";
import { DynamicAppLoaderService } from "../services/dynamic-app-loader.service";

@Directive({
    selector: '[dynamicComponent]'
})
export class DynamicComponentDirective implements OnChanges {
    @Input() public dynamicComponent: RemoteInstance | any;
    @Output() public onGetRemoteComponentRef: EventEmitter<ComponentRef<any>>;

    constructor(
        private _ViewContainerRef: ViewContainerRef,
        private _DynamicAppLoaderService: DynamicAppLoaderService
    ) {
        this.onGetRemoteComponentRef = new EventEmitter<ComponentRef<any>>();
    }

    async ngOnChanges() {
        if (this.dynamicComponent) {
            const remoteComponentRef: any = await this._DynamicAppLoaderService.loadComponent(this.dynamicComponent, this._ViewContainerRef);
            this.onGetRemoteComponentRef.emit(remoteComponentRef);
        }
    }
}