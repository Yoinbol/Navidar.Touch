/**
 * Ext.data.proxy.EncodedLocalStorage
 * @extends Ext.data.proxy.WebStorage
 * Designed to handle an encrypted proxy to the localStorage and to rather save the encrypted data than a plain text
 */
Ext.define('Ext.data.proxy.EncodedLocalStorage', {
    extend: 'Ext.data.proxy.WebStorage',
    alias: 'proxy.encodedlocalstorage',
    alternateClassName: 'Ext.data.EncodedLocalStorageProxy',


    //overwritten method defined in the storage proxy that is going to be taken in the model's setters and getters
    getStorageObject : function() {
        if (CryptoJS) {
            // if there's an encryption available via CryptoJS then use this object
            return this.encodedLocalStorage;
        } else {
            return window.localStorage;
        }
    },

    encodedLocalStorage : {

        encodingKey : 'Navidar_123456',

        // overrides the native methods from window.localStorage Object and uses the encryption to manipulate the data
        getItem         : function (item) {
            var itemNew = window.localStorage.getItem(item);
            if (itemNew) {
                return this.encryptParse(itemNew);
            }
            return null;
        },

        // overrides the native methods from window.localStorage Object and uses the encryption to manipulate the data
        setItem         : function (item, data) {
            var exist = window.localStorage.getItem(item);
            if (exist) {
                window.localStorage.setItem(item, this.encryptStringify(data));
            } else {
                window.localStorage[item] = this.encryptStringify(data);
            }
        },
        // added this not to mixin the window.localStorage Object into this one
        removeItem : function(item) {
            window.localStorage.removeItem(item);
        },

        // used to create the encryption and encode it in order to save it as a String in LocalStorage
        encryptStringify : function (data) {
            var key = this.encodingKey,
                retData;
            if (!data || data == "undefined") {
                return;
            }
            if (CryptoJS) {
                retData = CryptoJS.AES.encrypt(Ext.encode(data), key).toString();
                return retData ? retData : data;
            } else {
                return Ext.encode(data);
            }
        },

        //used to decrypt and decode the String saved into the LocalStorage and grab return the Object
        encryptParse : function (data) {
            var key = this.encodingKey,
                retData;
            if (!data || data == "undefined") {
                return;
            }
            if (CryptoJS) {
                retData = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
                return retData ? Ext.decode(retData) : data;
            } else {
                return Ext.decode(data);
            }
        }
    }
});