async function shortLink(){
    const url = document.getElementById('url').value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if(response.ok){
        const data = await response.text();
        document.getElementById('result').innerHTML =
        `shortend Url : <a  href = "${data}" target ="_blank">${data}<a/>`;
    }
    else{
        document.getElementById('result').innerHTML = "error shotening link"
    }
}



// let error = document.querySelector('.error_message');
// let longLink = document.querySelector('.long_link');
// let short = document.querySelector('.result');

 
// function shortLink(){
//     //verification input
//     if(longLink.value !== ""){
//         error.innerHTML ="";

//         short.style.display = "none";
//         let url = `https://api.shrtco.de/v2/shorten?url=${longLink.value}`;

//         fetch(url)
//             .then(response => response.json())
//             .then(data => short.innerHTML = data.result.short_link);


//             short.style.display = "block";
//             if(short.innerHTML.length == 0){
//                 short.innerHTML = "Lien Non Valide !"
//             }
//     }
//     else{
//         error.innerHTML = "Fill the input with a link"
//         short.style.display = "none";
//     }
// }