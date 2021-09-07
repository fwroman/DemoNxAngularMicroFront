import { Directive, Input, OnChanges, Output, ViewContainerRef, EventEmitter, ComponentRef } from "@angular/core";
import { RemoteInstance } from "../interfaces/remote-instance";
import { DynamicAppLoaderService } from "../services/dynamic-app-loader.service";

@Directive({
    selector: '[dynamicLoader]'
})
export class DynamicLoaderDirective implements OnChanges {
    @Input() public dynamicLoader: RemoteInstance | any;
    @Output() public onGetRemoteComponentRef: EventEmitter<ComponentRef<any>>;

    constructor(
        private _ViewContainerRef: ViewContainerRef,
        private _DynamicAppLoaderService: DynamicAppLoaderService
    ) {
        this.onGetRemoteComponentRef = new EventEmitter<ComponentRef<any>>();
    }

    async ngOnChanges() {
        if (this.dynamicLoader) {
            const remoteComponentRef: any = await this._DynamicAppLoaderService.loadComponentWithModule(this.dynamicLoader, this._ViewContainerRef);
            this.onGetRemoteComponentRef.emit(remoteComponentRef);
        }
    }
}