var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FirebaseStorageOriginal = /** @class */ (function (_super) {
    __extends(FirebaseStorageOriginal, _super);
    function FirebaseStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseStorageOriginal.prototype.uploadPicture = function (picUrl, picName) { return cordova(this, "uploadPicture", { "sync": true }, arguments); };
    FirebaseStorageOriginal.pluginName = "FirebaseStorage";
    FirebaseStorageOriginal.plugin = "cordova-plugin-firebase-storage";
    FirebaseStorageOriginal.pluginRef = "cordova.plugins.firebase.storage";
    FirebaseStorageOriginal.repo = "https://github.com/azharjaliawala/cordova-plugin-firebase-storage";
    FirebaseStorageOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-storage --variable FIREBASE_STORAGE_VERSION=version";
    FirebaseStorageOriginal.installVariables = ["FIREBASE_STORAGE_VERSION"];
    FirebaseStorageOriginal.platforms = ["Android"];
    return FirebaseStorageOriginal;
}(IonicNativePlugin));
var FirebaseStorage = new FirebaseStorageOriginal();
export { FirebaseStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNVLDBDQUFpQjs7OztJQU8zRCwyQ0FBVSxhQUFDLFlBQXFCO0lBVWhDLCtEQUE4QixhQUM1QixLQUFhLEVBQ2IsUUFBZ0I7SUFTbEIsc0RBQXFCO0lBVXJCLHVEQUFzQixhQUFDLEtBQWE7SUFVcEMsMkRBQTBCLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBZ0IxRCxrREFBaUIsYUFBQyxXQUFtQixFQUFFLE9BQWU7SUFVdEQseURBQXdCLGFBQ3RCLGNBQXNCLEVBQ3RCLE9BQWU7SUFTakIsa0RBQWlCO0lBVWpCLGlEQUFnQixhQUFDLE9BQWUsRUFBRSxXQUFtQjtJQVNyRCxtREFBa0IsYUFBQyxXQUFtQjtJQVV0QyxrREFBaUIsYUFBQyxLQUFhLEVBQUUsTUFBYztJQVcvQyxtREFBa0I7SUFTbEIsZ0RBQWUsYUFBQyxZQUFvQjtJQVFwQywrQ0FBYztJQVFkLHdDQUFPOzs7Ozs7OztpQ0F6TFQ7RUFtQzRDLGlCQUFpQjtTQUFoRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQXV0aGVudGljYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VBdXRoZW50aWNhdGlvbjogRmlyZWJhc2VBdXRoZW50aWNhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZmlyZWJhc2VBdXRoZW50aWNhdGlvbi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ3Rlc3RAZ21haWwuY29tJywgJzEyMycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VBdXRoZW50aWNhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmF1dGgnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtYXV0aGVudGljYXRpb24nLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIC0tdmFyaWFibGUgRklSRUJBU0VfQVVUSF9WRVJTSU9OPXZlcnNpb24nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0ZJUkVCQVNFX0FVVEhfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUF1dGhlbnRpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyBhIEpXVCB0b2tlbiB1c2VkIHRvIGlkZW50aWZ5IHRoZSB1c2VyIHRvIGEgRmlyZWJhc2Ugc2VydmljZS5cbiAgICogQHBhcmFtIGZvcmNlUmVmcmVzaCB7Ym9vbGVhbn0gRm9yY2UgUmVmcmVzaFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgdGhlIGlkIHRva2VuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWRUb2tlbihmb3JjZVJlZnJlc2g6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBjcmVhdGUgYSBuZXcgdXNlciBhY2NvdW50IHdpdGggdGhlIGdpdmVuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcbiAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZXMgZW1haWwgdmVyaWZpY2F0aW9uIGZvciB0aGUgY3VycmVudCB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgRmlyZWJhc2UgQXV0aGVudGljYXRpb24gYmFja2VuZCB0byBzZW5kIGEgcGFzc3dvcmQtcmVzZXQgZW1haWwgdG8gdGhlIGdpdmVuIGVtYWlsIGFkZHJlc3MsXG4gICAqIHdoaWNoIG11c3QgY29ycmVzcG9uZCB0byBhbiBleGlzdGluZyB1c2VyIG9mIHlvdXIgYXBwLlxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBzaWducyBpbiB1c2luZyBhbiBlbWFpbCBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSBlbWFpbCBFbWFpbFxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uIHByb2Nlc3MgZm9yIHRoZSBnaXZlbiBwaG9uZSBudW1iZXIuXG4gICAqIE5PVEU6IEFuZHJvaWQgc3VwcG9ydHMgYXV0by12ZXJpZnkgYW5kIGluc3RhbnQgZGV2aWNlIHZlcmlmaWNhdGlvbi5cbiAgICogVGhlcmVmb3JlIGluIHRoYXQgY2FzZXMgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIGFzayBmb3Igc21zIGNvZGUuXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVnaXN0ZXIgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrIHRvIGJlIG5vdGlmaWVkIG9uIGF1dG8gc2lnbi1pbi5cbiAgICogdGltZW91dCBbbWlsbGlzZWNvbmRzXSBpcyB0aGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB5b3UgYXJlIHdpbGxpbmcgdG8gd2FpdCBmb3IgU01TIGF1dG8tcmV0cmlldmFsXG4gICAqIHRvIGJlIGNvbXBsZXRlZCBieSB0aGUgbGlicmFyeS4gTWF4aW11bSBhbGxvd2VkIHZhbHVlIGlzIDIgbWludXRlcy4gVXNlIDAgdG8gZGlzYWJsZSBTTVMtYXV0by1yZXRyaWV2YWwuXG4gICAqIElmIHlvdSBzcGVjaWZ5IGEgcG9zaXRpdmUgdmFsdWUgbGVzcyB0aGFuIDMwIHNlY29uZHMsIGxpYnJhcnkgd2lsbCBkZWZhdWx0IHRvIDMwIHNlY29uZHMuXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciBQaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGltZW91dFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHZlcmlmeVBob25lTnVtYmVyKHBob25lTnVtYmVyOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IHNpZ25zIGluIHVzaW5nIHZlcmlmaWNhdGlvbklkIGFuZCA2LWRpZ2l0IFNNUyBjb2RlLlxuICAgKiBAcGFyYW0gdmVyaWZpY2F0aW9uSWQgVmVyaWZpY2F0aW9uIElEXG4gICAqIEBwYXJhbSBzbXNDb2RlIFNNUyBjb2RlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aFZlcmlmaWNhdGlvbklkKFxuICAgIHZlcmlmaWNhdGlvbklkOiBzdHJpbmcsXG4gICAgc21zQ29kZTogbnVtYmVyXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgdXNlIHRlbXBvcmFyeSBhbm9ueW1vdXMgYWNjb3VudCB0byBhdXRoZW50aWNhdGUgd2l0aCBGaXJlYmFzZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5Bbm9ueW1vdXNseSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIEdvb2dsZSdzIGlkVG9rZW4gYW5kIGFjY2Vzc1Rva2VuIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TXG4gICAqIEBwYXJhbSBpZFRva2VuIElEIFRva2VuXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiBBY2Nlc3MgVG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoR29vZ2xlKGlkVG9rZW46IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgRmFjZWJvb2sncyBhY2Nlc3NUb2tlbiB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhGYWNlYm9vayhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBUd2l0dGVyJ3MgdG9rZW4gYW5kIHNlY3JldCB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHRva2VuIFRva2VuXG4gICAqIEBwYXJhbSBzZWNyZXQgU2VjcmV0XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aFR3aXR0ZXIodG9rZW46IHN0cmluZywgc2VjcmV0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBibG9jayBhcyBhbiBhdXRoIHN0YXRlIGRpZCBjaGFuZ2UgbGlzdGVuZXIuIFRvIGJlIGludm9rZWQgd2hlbjpcbiAgICogICAgLSBUaGUgYmxvY2sgaXMgcmVnaXN0ZXJlZCBhcyBhIGxpc3RlbmVyLFxuICAgKiAgICAtIEEgdXNlciB3aXRoIGEgZGlmZmVyZW50IFVJRCBmcm9tIHRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBpbiwgb3JcbiAgICogICAgLSBUaGUgY3VycmVudCB1c2VyIGhhcyBzaWduZWQgb3V0LlxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCdzIHRoZSBjdXJyZW50IHVzZXIgbGFuZ3VhZ2UgY29kZS4gVGhlIHN0cmluZyB1c2VkIHRvIHNldCB0aGlzIHByb3BlcnR5IG11c3QgYmUgYSBsYW5ndWFnZSBjb2RlIHRoYXQgZm9sbG93cyBCQ1AgNDcuXG4gICAqIEBwYXJhbSBsYW5ndWFnZUNvZGUgTGFuZ3VhZ2UgQ29kZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldExhbmd1YWdlQ29kZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbGFuZ3VhZ2VDb2RlIHRvIHRoZSBhcHDigJlzIGN1cnJlbnQgbGFuZ3VhZ2UuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQXBwTGFuZ3VhZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgb3V0IHRoZSBjdXJyZW50IHVzZXIgYW5kIGNsZWFycyBpdCBmcm9tIHRoZSBkaXNrIGNhY2hlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==