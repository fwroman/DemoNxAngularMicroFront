import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteInstance } from './interfaces/remote-instance';

const remoteInstance: RemoteInstance = {
  filePath: '/guestAppEntry.js',
  instanceName: 'guestApp',
  instancePath: './',
  moduleName: 'GuestModule'
};

export function loadGuestRoutes() {
  const remoteOptions: LoadRemoteModuleOptions = {
    remoteName: remoteInstance.instanceName,
    exposedModule: `${remoteInstance.instancePath}${remoteInstance.moduleName}`
  };

  return loadRemoteModule(remoteOptions);
}

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => loadGuestRoutes().then(m => m[remoteInstance.moduleName]) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
