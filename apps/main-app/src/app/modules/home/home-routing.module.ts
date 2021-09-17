import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteInstance } from '../../interfaces/remote-instance';
import { HomeComponent } from './components/home/home.component';

const communitiesInstance: RemoteInstance = {
  url: 'http://localhost:4200',
  filePath: '/communitiesEntry.js',
  instanceName: 'communitiesApp',
  instancePath: './',
  moduleName: 'AppModule'
};

export function loadCommunitiesRoutes() {
  const remoteOptions: LoadRemoteModuleOptions = {
    remoteEntry: `${communitiesInstance.url}${communitiesInstance.filePath}`,
    remoteName: communitiesInstance.instanceName,
    exposedModule: `${communitiesInstance.instancePath}${communitiesInstance.moduleName}`
  };

  return loadRemoteModule(remoteOptions);
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'communities', loadChildren: () => loadCommunitiesRoutes().then(m => m[communitiesInstance.moduleName]) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
