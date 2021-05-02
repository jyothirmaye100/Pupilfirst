console.log("hello from js file")
let password="abcd123456";
if(password.length>=8){
    console.log("password is valid");
}
else{
    console.log("sorry your password to be atleast 8 characters");
}
let email="example@gmail.com";
let isGmailAddress=email.includes("@gmail.com");
if(isGmailAddress){
    console.log("sorry.you cannot sign up with a @gmail.com address");
}
else{
    console.log("this is not a @gmail.com address.so it is ok!");
}
let password1="abcd1234";
let password2="abcd123";
if(password1===password2){
    console.log("both the passwords match");
}
else{
    console.log("sorry the password doesnot match eachother");
}
let essay="this is an essay";
let word=essay.split(" ");
let wordcount=word.length;
console.log("the word count for the eassy is:"+wordcount);

let password3="abcd123";
let password4="abcd12";
let ismatchingpasswords=password1===password2;
let isrequriedlength=password.length>=8;
let isvalidpassword=ismatchingpasswords&&isrequriedlength;
if(isvalidpassword){
    console.log("this password is valid");
}
else{
    console.log("sorry this password is invalid");
if(!ismatchingpasswords){
    console.log("fix:the passwords do not match eachother");
}    
}
