import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { Compiler, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, NgModuleFactory, NgModuleRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteInstance } from '../interfaces/remote-instance';

@Injectable({
  providedIn: 'root'
})
export class DynamicAppLoaderService {

  constructor(
    private _Router: Router,
    private _ComponentFactoryResolver: ComponentFactoryResolver,
    private _Injector: Injector,
    private _Compiler: Compiler
  ) { }

  public async loadComponent(remoteInstance: RemoteInstance, viewContainerRef: ViewContainerRef): Promise<ComponentRef<any> | null> {
    try {
      const remoteOptions: LoadRemoteModuleOptions = {
        remoteEntry: remoteInstance.url ? `${remoteInstance.url}${remoteInstance.filePath}` : undefined,
        remoteName: remoteInstance.instanceName,
        exposedModule: `${remoteInstance.instancePath}${remoteInstance.componentName}`
      };

      const remoteComponent = await loadRemoteModule(remoteOptions).then(component => component[remoteInstance.componentName]);
      const componentfactory: ComponentFactory<any> = this._ComponentFactoryResolver.resolveComponentFactory(remoteComponent);
      const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentfactory);

      if (remoteInstance.inputAttributes) {
        for (let input of remoteInstance.inputAttributes) {
          componentRef.instance[input.propertyName] = input.propertyValue;
        }
      }
      if (remoteInstance.outputEvents) {
        for (let output of remoteInstance.outputEvents) {
          componentRef.instance[output.propertyName].subscribe(output.propertyValue);
        }
      }
      return componentRef;
    } catch (err) {
      return null;
    }
  }

  public async loadComponentWithModule(remoteInstance: RemoteInstance, viewContainerRef: ViewContainerRef): Promise<ComponentRef<any> | null> {
    try {
      let remoteOptions: LoadRemoteModuleOptions = {
        remoteEntry: remoteInstance.url ? `${remoteInstance.url}${remoteInstance.filePath}` : undefined,
        remoteName: remoteInstance.instanceName,
        exposedModule: `${remoteInstance.instancePath}${remoteInstance.moduleName}`
      };

      const remoteModule = await loadRemoteModule(remoteOptions).then(module => module[remoteInstance.moduleName]);
      const moduleFactory: NgModuleFactory<any> = this._Compiler.compileModuleSync(remoteModule);
      const moduleRef: NgModuleRef<any> = moduleFactory.create(this._Injector);

      remoteOptions = {
        remoteEntry: remoteInstance.url ? `${remoteInstance.url}${remoteInstance.filePath}` : undefined,
        remoteName: remoteInstance.instanceName,
        exposedModule: `${remoteInstance.instancePath}${remoteInstance.componentName}`
      };

      const remoteComponent = await loadRemoteModule(remoteOptions).then(component => component[remoteInstance.componentName]);
      const componentfactory: ComponentFactory<any> = moduleRef.componentFactoryResolver.resolveComponentFactory(remoteComponent);
      const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentfactory, 0, this._Injector);

      if (remoteInstance.inputAttributes) {
        for (let input of remoteInstance.inputAttributes) {
          componentRef.instance[input.propertyName] = input.propertyValue;
        }
      }
      if (remoteInstance.outputEvents) {
        for (let output of remoteInstance.outputEvents) {
          componentRef.instance[output.propertyName].subscribe(output.propertyValue);
        }
      }
      return componentRef;
    } catch (err) {
      return null;
    }
  }

  public async loadModule(remoteInstance: RemoteInstance) {
    const remoteOptions: LoadRemoteModuleOptions = {
      remoteEntry: remoteInstance.url ? `${remoteInstance.url}${remoteInstance.filePath}` : undefined,
      remoteName: remoteInstance.instanceName,
      exposedModule: `${remoteInstance.instancePath}${remoteInstance.moduleName}`
    };
    const remoteModule = await loadRemoteModule(remoteOptions).then(module => module[remoteInstance.moduleName]);
    const config: any = this._Router.config;
    config.push({ path: '', loadChildren: () => remoteModule });
    this._Router.resetConfig(config);
  }
}
