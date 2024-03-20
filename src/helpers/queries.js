const URL_Colores = import.meta.env.VITE_API_COLORES
const URL_Color = import.meta.env.VITE_API_COLOR

export const leerColoresAPI = async () => {
    try {
        const respuesta = await fetch(URL_Colores)
        const listaColores = await respuesta.json()
        return listaColores
    } catch (error) {
        console.log(error)
    }
}

export const obtenerColorAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Color + '/' + id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearColorAPI = async (colorNuevo) => {
    try {
        const respuesta = await fetch(URL_Colores, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colorNuevo)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarColorAPI = async (colorModificado, id) => {
    try {
        const respuesta = await fetch(`${URL_Color}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colorModificado)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarColorAPI = async (id) => {
    try {
        const respuesta = await fetch(`${URL_Color}/${id}`, {
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}