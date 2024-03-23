const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(array, key)   {
    return array.reduce(function(name, nextVal)  {
         name.push(nextVal[key]); 
        return name
    },[]
    )
}
function vowelCount(string) {
    const vowels = "aeiou"
    const stringArray = string.split('')
    return stringArray.reduce(function(vowel, nextValue)    {
        let lowerCasedLetter = nextValue.toLowerCase();
        if(vowels.indexOf(lowerCasedLetter) !== -1) {
        if (vowel[lowerCasedLetter]){
            vowel[lowerCasedLetter]++
        }
        else{
            vowel[lowerCasedLetter] = 1
        }        
        }
        return vowel
    },[])
}
const arrTwo = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function addKeyAndValue(array, key, value)  {
    return array.reduce(function(keyed, nextValue, idx)  {
        keyed[idx][key] = value
        return keyed
    },array)
}
function isEven(val){
    return val % 2 === 0;
  }
  
  const numberarr = [1,2,3,4,5,6,7,8];

  function partition(array,callback)    {
    return array.reduce(function(accum,next)   {
        if (callback(next) === true)  {
            accum[0].push(next)
       }
       else{
        accum[1].push(next)
       }
       return accum
    },[[],[]])
    
}