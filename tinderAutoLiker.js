//https://github.com/amitoj-singh/tinder-auto-liker/
setInterval(
  function () {
    //select right swipe button element and fire a click event
    likeBtn = document.querySelector("[class='button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a']"); 
    likeBtn.click();
  }, 5000 //time in miliseconds after which like button will be clicked  
);
