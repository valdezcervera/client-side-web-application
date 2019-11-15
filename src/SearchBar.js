
const SearchBar = () => {
  let state = {
    value: '',
  }
  const handleSubmit = (e) => {
    const value = document.getElementById('input');
    e.preventDefault()
    state.value = value.value;
    value.value = null;
  }
  try {
    const InputText = {
      render: () => {
        const view =  /*html*/`
          <div class="content has-text-centered">
            <form id="form">
              <input id="input" type="text" />
              <button type="submit">Search</button>
            </form>
          </div>
      `
        return view
      },
    }
    // create a new div element 
    const newDiv = document.createElement("div");
    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div1");
    newDiv.innerHTML = InputText.render();
    currentDiv.append(newDiv);
    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);
  } catch (error) {
    console.log(error)
  }
  console.log('state.value from SearchBar= ', state.value)
  return state
}

export default SearchBar;