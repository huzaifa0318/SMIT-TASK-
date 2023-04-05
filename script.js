

var carname = prompt("Enter car name you want : Corolla :Civic")
 
if (carname === "Corolla") {
    var modle = prompt("Enter modle you want : 2004 : 2010")
     if (modle === "2004") {
        var pricerange = prompt("Which price range you have : 12lac , 13.5lac , 15lac")
         if(pricerange==="12lac"){
               var color = prompt("Select color you want : Black , White")
               if (color==="Black") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Black Corolla Xli:12lac',
                    imageUrl: 'images/black corola 12 lac 2004.jpg',
                     imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 

               }else if(color==="White"){
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :White Corolla Xli:12lac',
                    imageUrl: 'images/white corolla 2004 12 lac.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 

               }else  {
                Swal.fire({
                    title: 'Soory not Avalible Yet!',
                    width: 600,
                    hieght: 450,
                    padding: '3em',
                    color: 'white',
                    background: '#fff url(images/blackbg1.jpg)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
          }
        
     }
     else if(pricerange==="13.5lac"){
               var color = prompt("Select color you want : Black , White")
               if (color==="Black") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Black Corola Xli:13.5lac',
                    imageUrl: 'images/black corola 2004 13.5.jpg',
                     imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 

               }else if(color==="White"){
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :White Corolla Xli:13.5lac',
                    imageUrl: 'images/white corolla 13.5 lac 2004.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 

               }else  {
                Swal.fire({
                    title: 'Soory not Avalible Yet!',
                    width: 600,
                    hieght: 450,
                    padding: '3em',
                    color: 'white',
                    background: '#fff url(images/blackbg1.jpg)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
          }
        
     }
     else if(pricerange==="15lac"){
        var color = prompt("Select color you want : Black , White")
        if (color==="Black") {
         Swal.fire({
             title: "Mushehdi Edits!",
             text: 'There is your car :Black Corola Xli:15lac',
             imageUrl: 'images/corolla black 15lac 2004.jpg',
              imageWidth: 400,
             imageHeight: 200,
             imageAlt: 'Custom image',
           }) 

        }else if(color==="White"){
         Swal.fire({
             title: "Mushehdi Edits!",
             text: 'There is your car :White Corolla Xli:15lac',
             imageUrl: 'images/White corola 2004 15lac.jpg',
             imageWidth: 400,
             imageHeight: 200,
             imageAlt: 'Custom image',
           }) 

        }else  {
         Swal.fire({
             title: 'Soory not Avalible Yet!',
             width: 600,
             hieght: 450,
             padding: '3em',
             color: 'white',
             background: '#fff url(images/blackbg1.jpg)',
             backdrop: `
               rgba(0,0,123,0.4)
               url("/images/nyan-cat.gif")
               left top
               no-repeat
             `
           })
   }
 
}
    } else if(modle=== "2010"){
        var pricerange = prompt("Which price range you have : 19.5lac , 22lac , 25lac")
          if(pricerange==="19.5lac"){
               var color = prompt("Select color you want : Black , White , Silver")
               if (color==="Black") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Black Corolla Gli:19.5lac',
                    imageUrl: 'images/black corolla 2010.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 

               }else if(color==="White"){
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :White Corolla Gli:19.5lac',
                    imageUrl: 'images/WHITE corolla 2010.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
                 }
                  else if(color==="Silver"){
                    Swal.fire({
                        title: "Mushehdi Edits!",
                        text: 'There is your car :Silver Corolla Gli:19.5lac',
                        imageUrl: 'images/silver corola 2010.jpg',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      }) 
    

               }else  {
                Swal.fire({
                    title: 'Soory not Avalible Yet!',
                    width: 600,
                    hieght: 450,
                    padding: '3em',
                    color: 'white',
                    background: '#fff url(images/blackbg1.jpg)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
          }
        
     }
    
    else if(pricerange==="22lac"){
        var color = prompt("Select color you want : Black , White , Silver")
        if (color==="Black") {
         Swal.fire({
             title: "Mushehdi Edits!",
             text: 'There is your car :Black Corolla Gli:22lac',
             imageUrl: 'images/black corolla 2010 22lac.webp',
             imageWidth: 400,
             imageHeight: 200,
             imageAlt: 'Custom image',
           }) 

        }else if(color==="White"){
         Swal.fire({
             title: "Mushehdi Edits!",
             text: 'There is your car :White Corolla Gli:22lac',
             imageUrl: 'images/2010 corolla wite 22lac.jpg',
             imageWidth: 400,
             imageHeight: 200,
             imageAlt: 'Custom image',
           })
          }
           else if(color==="Silver"){
             Swal.fire({
                 title: "Mushehdi Edits!",
                 text: 'There is your car :Silver Corolla Gli:22lac',
                 imageUrl: 'images/Gli 22.webp',
                 imageWidth: 400,
                 imageHeight: 200,
                 imageAlt: 'Custom image',
               }) 


        }else  {
         Swal.fire({
             title: 'Soory not Avalible Yet!',
             width: 600,
             hieght: 450,
             padding: '3em',
             color: 'white',
             background: '#fff url(images/blackbg1.jpg)',
             backdrop: `
               rgba(0,0,123,0.4)
               url("/images/nyan-cat.gif")
               left top
               no-repeat
             `
           })
   }
}
else if(pricerange==="25lac"){
    var color = prompt("Select color you want : Black , White , Silver")
    if (color==="Black") {
     Swal.fire({
         title: "Mushehdi Edits!",
         text: 'There is your car :Black Corolla Gli:25lac',
         imageUrl: 'images/black corolla 2010 25lac.jfif',
         imageWidth: 400,
         imageHeight: 200,
         imageAlt: 'Custom image',
       }) 

    }else if(color==="White"){
     Swal.fire({
         title: "Mushehdi Edits!",
         text: 'There is your car :White Corolla Gli:25lac',
         imageUrl: 'images/corolla white 2010 25lac.jpg',
         imageWidth: 400,
         imageHeight: 200,
         imageAlt: 'Custom image',
       })
      }
       else if(color==="Silver"){
         Swal.fire({
             title: "Mushehdi Edits!",
             text: 'There is your car :Silver Corolla Gli:25lac',
             imageUrl: 'images/corolla silver 2010 25lac.jpg',
             imageWidth: 400,
             imageHeight: 200,
             imageAlt: 'Custom image',
           }) 


    }else  {
     Swal.fire({
         title: 'Soory not Avalible Yet!',
         width: 600,
         hieght: 450,
         padding: '3em',
         color: 'white',
         background: '#fff url(images/blackbg1.jpg)',
         backdrop: `
           rgba(0,0,123,0.4)
           url("/images/nyan-cat.gif")
           left top
           no-repeat
         `
       })
}
}
}
        
   
}
else if (carname === "Civic") {
    var generation = prompt("Enter you car Generation :Reborn :Rebirth")
    if(generation==="Reborn"){
        var model = prompt("Enter Modle you want :2011 :2012")
    }
    if (model==="2011") {
        var price = prompt("Enter your orice range :23.5lac ")
        if(price==="23.5lac"){
            var carcolor = prompt("Select your car color :White : Black")
            if (carcolor==="White") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Honda Civic Reborn 2011:23.5lac',
                    imageUrl: 'images1/civic reborn 23lac.webp',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 
     
            }
           else  if (carcolor==="Black") {
            Swal.fire({
                title: "Mushehdi Edits!",
                text: 'There is your car :Honda Civic Reborn 2011:23.5lac',
                imageUrl: 'images1/reborn black 23.5lac 2011.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              }) 
 
         } 
         
         
    }
    else{
        Swal.fire({
            title: 'Soory not Avalible Yet!',
            width: 600,
            hieght: 450,
            padding: '3em',
            color: 'white',
            background: '#fff url(images/blackbg1.jpg)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
     }
    }
   
    if (model==="2012") {
        var price = prompt("Enter your orice range  : 26lac")
        if(price==="26lac"){
            var carcolor = prompt("Select your car color :White : Black")
            if (carcolor==="Black") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Honda Civic Reborn 2012:26lac',
                    imageUrl: 'images1/civic reborn black 26lac.jfif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 
     
            }
           else  if (carcolor==="White") {
            Swal.fire({
                title: "Mushehdi Edits!",
                text: 'There is your car :Honda Civic Reborn 2012:26lac',
                imageUrl: 'images1/reborn white 2012 26lac.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              }) 
 
        }
       
        }
          else{
            Swal.fire({
                title: 'Soory not Avalible Yet!',
                width: 600,
                hieght: 450,
                padding: '3em',
                color: 'white',
                background: '#fff url(images/blackbg1.jpg)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        }
         
    }
    else if(generation==="Rebirth"){
        var model = prompt("Enter Modle you want :2013 :2016")
    }
    else{
      Swal.fire({
          title: 'Soory not Avalible Yet!',
          width: 600,
          hieght: 450,
          padding: '3em',
          color: 'white',
          background: '#fff url(images/blackbg1.jpg)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      }
    if (model==="2013") {
        var prize = prompt("Enter your orice range :35.6lac ")
        if(prize==="35.6lac"){
            var carcolor = prompt("Select your car color :White : Black")
            if (carcolor==="White") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Honda Civic Rebirth  2013:35.6lac',
                    imageUrl: 'images1/rebith 2013 white 35.6lac.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 
     
            }
           else  if (carcolor==="Black") {
            Swal.fire({
                title: "Mushehdi Edits!",
                text: 'There is your car :Honda Civic Reborn 2011:23.5lac',
                imageUrl: 'images1/rebirth 2013 Black 35.6lac.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              }) 
 
         } 
         
         
    }
    else{
        Swal.fire({
            title: 'Soory not Avalible Yet!',
            width: 600,
            hieght: 450,
            padding: '3em',
            color: 'white',
            background: '#fff url(images/blackbg1.jpg)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
     }
    }
    else  if (model==="2016") {
        var prize = prompt("Enter your orice range  : 48lac")
        if(prize==="48lac"){
            var carcolor = prompt("Select your car color :White : Black")
            if (carcolor==="White") {
                Swal.fire({
                    title: "Mushehdi Edits!",
                    text: 'There is your car :Honda Civic Rebirth  2016:48lac',
                    imageUrl: 'images1/rebirth 2016 white 48lac.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  }) 
     
            } else{
              Swal.fire({
                  title: 'Soory not Avalible Yet!',
                  width: 600,
                  hieght: 450,
                  padding: '3em',
                  color: 'white',
                  background: '#fff url(images/blackbg1.jpg)',
                  backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                  `
                })
            }}
           else  if (carcolor==="Black") {
            Swal.fire({
                title: "Mushehdi Edits!",
                text: 'There is your car :Honda Civic Rebirth 2016:48lac',
                imageUrl: 'images1/rebith 2016 black 48lac.jfif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              }) 
 
         }  else{
          Swal.fire({
              title: 'Soory not Avalible Yet!',
              width: 600,
              hieght: 450,
              padding: '3em',
              color: 'white',
              background: '#fff url(images/blackbg1.jpg)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            })
       }
         
         
    }

    else{
        Swal.fire({
            title: 'Soory not Avalible Yet!',
            width: 600,
            hieght: 450,
            padding: '3em',
            color: 'white',
            background: '#fff url(images/blackbg1.jpg)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
     }
    } else{
      Swal.fire({
          title: 'Soory not Avalible Yet!',
          width: 600,
          hieght: 450,
          padding: '3em',
          color: 'white',
          background: '#fff url(images/blackbg1.jpg)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
   }
   



  