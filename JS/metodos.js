const url = "http://localhost:8080/ProyectoDomiexpro/api"; // aqui obtenemos una ruta base o url 


export const get = async (endpoint) => {
    return await fetch(url + endpoint);
};


export const post = async (endpoint, data) => {
   const response = await fetch(url + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json(); 
    return {
        status: response.status,
        ok: response.ok,
        data: result
    };
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


export const del = async (endpoint, documento) => {
    return await fetch(`${url + endpoint}/${documento}`, {
        method: "DELETE"
    });
};
