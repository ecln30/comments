













const comment = document.querySelector("#root")


async function getdata() {
    const response = await fetch("data.json")
    const data = await response.json()
    console.log(data.comments[0])
    load(data)
}

getdata()

function load(data) {
     
     const root = document.getElementById('root')
     const div = document.createElement("div")



    
}


load()