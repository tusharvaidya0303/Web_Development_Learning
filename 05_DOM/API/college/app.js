let url = "https://universities.hipolabs.com/search?country=India";

async function getColleges() {
    try {
       let response = await axios.get(url);
         console.log(response);
    } catch (error) {
       console.log("Error fetching college data:", error);
    }
}

getColleges();