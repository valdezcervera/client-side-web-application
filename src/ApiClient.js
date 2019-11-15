const getData = async (URL) => {
  try {
    const response = await fetch(URL,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
      });
    let data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
export default getData;
