import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Storage
 * @description
 * Cordova plugin for Firebase Storage
 */
export declare class FirebaseStorageOriginal extends IonicNativePlugin {
    uploadPicture(picUrl: string, picName: string): Promise<any>;
}

export declare const FirebaseStorage: FirebaseStorageOriginal;