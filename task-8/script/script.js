const colors = ["red", "3AE9CE", "#ffcc00", "blue", "#ffd3e2", "pink"];

function split() {
  const input = document.getElementById("inputNumber").value;
  const splitCount = document.getElementById("splitNumber").value;
  const result = document.getElementById("result");
  result.innerHTML = "";

  let remaining = input;
  for (let i = 0; i < splitCount; i++) {
    const eachSplit = Math.floor(remaining / (splitCount - i));
    remaining -= eachSplit;

    const div = document.createElement("div");
    div.innerHTML = eachSplit;
    div.style.display = "inline-block";
    div.style.width = `${100 / splitCount}%`;
    div.style.backgroundColor = colors[i % colors.length];

    result.appendChild(div);
  }
}
