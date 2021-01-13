//Function to link open the next div
const onClick = (divId, linkId) => {
    let showDiv = document.getElementById(divId);
    let link = document.getElementById(linkId);

    link.addEventListener("click", function () {
        showDiv.style.display = "block";
    }); 
}

//Function to apply code snippet identifier 
function checkCode (buttonId, codeSnippetId, showId, inputId) {
    let buttonToCheck = document.getElementById(buttonId)
    buttonToCheck.addEventListener("click", function getInputValue() {
        
        let codeSnippet = document.getElementById(codeSnippetId).value
        let show = document.getElementById(showId)
        let inputVal = document.getElementById(inputId).value;
        if (inputVal == codeSnippet) {
            eval(codeSnippet)
            show.style.display = "block";
        } else {
            alert("Please, copy and paste the exact message.");
        }
    });
}

// function to copy to clipboard
function copySnippet (codeSnippetId, copyButtonId) {
    let codeSnippet = document.getElementById(codeSnippetId)
    let copyButton = document.getElementById(copyButtonId)

    copyButton.addEventListener("click", function() {
        codeSnippet.select()
        document.execCommand("copy");
    });
}

// Scroll into view
function scroll (divId, buttonId) {
    let div = document.getElementById(divId)
    let click = document.getElementById(buttonId)
    click.addEventListener("click", function () {
        div.scrollIntoView();
    });
}

//Restart tutorial
const restart = () => {
    let restartButton = document.getElementById("restart")
    restartButton.addEventListener("click", function(){
        window.location.reload();
    });
}

restart();

onClick("div1", "link1");
onClick("div2", "link2");
onClick ("div5", "link3");
onClick ("div6", "link4");
onClick ("div8", "link5");
onClick ("div10", "link6");
onClick ("div12", "link7");
onClick ("div13", "link8");

checkCode ("checkCode1", "codeSnippet1", "p1", "input1");
checkCode ("checkCode2", "codeSnippet2", "div3", "input2");
checkCode ("checkCode3", "codeSnippet3", "div4", "input3");
checkCode ("checkCode4", "codeSnippet4", "div7", "input4");
checkCode ("checkCode5", "codeSnippet5", "div9", "input5");
checkCode ("checkCode6", "codeSnippet6", "div11", "input6");

copySnippet ("codeSnippet1", "copyButton1");
copySnippet ("codeSnippet2", "copyButton2");
copySnippet ("codeSnippet3", "copyButton3");
copySnippet ("codeSnippet4", "copyButton4");
copySnippet ("codeSnippet5", "copyButton5");
copySnippet ("codeSnippet6", "copyButton6");

scroll ("div1", "link1");
scroll ("p1", "checkCode1");
scroll ("div2", "link2");
scroll ("div3", "checkCode2");
scroll ("div4", "checkCode3");
scroll ("div5", "link3");
scroll ("div6", "link4");
scroll ("div7", "checkCode4");
scroll ("div8", "link5");
scroll ("div9", "checkCode5");
scroll ("div10", "link6");
scroll ("div11", "checkCode6");
scroll ("div12", "link7");
scroll ("div13", "link8");