document.getElementById('loveForm').addEventListener('submit',function(e) {
    e.preventDefault();

    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();
    const resultDiv = document.getElementById('result');

    if (!yourName || !crushName) {
        alert('please fill the box with names');
        return;
    }

    const lovepercent = Math.floor(Math.random()*100);

    let message = "";
    if(lovepercent>=90) {
        message='match made in heaven!!!';
    }
    else if(lovepercent>=75) {
        message='their is something working, please keep on trying!!';
    }
    else{
        message='you got saved,enjoy ur life!!!!!!';
    }
    resultDiv.classList.remove('d-none');
    resultDiv.innerHTML= `${yourName} & ${crushName} = ${lovepercent}% - ${message}`
})