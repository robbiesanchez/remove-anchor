function removeURLAnchor(url) {
  if (url.includes('#')) {
    let newURL = url.slice(0, url.lastIndexOf("#"));
  console.log(newURL);
} else {
  console.log(url)
}
}

removeURLAnchor('www.codewars.com#the');