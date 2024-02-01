let input = prompt('Enter the color of the traffic light: ');
let color = input.toLowerCase();

if (color == 'red') {
    console.log('Color is red and you need to stop');
}
else if (color == 'yellow') {
    console.log('Color is yellow and you should wait');
}
else if (color == 'green') {
    console.log('Color is green and you can go');
}
else {
    console.log('Invalid color');
}