export interface RemoteAttribute {
    propertyName: string;
    propertyValue: string | CallableFunction | any;
}

export interface RemoteInstance {
    url?: string;
    filePath: string;
    instanceName: string;
    instancePath: string;
    moduleName?: string | any;
    componentName?: string | any;
    inputAttributes?: RemoteAttribute[];
    outputEvents?: RemoteAttribute[];
}