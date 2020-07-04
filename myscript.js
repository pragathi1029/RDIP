/* Functions for Calculator involving operations:
   Addition, Subtraction, Multiplication, Division, Percentage, Square Root and Absolute Value. */

var expression = "";
var operand;
var decimal = 1;
blockEq(true);

function calDisplayNum(val){

    document.getElementById('textfield').value += val;  
    expression += val;
    blockSqMod(false);
    return true;
}

function blockNum(val){
    document.getElementById("1").disabled =val;
    document.getElementById("2").disabled =val;
    document.getElementById("3").disabled =val;
    document.getElementById("4").disabled =val;
    document.getElementById("5").disabled =val;
    document.getElementById("6").disabled =val;
    document.getElementById("7").disabled =val;
    document.getElementById("8").disabled =val;
    document.getElementById("9").disabled =val;
    document.getElementById("0").disabled =val;
    return true;
}

function blockOp(val){
    document.getElementById("+").disabled =val;
    document.getElementById("-").disabled =val;
    document.getElementById("*").disabled =val;
    document.getElementById("/").disabled =val;
    document.getElementById("%").disabled =val;
    document.getElementById("absolute").disabled =val;
    document.getElementById("sqroot").disabled =val;
    return true;
}

function blockDec(val){
    document.getElementById(".").disabled =val;
    return true;
}

function blockEq(val){
    document.getElementById("=").disabled = val;
    return true;
}

function blockSqMod(val){
    document.getElementById("absolute").disabled = val;
    document.getElementById("sqroot").disabled = val;
    return true;
}

function calDisplayOperator(val){
    document.getElementById('textfield').value += val;
    expression +=val;
    operand = val;
    decimal = 1;

    blockEq(false);
    if( val==' sqrt ' || val==' mod ' ){
        blockDec(true);
        return true;
    }
    else{
        blockOp(true);
        blockSqMod(true);
    }
    return true;
}

function calClear(){
    document.getElementById('textfield').value = "";
    blockDec(false);
    blockNum(false);
    blockOp(false);
    blockSqMod(true);
    expression = "";
    decimal=1;
    return true;
}

function calDisplayDec(){
    if(decimal==1){
        document.getElementById('textfield').value += ".";
        expression += ".";
        decimal = 0;
    }
    return true;
}

function calSolve(){
    var arr = expression.split(operand);

    if(!(operand == ' sqrt ' || operand == ' mod ')){

        var operator1 = parseFloat(arr[0]);
        var operator2 = parseFloat(arr[1]);

        if(operand == '+'){
            document.getElementById('textfield').value = String(calAddition(operator1,operator2));
        }
        else if(operand == '-'){
            document.getElementById('textfield').value = String(calSubtraction(operator1,operator2));
        }
        else if(operand == '*'){
            document.getElementById('textfield').value = String(calMultiplication(operator1,operator2));
        }
        else if(operand == '/'){
            document.getElementById('textfield').value = String(calDivision(operator1,operator2));
        }
        else if(operand == '%'){
            document.getElementById('textfield').value = String(calPercentage(operator1,operator2));
        }
    }

    else{

        var operator1 = parseFloat(arr[0]);

        if(operand == ' sqrt '){
             var x = String(calSqRoot(operator1));
             var i = x.indexOf(".");
             document.getElementById('textfield').value = x.substr(0,i+4);
        }
        else if(operand == ' mod '){
            document.getElementById('textfield').value = String(calMod(operator1));
        }
    }
    
    return true;
}

function calAddition(a,b){
    return a+b;
}

function calSubtraction(a,b){
    return a-b;
}

function calMultiplication(a,b){
    return a*b;
}

function calDivision(a,b){
    return a/b;
}

function calPercentage(a,b){
    return (a/100)*b;
}

function calSqRoot(a){
    return String(Math.sqrt(parseFloat(a)));
}

function calMod(a){
    return Math.abs(parseFloat(a));
}

/* End of Calculator */

/* Validation functions for validating name, phone number and email */

function validate(){

    var name = document.myform.name.value;
    var phone = document.myform.phone.value;
    var email = document.myform.email.value;

    var namepatt = /^[a-zA-Z\s]+$/i;
    var phonepatt = /^[0-9]{10}$/i;
    var emailpatt = /^\S+@\S+\.\S+$/i;

    if(name == ""){
        alert("Enter Name.");
        return false;
    }
    else if(!(namepatt.test(name))){
        alert("Name must only consist of alphabets.");
        return false;
    }

    if(phone == ""){
        alert("Enter Phone.");
        return false;
    }
    else if(!(phonepatt.test(phone))){
        alert("Phone number must consist of only 10 digits with no alphabets.");
        return false;
    }

    if(email == ""){
        alert("Enter Email.");
        return false;
    }
    else if(!(emailpatt.test(email))){
        alert("Email must consist of @ and . in order.");
        return false;
    }
    return true;
}

/* End of validation */

/* String validation function 1 checking whether a string is palindrome or not 
   String validation function 2 checking whether a string is anagram or not     */
   
function palindrome(){
    var str = document.myform.word.value;
    word = str.toLowerCase();

    if( str == "" ){
        alert("Enter a String");
        return false;
    }

    for(i=0;i<word.length;i++)
    {
    	if( word.charAt(i) != word.charAt(word.length - i - 1) ){
        	document.getElementById("palin").innerHTML = String(str + " is not a Palindrome.");
            return false;
         }
    }
    
    document.getElementById("palin").innerHTML = String(str + " is a Palindrome.");
    return true;
}

function anagram(){
    var str1 = document.myform1.first.value;
    var str2 = document.myform1.second.value;

    var word1 = str1.toLowerCase();
    var word2 = str2.toLowerCase();

    if( str1 == "" || str2 == "" ){
        alert("Enter both the Strings");
        return false;
    }

    if (word1.length != word2.length) {
        document.getElementById("ana").innerHTML = String(str1 + " and " + str2 + " are not Anagrams.");
        return false;
    }

    var arr = word2.split("");

    for(var i of word1){
        if(!arr.includes(i)){
            document.getElementById("ana").innerHTML = String(str1 + " and " + str2 + " are not Anagrams.")
            return false;
        }
        else{
            arr.splice(arr.indexOf(i),1);
        }
    }
    document.getElementById("ana").innerHTML = String(str1 + " and " + str2 + " are Anagrams.")
    return true;

}

function clrPalin(){
    document.getElementById("palin").innerHTML = "";
    document.getElementById("word").innerHTML = "";
}

function clrAna(){
    document.getElementById("ana").innerHTML = "";
    document.getElementById("first").innerHTML = "";
    document.getElementById("second").innerHTML = "";
}

/* End of String validation */

/* Game of Who Will Survive ? */

var object1 = "";
var object2 = "";
var turn;
var objects;

function start(){
    turn =0;

    objects = new Map();

    objects.set(0,'Human');
    objects.set(1,'Cockroach');
    objects.set(2,'Nuclear Bomb');
    return true;
}


function generateObject1(){
    object1 = objects.get( Math.floor(Math.random() * (1001))%3 );
    document.getElementById("pob1").innerHTML = "Object 1 : "+ String( object1 );
    turn += 1;
    document.getElementById("ob1").disabled=true;
    return true;
}

function generateObject2(){
    object2 = objects.get( Math.floor(Math.random() * (1001))%3 );
    document.getElementById("pob2").innerHTML = "Object 2 : "+ String(object2 );
    turn += 1;
    document.getElementById("ob2").disabled=true;
    return true;
}

function survival(){

    if(turn!=2)
    {
        alert("Generate both the objects");
        return false;
    }

    if(object1==object2){
        document.getElementById("winner").innerHTML = "Ouch ! That ended in a Tie !!";
    }
    else if((object2 == "Human" && object1 == "Cockroach") || (object1 == "Human" && object2 == "Cockroach")){
        document.getElementById("winner").innerHTML = "Human Survives !! Cockroach dies ...";
    }
    else if((object2 == "Nuclear Bomb" && object1 == "Cockroach") || (object1 == "Nuclear Bomb" && object2 == "Cockroach")){
        document.getElementById("winner").innerHTML = "Cockroach Survives !! ";
    }
    else if((object2 == "Nuclear Bomb" && object1 == "Human") || (object1 == "Nuclear Bomb" && object2 == "Human")){
        document.getElementById("winner").innerHTML = "Human Dies ... As Nuclear Bomb Explodes !!";
    }

    return true;
}

function clearGame(){
    if(turn==2){
        document.getElementById("pob1").innerHTML = "Click this button to generate Object 1";
        document.getElementById("pob2").innerHTML = "Click this button to generate Object 2";
        document.getElementById("winner").innerHTML = "Check Here !!";
        document.getElementById("ob1").disabled = false;
        document.getElementById("ob2").disabled = false;
        turn = 0;
    }
    return true;
}

/* End of Game */