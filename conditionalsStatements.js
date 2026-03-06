function launchBrowser(browserName) {
    // Print the provided browser name
    console.log("Browser name provided:", browserName);
    if (browserName === "chrome") {
        console.log("Browser name is Chrome");
    } else {
        console.log("Other browser");
    }
}

launchBrowser("chrome");
launchBrowser("firefox");


function runTests(testType){

    switch (testType){
        case "Smoke":
        console.log("Test type is Smoke")
        break;

        case "Sanity":
        console.log("Test type is Sanity")
        break;

        case "regression":
        console.log("Test type is regression")
        break;

        default :
        console.log("Test type is Smoke")

    }

}

runTests("Sanity");
runTests("Functional");
