let a = "hello this is a string consisting of some words",
    b = a.split(" "),
    c = b.map(e=>e.length),
    d = Math.max(...c),
    e = c.indexOf(d),
    f = b[e]

console.log('The largest substring is: '+f)
