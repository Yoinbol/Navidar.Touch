//Listener to Cordova "deviceready" event
document.addEventListener("deviceready", onDeviceReady, false);

//Flag to now if the Facebook API has been loaded or not
window.fbApiInit = false;

//Asyn function to load Facebook API
window.FacebookAsyncInit = function () {
    //Init facebook plugin
    /*
    FB.init({
        appId: '1505893419631231',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });
    //Facebook API flag initialized to false
    window.fbApiInit = true;
    */
};

//Function to execute when the Cordova "deviceready" event fires
function onDeviceReady() {
    //Start the Facebook API load
    //FacebookAsyncInit();
    setTimeout(function () {
        console.log('Device ready!!');
    }, 10000);
}