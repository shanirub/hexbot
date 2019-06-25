let canvas;
let ctx;
let appWidth;
let appHeight;

function start_app() {
  
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
      count: 1
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
    console.log("TCL: parseHex -> text", text)
    
    printConversion(text);
    // reverse base converstion, for testing:
    // console.log(decHexI + " = " + decHexI.toString(16) );
}

async function printConversion(str) {
    debugger
    console.log("TCL: parseHex -> text", str);

}