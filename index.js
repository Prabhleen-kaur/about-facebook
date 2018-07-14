var facebook = /** @class */ (function () {
    function facebook(userName, gender, dateOfBirth, profilePicture, coverPhoto, relationshipStatus, mobileNumber, address, status, aboutYou, nameOfSchool, nameOfCollege, noOfSavedImages, noOfLikedPages) {
        var _this = this;
        this.userName = userName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.relationshipStatus = relationshipStatus;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.status = status;
        this.aboutYou = aboutYou;
        this.nameOfSchool = nameOfSchool;
        this.nameOfCollege = nameOfCollege;
        this.noOfSavedImages = noOfSavedImages;
        this.noOfLikedPages = noOfLikedPages;
        this.getuserName = function () {
            return _this.userName;
        };
        this.getrelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.setrelationshipStatus = function (changedRelationshipStatus) {
            _this.relationshipStatus = changedRelationshipStatus;
        };
        this.getmobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getaddress = function () {
            return _this.address;
        };
        this.getnameOfSchool = function () {
            _this.nameOfSchool;
        };
        this.getnameOfCollege = function () {
            _this.nameOfCollege;
        };
        this.userName = userName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.relationshipStatus = relationshipStatus;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.status = status;
        this.aboutYou = aboutYou;
        this.nameOfSchool = nameOfSchool;
        this.nameOfCollege = nameOfCollege;
        this.noOfSavedImages = noOfSavedImages;
        this.noOfLikedPages = noOfLikedPages;
    }
    return facebook;
}());
var aboutFacebook = new facebook('abc', 'male', '6th May 1996', new URL("https://www.facebook.com/profilepic"), new URL("https://www.facebook.com/coverphoto"), 'single', '98880090983', 'udyogVihar phase v', 'I m happy today', 'i want to become mean stack developer', 'IHS', 'Dav university', 6, 45);
console.log(" " + JSON.stringify(aboutFacebook));
console.log("you are " + aboutFacebook.getuserName() + " and your mobile number is " + aboutFacebook.getmobileNumber() + " and address is " + aboutFacebook.getaddress());
console.log("you were earlier " + aboutFacebook.getrelationshipStatus());
aboutFacebook.setrelationshipStatus("Married");
console.log("Now you are " + aboutFacebook.getrelationshipStatus());
