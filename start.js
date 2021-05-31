const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
	main.style.display = "none";
	qna.style.display = "block";
}



/*
const main = document.querySelector("#main");
const qua = document.querySelector("#qna");

function addAnswer(answerText, qIdx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
	//대답
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
	main.style.webkitanimaion = "fadeout 1s";
	main.style.animaion = "fadeout 1s";
	setTimeout(() => {
	    qua.style.webkitanimaion = "fadein 1s";
	    qua.style.animaion = "fadein 1s";
		myFunc("one","two","three");
		setTimeout(() => {
			main.style.display = "none";
			qua.style.display = "block";
	    }, 450)
		let qIdx = 0;
        goNext(qIdx);
	}, 450);	
}
*/