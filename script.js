const Book = (props) => {
  console.log(props)
  return React.createElement('div', {  }, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.year),
    React.createElement('p', {}, props.price)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {id: 'title', className: 'paragraph'}, 'Hello world'),
    React.(Book, {name: 'JS for beginners', year: 2020, price: 50}),
    React.createElemcreateElementent(Book, {name: 'React for beginners', year: 2017, price: 45}),
    React.createElement(Book, {name: 'Vue for beginners', year: 2021, price: 66})
  ])
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
