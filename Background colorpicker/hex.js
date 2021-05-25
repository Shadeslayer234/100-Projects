const hexValues = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']

const randomNum = () =>{
    return Math.floor(Math.random()*16)
}


const randomColor = () =>{
  let color = '#'
  for(let i=0; i < 6; i++){
      color += hexValues[randomNum()]
  }
  document.querySelector('body').style.background = color
  document.querySelector('.hexcolor-name').innerText = color
  return color  
}
console.log(randomNum())

console.log(randomColor())

document.querySelector('#hexColor').addEventListener('click', randomColor)

