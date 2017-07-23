function forLoop(theArray) {
  for(i = 0; i < 25; i++) {
    if (i == 1) {
      theArray = [...theArray, `I am 1 strange loop.`]
    } else {
      theArray = [...theArray, `I am ${i} strange loops.`]
    }
  }
  return theArray
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(theArray) {
  do {
    theArray.pop()
  } while (theArray.length > 0 && maybeTrue())
  return theArray
}
