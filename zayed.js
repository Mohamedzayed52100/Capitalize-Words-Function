var myinput = document.getElementById('input'),
    mybtn = document.getElementById('button'),
    myh = document.getElementById('h');



function capitalize(string) {

    var oldarray = string.split(' '),
        newarray = [];


    for (var i = 0; i < oldarray.length; i++) {

        newarray.push(oldarray[i].charAt(0).toUpperCase() + oldarray[i].slice(1));

    }

    return newarray.join(' ');
}


console.log(capitalize('mohamed irahim zayed mido azab'));

mybtn.onclick = function() {
    myh.textContent = capitalize(myinput.value);
    myh.style.color = 'red';
}