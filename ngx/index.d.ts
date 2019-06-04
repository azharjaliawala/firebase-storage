import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Storage
 * @description
 * Cordova plugin for Firebase Storage
 */
export declare class FirebaseStorage extends IonicNativePlugin {
    uploadPicture(picUrl: string, picName: string): Promise<any>;
}