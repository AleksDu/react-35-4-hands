import "./App.scss";
import { Component } from "react";
import { Form } from "./Components/Forms/Form";
import { ProductList } from "./Components/Products/ProductList";
import { Modal } from "./Components/Modal/Modal";

// import { DeleteButton } from './components/Widgets/RemoveItem';
// import { Counter } from './components/Counter/Counter';

// const text = {
//   title: 'title-1',
//   content: 'content-1',
//   backBtn: 'go back',
//   deleteBtn: 'delete',
// };

class App extends Component {
  state = {
    counter: 0,
    isOpen: false,
    showModal: false,
    allProducts: [],
  };

  componentDidMount() {
    console.log("MOUNT");
    const localProducts = localStorage.getItem("products");
    const parseProducts = JSON.parse(localProducts);
    if (parseProducts) {
      this.setState({ allProducts: parseProducts });
    }

    this.setState({ allProducts: parseProducts });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("UPDATE");
    // если изменилось значение поля стейта prevState.prop
    // то будем переписывато локал сторадж
    if (prevState.allProducts !== this.state.allProducts) {
      localStorage.setItem("products", JSON.stringify(this.state.allProducts));
    }
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  addNewProduct = (obj) =>
    this.setState((prevState) => ({
      allProducts: [...prevState.allProducts, obj],
    }));

  deleteProduct = (id) =>
    this.setState((prev) => ({
      allProducts: prev.allProducts.filter((prod) => prod.id !== id),
    }));

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  // handleDecrement = () => {
  //   // просто перепишем текущий стейт
  //   // this.setState({
  //   //   counter: this.state.counter - 1,
  //   // })
  //   // если нужно отталкиваться от предыдущего значения
  //   // this.setState((prevState) => {
  //   //   return {
  //   //     counter: prevState.counter - 1,
  //   //   }
  //   // })
  //   // или короче
  //   if (this.state.counter > 0) {
  //     this.setState(prevState => ({
  //       counter: prevState.counter - 1,
  //     }));
  //   }
  // };
  // handleIncrement = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + 1,
  //   }));
  // };

  render() {
    console.log("RENDER METHOD");
    // console.log("state:", this.state.title, this.state.desc);
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <Form addNewProduct={this.addNewProduct} />
          </Modal>
        )}
        <h1>FE-35 Product</h1>
        <button type="button" onClick={this.toggleModal}>
          {" "}
          Add product
        </button>
        <ProductList
          products={this.state.allProducts}
          onDeleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}
export default App;

// const { counter, isOpen } = this.state;
// const { handleDecrement, handleIncrement } = this;
// {/* <DeleteButton isOpen={!isOpen} text={text} />
// <DeleteButton isOpen={isOpen} /> */}
// {/* <Counter
//   counter={counter}
//   handleDecrement={handleDecrement}
//   handleIncrement={handleIncrement}
// /> */}

// click => onClick
// submit => onSubmit
