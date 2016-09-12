angular.module('bluepicWebApp')

    .service('PropertiesService', function () {

        var accessToken = "";
        var userName = "";
        var userId = "1002";  // Isaac Newton test userID: 102496306870321
        var photos = [];
        var photoId = null;
        var photoIndex = -1;
        var searchTerm = "";

        return {
            getAccessToken: function () {
                return accessToken;
            },
            setAccessToken: function (value) {
                accessToken = value;
            },
            getUserId: function () {
                return userId;
            },
            setUserId: function (value) {
                userId = value;
            },
            getPhotos: function () {
                return photos;
            },
            setPhotos: function (value) {
                photos = value;
            },
            getPhotoId: function () {
                return photoId;
            },
            setPhotoId: function (value) {
                photoId = value;
            },
            getPhotoIndex: function () {
                return photoIndex;
            },
            setPhotoIndex: function (value) {
                photoIndex = value;
            },
            getFbUserName: function () {
                return userName;
            },
            setFbUserName: function (value) {
                userName = value;
            },
            getSearchTerm: function () {
                return searchTerm;
            },
            setSearchTerm: function (value) {
                searchTerm = value;
            }
        };
    });