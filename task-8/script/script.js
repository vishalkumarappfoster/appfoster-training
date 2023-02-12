const colors = [
  "#F9F54B",
  "#8BF5FA",
  "#EA8FEA",
  "#16FF00",
  "#FFED00",
  "#645CBB",
  "#30E3DF",
  "#BFDB38",
];

function split() {
  const input = document.getElementById("inputNumber").value;
  const splitCount = document.getElementById("splitNumber").value;
  const result = document.getElementById("result");
  result.innerHTML = "";
  document.getElementById("error").innerHTML = "";
  if (!Number.isInteger(Number(input)) || !Number.isInteger(Number(splitCount))) {
    document.getElementById("error").innerHTML =
      "Error: " + "Please enter only integer value.";
    return;
  }
  let num = parseInt(input);
  let parts = parseInt(splitCount);
  if (parts > num) {
    document.getElementById("error").innerHTML =
      "Error: " + "Splits should not be greater than than Inputnumber";
    return;
  }
  if (parts <= 0) {
    document.getElementById("error").innerHTML =
      "Error: " + "Splits should be a Positive Number";
    return;
  }

  let remaining = input;
  for (let i = 0; i < splitCount; i++) {
    const eachSplit = Math.ceil(remaining / (splitCount - i));
    remaining -= eachSplit;

    const div = document.createElement("div");
    div.innerHTML = eachSplit;
    div.style.display = "inline-block";
    div.style.width = `${100 / splitCount}%`;
    div.style.backgroundColor = colors[i % colors.length];

    result.appendChild(div);
  }
}
