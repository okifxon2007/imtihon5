
function createCard(arg) {
    return  `<div   id="craw" class="davlat">
         <img src="${arg.flags.png}" alt="">
        <div class="wrap">
        <h3 class="h3" value='${arg.name.common}'> ${arg.name.common}</h3>
        <p class="p">Population: ${arg.population}</p>
        <p class="p">region: ${arg.region}</p>
        <p class="p"> capita:${arg.capital}</p>
        </div>
     </div>`
    
}
function cred(rels) {
     return `
     <div class="box">
     <button id="back"><-- Back</button>
    <div class="df">
     <div class="wan">
      <div class="lir">
         <img src="img/1 (2).jpg" alt="">
         <p>Border countries: <span></span> <span></span> <span></span></p>
      </div>
     </div>
     <div class="two">
 
         <h1>${rels.name.common}</h1>
        <div class="wiar">
         <div class="wr">
             <p>nativeName:${rels.nativeName}</p>
             <p>Population:${rels.population}</p>
             <p>Region:${rels.region}</p>
             <p>subregion:${rels.subregion}</p>
             <p>capital:${rels.capital}</p>
             
         </div>
         <div class="wir">
             <p>topleveldomain:${rels.topleveldomain}</p>
             <p>currencies:${rels.currencies}</p>
             <p>languages:${rels.languages}</p>
             
             
        </div>
         </div>
    </div>
     </div>
   
    </div>
   
   
     
     `
 }


export {createCard, cred}