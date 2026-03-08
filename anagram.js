function anagram(str1, str2){

if (str1.length !== str2.length)
{
    console.log("This is not a anagram");
    
} else{

        str1 = str1.trim().toLowerCase().split("").sort().join("")
        str2 = str2.trim().toLowerCase().split("").sort().join("")
        
}

if ( str1 === str2){
    console.log("This String is a Anagram");
    
} else {
    console.log("This String is not a Anagram");
    
}
}

anagram('listen', 'SILENT')
anagram('Hello', 'WORLD')
