const ConciertosDuki = [
    {
    id: 1,
    ciudad: "cordoba",
    imageURL:"https://i.scdn.co/image/ab6761610000e5eb38fea96b610287e187ce5d7f",
    cantidad: 10, 
    precio: 20000
    },
    {
        id: 2,
        ciudad: "mendoza",
        imageURL:"https://i.scdn.co/image/ab6761610000e5eb38fea96b610287e187ce5d7f",
        cantidad: 1, 
        precio: 10000
    },
    {
        id: 3,
        ciudad: "salta",
        imageURL:"https://i.scdn.co/image/ab6761610000e5eb38fea96b610287e187ce5d7f",
        cantidad: 3, 
        precio: 15000
    }

                     ]


 export const getDuki = () => {

   return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(ConciertosDuki);

        }, 1000)

    })
    
}

