const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4aeb2fff6emsh790f73b930c7e1bp1bae98jsn5170101e40da",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
