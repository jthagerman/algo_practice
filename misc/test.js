let a = [1,2,3,4,5,6,7]



 a = [...a.slice(0,2), a[4], ...a.slice(3)]


console.log(a)


a.splice(3,1)
console.log(a)