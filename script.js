function dataclear()
{
    document.getElementById("screen").value=''
}

function dataclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function equalclick()
{
    text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
}