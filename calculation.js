document.getElementById('random-background1').addEventListener('mouseover', function () {
    document.getElementById('random-background1').style.background = random_bg_color();
});
document.getElementById('random-background2').addEventListener('mouseover', function () {
    document.getElementById('random-background2').style.background = random_bg_color();
});
document.getElementById('random-background3').addEventListener('mouseover', function () {
    document.getElementById('random-background3').style.background = random_bg_color();
});
document.getElementById('random-background4').addEventListener('mouseover', function () {
    document.getElementById('random-background4').style.background = random_bg_color();
});
document.getElementById('random-background5').addEventListener('mouseover', function () {
    document.getElementById('random-background5').style.background = random_bg_color();
});
document.getElementById('random-background6').addEventListener('mouseover', function () {
    document.getElementById('random-background6').style.background = random_bg_color();
});




document.getElementById('triangle-calculation').addEventListener('click', function () {

    const tBaseValue = getValueFromInputFieldByID('triangle-base');

    const tHeightValue = getValueFromInputFieldByID('triangle-height');

    if (isNaN(tBaseValue) === true || isNaN(tHeightValue) === true) {
        alert('Insert a number');
    }
    else if (tBaseValue === 0 || tHeightValue === 0) {
        alert('The value can not be 0');
    }
    else if (tBaseValue < 0 || tHeightValue < 0) {
        alert('The value can not be negative');
    }
    else {
        const triangleTotal = 0.5 * tBaseValue * tHeightValue;

        appendResult(triangleTotal, 'Triangle');
    }


}
);


document.getElementById('rectangle-calculation').addEventListener('click', function () {

    const rWidthValue = getValueFromInputFieldByID('rectangle-width');

    const rHeightValue = getValueFromInputFieldByID('rectangle-height');


    if (isNaN(rWidthValue) === true || isNaN(rHeightValue) === true) {
        alert('Insert a number');
    }
    else if (rWidthValue === 0 || rHeightValue === 0) {
        alert('The value can not be 0');

    }
    else if (rWidthValue < 0 || rHeightValue < 0) {
        alert('The value can not be negative');
    }
    else {
        const rectangleTotal = rWidthValue * rHeightValue;
        appendResult(rectangleTotal, 'Rectangle');
    }




});

document.getElementById('parallelogram-calculation').addEventListener('click', function () {

    const parallelogramResult = 10 * 12;
    appendResult(parallelogramResult, 'Parallelogram');

});
document.getElementById('rhombus-calculation').addEventListener('click', function () {

    const rhombusResult = 0.5 * 16 * 8;
    appendResult(rhombusResult, 'Rhombus');

});
document.getElementById('pentagon-calculation').addEventListener('click', function () {

    const pentagonResult = 0.5 * 6 * 10;
    appendResult(pentagonResult, 'Pentagon');

});
document.getElementById('ellipse-calculation').addEventListener('click', function () {

    const ellipseResult = 3.1416 * 10 * 4;
    appendResult(ellipseResult, 'Ellipse');

});


function getValueFromInputFieldByID(id) {

    const number = document.getElementById(id);
    const numberString = number.value;
    const floatNumber = parseFloat(numberString);
    number.value = "";
    return floatNumber;

};

function appendResult(resultAdd, name) {
    const areaCal = document.getElementById('area-calculation');
    const li = document.createElement('li');
    li.classList.add("w-5/6", "mx-auto", "mt-5");
    li.innerHTML = `
<div class="flex justify-between mx-auto items-center">
<h5>${name}</h5>
    <p>${resultAdd}cm<sup>2</sup><p>
    <button class="m-auto bg-sky-600 p-2 rounded text-white font-semibold" >Covert to m<sup>2</sup>
    </button>
</div>
`;

    areaCal.appendChild(li);

};


function random_bg_color() {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    let color = `#${hexVal}`;
    return color;
};

document.getElementById('blog').addEventListener('click', function(){
    window.location.href = "questionAndAnswer.html";
});