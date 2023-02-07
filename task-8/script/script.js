function split() {
    const input = document.getElementById("inputNumber").value;
    const splitCount = document.getElementById("splitNumber").value;
    const result = document.getElementById("result");
    result.innerHTML = "";
  
    let remaining = input;
    for (let i = 0; i < splitCount; i++) {
      const eachSplit = Math.min(Math.ceil(remaining / (splitCount - i)), remaining);
      remaining -= eachSplit;
      
      const div = document.createElement("div");
      div.innerHTML = eachSplit;
      div.style.width = `${100 / splitCount}%`;
      
      if (eachSplit >= 5) {
        div.classList.add(`highlight${(i % 4) + 1}`);
      } else {
        div.classList.add("lowlight");
      }
      
      result.appendChild(div);
    }
  }
  