async function getData() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer ....",
        },
    };

    const response = fetch(
        "https://restcountries.com/v3.1/all",
        options
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getCountries() {
    const data = await getData();
    return data;
}