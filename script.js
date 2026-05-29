

    const words = [
      "Developer.",
      "Designer.",
      "Creator."
    ];

    const text = document.querySelector(".typing");

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typingEffect(){

      let currentWord = words[wordIndex];

    
      if(deleting == false){

        text.innerHTML =
          currentWord.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

          deleting = true;

          setTimeout(typingEffect,1000);
          return;
        }

      }

      
      else{

        text.innerHTML =
          currentWord.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

          deleting = false;

          wordIndex++;

          if(wordIndex >= words.length){
            wordIndex = 0;
          }

        }

      }

      setTimeout(typingEffect,120);

    }

    typingEffect();

 