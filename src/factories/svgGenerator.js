const directions = ["h", "v"];
const currentPoint = {
  x: 0,
  y: 0
};
let pathCompleted = false;
const INTERVALL_START = 20;
const INTERVALL_END = 80;

export const generateSvgPath = (windowHeight, windowWidth) => {
  let path = "";
	path = path.concat(generateRandomEntryPoint(windowHeight, windowHeight));
	
	while(!pathCompleted){
		path = path.concat(generateRandomDirection(windowHeight, windowWidth))
	}

	console.log("end point", currentPoint);
  return path;
};

// Generate random number between 0-1
const randomSelector = () => {
  return Math.floor(Math.random() * 2);
};

const generateRandomNumberInIntervall = (start, end) => {
  return Math.floor(Math.random() * end + start);
};

const generateRandomEntryPoint = (windowHeight, windowWidth) => {
	pathCompleted = false;
	const selector = randomSelector();
  currentPoint.x = 0;
  currentPoint.y = 0;
  if (directions[selector] === "h") {
    currentPoint.y = generateRandomNumberInIntervall(0, windowHeight - 20) + 20;
  } else {
    currentPoint.x = generateRandomNumberInIntervall(0, windowWidth - 20) + 20;
  }

  return `M ${currentPoint.x} ${currentPoint.y} ${directions[selector]} 20 `;
};

const generateRandomDirection = (windowHeight, windowWidth) => {
	const selector = randomSelector();
  let randomDirectionValue;
  let offset;
  if (directions[selector] === "h") {
    randomDirectionValue = generateRandomNumberInIntervall(INTERVALL_START, INTERVALL_END);
    if (randomDirectionValue + currentPoint.y >= windowHeight) {
      offset = randomDirectionValue + currentPoint.y - windowHeight + 1;
			randomDirectionValue -= offset -5;
			pathCompleted = true;
			currentPoint.y += randomDirectionValue;
    } else {
      currentPoint.y += randomDirectionValue;
    }
  } else {
    randomDirectionValue = generateRandomNumberInIntervall(INTERVALL_START, INTERVALL_END);
    if (randomDirectionValue + currentPoint.x >= windowWidth) {
      offset = randomDirectionValue + currentPoint.x - windowWidth + 1;
      console.log('randomDirectionValue', randomDirectionValue, 'offset', offset);
			randomDirectionValue -= offset;
			pathCompleted = true;
			currentPoint.x += randomDirectionValue;
    } else {
      currentPoint.x += randomDirectionValue;
    }
  }

  return `${directions[selector]} ${randomDirectionValue} `;
};
