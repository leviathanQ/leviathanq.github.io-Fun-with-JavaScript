function makeBigger()
{
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancySchmancy()
{
    alert("FancySchmancy");
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function boringBetty()
{
    alert("BoringBetty");
    document.getElementById("textArea").removeAttribute('style');
}

function makeMoo()
{
    document.getElementById("textArea").style.textTransform = "uppercase";
    var str = document.getElementById("textArea").value;
    var parts = str.split(".");
    str = parts.join(".-Moo");
    document.getElementById("textArea").value = str;
}