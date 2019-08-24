import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Storage
 * @description
 * Cordova plugin for Firebase Storage
 */
export declare class FirebaseStorage extends IonicNativePlugin {
    uploadPicture(fileUri: string, filePath: string): Promise<any>;
    uploadVideo(fileUri: string, filePath: string): Promise<any>;
}