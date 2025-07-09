const url = "http://localhost:8080/ProyectoDomiexpro/api/"; // aqui obtenemos uan ruta base o url 


export const get = async (endpoint) => {
    return await fetch(url + endpoint);
};


export const post = async (endpoint, data) => {
    return await fetch(url + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};


export const put = async (endpoint, documento, data) => {
    return await fetch(`${url + endpoint}/${documento}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};

/**
 * Realiza una petición DELETE a la API para eliminar un recurso por su documento.
 * @param {string} endpoint - Ruta base del recurso (ejemplo: "/usuarios").
 * @param {string|number} documento - Clave primaria del recurso a eliminar.
 * @returns {Promise<Response>} - Promesa con la respuesta de la API.
 */
export const del = async (endpoint, documento) => {
    return await fetch(`${url + endpoint}/${documento}`, {
        method: "DELETE"
    });
};
