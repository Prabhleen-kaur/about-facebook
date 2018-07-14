class facebook
{
    constructor(private userName:string,private gender:string,private dateOfBirth:string,private profilePicture:URL,private coverPhoto: URL,private relationshipStatus?:string,private mobileNumber?:string,private address?:string,private status?: string,private aboutYou?:string,private nameOfSchool?:string, private nameOfCollege?:string,private noOfSavedImages?:number,private noOfLikedPages?:number)
{
    this.userName=userName;
this.gender=gender;
this.dateOfBirth=dateOfBirth;
this.profilePicture=profilePicture;
this.coverPhoto=coverPhoto;
this.relationshipStatus=relationshipStatus;
this.mobileNumber=mobileNumber;
this.address=address;
this.status=status;

this.aboutYou=aboutYou;
this.nameOfSchool=nameOfSchool;
this.nameOfCollege=nameOfCollege;
this.noOfSavedImages=noOfSavedImages;
this.noOfLikedPages=noOfLikedPages;

}
getuserName =()=>
{
    return this.userName;
}
getrelationshipStatus =()=>
{
    return this.relationshipStatus;
}
setrelationshipStatus=(changedRelationshipStatus:string)=>
{
 this.relationshipStatus=changedRelationshipStatus;
}
getmobileNumber =()=>
{
    return this.mobileNumber;
}
getaddress=()=>
{
    return this.address;
}
getnameOfSchool=()=>
{
    this.nameOfSchool;
}
getnameOfCollege=()=>
{
    this.nameOfCollege;
}

}
let aboutFacebook= new facebook('abc','male','6th May 1996',new URL(`https://www.facebook.com/profilepic`),new URL(`https://www.facebook.com/coverphoto`),'single','98880090983','udyogVihar phase v','I m happy today','i want to become mean stack developer','IHS','Dav university',6,45 )
console.log(` ${JSON.stringify(aboutFacebook)}`)

console.log(`you are ${aboutFacebook.getuserName()} and your mobile number is ${aboutFacebook.getmobileNumber()} and address is ${aboutFacebook.getaddress()}`);
console.log(`you were earlier ${aboutFacebook.getrelationshipStatus()}`);
aboutFacebook.setrelationshipStatus("Married");
console.log(`Now you are ${aboutFacebook.getrelationshipStatus()}`)