let counter=0
const getData=(()=>{
  //Calls an api and gets data
  console.log("Fetching Data...",counter++)
})
const dosomemagic=((fn,delay)=>{  //this funcion will take another function and a delay
  let timer;
  return function (){
    let context=this,
      args=arguments
    clearTimeout(timer)
     timer=setTimeout(()=>{
      getData.apply(context,arguments)
    },delay)
  }
})
const betterfunction=dosomemagic(getData,300)




// const [timeoutId,settimeoutId]=useState()
//   const onTextChange=((event)=>{ 
//     clearTimeout(timeoutId)
//     const timeout= setTimeout(()=>console.log("APi Call"),500)  //React Method
//       settimeoutId(timeout)
//   })