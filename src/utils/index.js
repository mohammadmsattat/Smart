//return <p> tag with fix string
function trimString(text) {
  if (!text) return <p></p>;

  const words = text.split(" ");
  let firstRow = "";
  let secondRow = "";
  let thirdRow = "";
  let currentLength = 0;

  for (let word of words) {
    if (currentLength + word.length <= 25) {
      firstRow += (firstRow ? " " : "") + word;
      currentLength += word.length + 1;
    } else if (currentLength + word.length <= 60) {
      secondRow += (secondRow ? " " : "") + word;
      currentLength += word.length + 1;
    } else if (currentLength + word.length <= 75) {
      thirdRow += (thirdRow ? " " : "") + word;
      currentLength += word.length + 1;
    }
  }
  if (thirdRow.length > 10) {
    thirdRow = thirdRow.slice(0, 10) + "...";
  }
  return (
    <p>
      {firstRow} <br/>
      {secondRow} <br/>
      {thirdRow}
    </p>
  );
}

export { trimString };
