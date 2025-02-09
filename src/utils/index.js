function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
}

const slugify = function(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
  console.log()
      if (list[i].slug === obj.slug) {
          return i;
      }
  }

  return -1;
}


//return <p> tag with fix string
function trimString(text) {
  if (!text) return <p></p>; 

  const words = text.split(" "); 
  let firstRow = "";
  let secondRow = "";
  let thirdRow = "";
  let currentLength = 0;

  for (let word of words) {
      if (currentLength + word.length <= 20) {
          firstRow += (firstRow ? " " : "") + word;
          currentLength += word.length + 1;
      } else if (currentLength + word.length <= 55) {
          secondRow += (secondRow ? " " : "") + word;
          currentLength += word.length + 1;
      } else if (currentLength + word.length <= 75){
          thirdRow += (thirdRow ? " " : "") + word;
          currentLength += word.length + 1;
      }
  }

    
     if (thirdRow.length > 10) {
      thirdRow = thirdRow.slice(0, 10) + "...";
  }

  return (
      <p>
          {firstRow} <br />
          {secondRow} <br />
          {thirdRow}
      </p>
  );
}





export {flatDeep, slugify, containsObject ,trimString};