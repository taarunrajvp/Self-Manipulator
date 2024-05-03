const myname= prompt("enter name")
const age= prompt("enter age")
const place= prompt("enter place")
const hobby= prompt("enter hobby(seperated by comma)")

const place1=document.getElementById("nameid")
const place2=document.getElementById("ageid")
const place3=document.getElementById("placeid")


place1.innerText=myname
place2.innerText=age
place3.innerText=place

hobbylist=hobby.split(',')

hob=document.getElementById("hobby")
existing=[]

hobbylist.forEach(h => {
    existing.push('<span class="badge bg-secondary">'+h+'</span>')
})

hob.innerHTML=existing.join(" ")
