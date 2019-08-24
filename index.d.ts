import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Storage
 * @description
 * Cordova plugin for Firebase Storage
 */
export declare class FirebaseStorageOriginal extends IonicNativePlugin {
    uploadPicture(fileUri: string, filePath: string): Promise<any>;
    uploadVideo(fileUri: string, filePath: string): Promise<any>;
}

export declare const FirebaseStorage: FirebaseStorageOriginal;