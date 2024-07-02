let flexBox = document.getElementById('flex-box-simulation-border');

function RowScript() {
    flexBox.style.flexDirection = "row";
}

function ColumnScript() {
    flexBox.style.flexDirection = "column";
}

function AlignStart() {
    flexBox.style.alignItems = "start";
}
function AlignCenter() {
    flexBox.style.alignItems = "center";
}
function AlignEnd() {
    flexBox.style.alignItems = "end";
}

function StartJustify() {
    flexBox.style.justifyContent = "start";
}
function CenterJustify() {
    flexBox.style.justifyContent = "center";
}
function EndJustify() {
    flexBox.style.justifyContent = "end";
}
function AroundJustify() {
    flexBox.style.justifyContent = "space-around";
}
function BetweenJustify() {
    flexBox.style.justifyContent = "space-between";
}
function EvenlyJustify() {
    flexBox.style.justifyContent = "space-evenly";
}

function Gap() {
    let gapInput = document.getElementById('input-gap');
    let currentValue = parseInt(gapInput.value);
    gapInput.value = currentValue + 1;
    flexBox.style.gap = gapInput.value + "px";
}

function GapButton() {
    let gapInput = document.getElementById('input-gap');
    let currentValue = parseInt(gapInput.value);
    flexBox.style.gap = gapInput.value + "px";
}

function ResetFlexBox() {
    flexBox.style.justifyContent = "start";
    flexBox.style.alignItems = "start";
    flexBox.style.flexDirection = "row";
    flexBox.style.gap = "0px";
    document.getElementById("input-gap").value = 0;
    document.getElementById("flexbox1").style.flexGrow = 0;
    document.getElementById("flexbox2").style.flexGrow = 0;
    document.getElementById("flexbox3").style.flexGrow = 0;
    document.getElementById("input-grow").value = 0;
    document.getElementById("input-grow-two").value = 0;
    document.getElementById("input-grow-three").value = 0;
}

function ResetGrow() {
    document.getElementById("flexbox1").style.flexGrow = 0;
    document.getElementById("flexbox2").style.flexGrow = 0;
    document.getElementById("flexbox3").style.flexGrow = 0;
    document.getElementById("input-grow").value = 0;
    document.getElementById("input-grow-two").value = 0;
    document.getElementById("input-grow-three").value = 0;
}

function GrowFlex() {
    document.getElementById("input-grow").value = +1;
    document.getElementById("input-grow-two").value = +1;
    document.getElementById("input-grow-three").value = +1;
    document.getElementById("flexbox1").style.flexGrow = 1;
    document.getElementById("flexbox2").style.flexGrow = 1;
    document.getElementById("flexbox3").style.flexGrow = 1;
}

function BoxOne() {
    let growInput = document.getElementById("input-grow");
    let currentValue = parseInt(growInput.value);
    growInput.value = currentValue + 1;
    document.getElementById("flexbox1").style.flexGrow = growInput.value;
}

function InputOne() {
    let growInput = document.getElementById('input-grow');
    document.getElementById("flexbox1").style.flexGrow = growInput.value;
}

function BoxTwo() {
    let growInput = document.getElementById("input-grow-two");
    let currentValue = parseInt(growInput.value);
    growInput.value = currentValue + 1;
    document.getElementById("flexbox2").style.flexGrow = growInput.value;
}

function InputTwo() {
    let growInput = document.getElementById('input-grow-two');
    document.getElementById("flexbox2").style.flexGrow = growInput.value;
}

function BoxThree() {
    let growInput = document.getElementById("input-grow-three");
    let currentValue = parseInt(growInput.value);
    growInput.value = currentValue + 1;
    document.getElementById("flexbox3").style.flexGrow = growInput.value;
}

function InputThree() {
    let growInput = document.getElementById('input-grow-three');
    document.getElementById("flexbox3").style.flexGrow = growInput.value;
}
