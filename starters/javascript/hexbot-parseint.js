let canvas;
let ctx;
let appWidth;
let appHeight;

function start_app() {
  sizeCanvas();
  getHex();

}

function sizeCanvas() {
    appWidth = window.innerWidth;
    appHeight = window.innerHeight;
    canvas = document.getElementById('canvas');
    ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#ffffff' });
}

function getHex() {
    NOOPBOT_FETCH({
      API: 'hexbot',
      count: 100
    }, parseSet);
}

function parseSet(responseJson) {
    // console.log("TCL: parseSet -> responseJson", responseJson)
    let { colors } = responseJson;
    // console.log("TCL: parseSet -> colors", colors)
    colors.forEach( hex => parseHex(hex));
}

async function parseHex(hex) {
    let hexI = hex.value.substring(1);
    let decHexI = parseInt(hexI.toString(), 16);
    let text = hex.value + " = " + decHexI;
    
    printConversion(text);
    // reverse base converstion, for testing:
    // console.log(decHexI + " = " + decHexI.toString(16) );
}

async function printConversion(str) {
    console.log("TCL: printConversion -> str", str)
    let x = NOOPBOT_RANDOM(0, appWidth);
    let y = NOOPBOT_RANDOM(0, appHeight);

    
    ctx.strokeText(str, x, y);
}