const countButton = document.querySelector('.buttonCount button');

let countNumber = document.querySelector('.actualCount h1');

countButton.addEventListener('click', counting);

function counting()
{
  countNumber.innerHTML++;
}



