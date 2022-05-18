const countDis = document.getElementById('count');
// const countDiv = document.getElementById('centerdiv');

let countVal = 10;
let isStopped = true;

const reduceCount = () => {
  countVal -= 1;
  console.log(countVal);
  countDis.innerText = countVal;
  if (countVal === 0) {
    isStopped = false;
    countVal = '';
    countDis.innerText = countVal;
    const titleEle = document.createElement('h1');
    titleEle.classList.add('titleclass');
    titleEle.innerText = 'HAPPY INDEPENDENCE DAY';
    document.body.append(titleEle);
    clearInterval(timer);
  }
};

const timer = setInterval(reduceCount, 1000);

const startCountDown = () => {
  if (isStopped) {
    timer;
  }
};

// startCountDown();
