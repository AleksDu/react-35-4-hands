import { Component } from "react";
import { v4 as uuid } from "uuid";

export class Form extends Component {
  propIdTitle = uuid();
  prodIdDescription = uuid();
  prodIdAgreed = uuid();
  prodIdSize = uuid();

  state = {
    title: "",
    desc: "",
    product: "null",
    agreed: "false",
    size: "",
  };

  handleCheck = (e) => {
    const { name, checked } = e.target;
    const { agreed } = this.state;
    console.log("name:", name);
    // console.log('value:', e.target.value)
    console.log("checked:", checked);
    this.setState({
      agreed: !agreed,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name, e.te.target.valuearget.value)
    this.setState({ [name]: value });
  };

  handleChangeAllInputs = (e) => {
    const { name, type, checked, value } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    const { title, desc, size } = this.state;

    this.state.e.preventDefault();
    const product = {
      title: title,
      desc: desc,
      size: size,
    };
    this.setState({ product });
    this.props.addNewProduct(product);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ ...this.state });
  };
  render() {
    const { title, desc, size, agreed } = this.state;
    const {
      handleSubmit,
      propIdTitle,
      prodIdSize,
      prodIdDescription,
      handleChangeAllInputs,
      prodIdAgreed,
      handleCheck,
    } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={propIdTitle}>Title</label>
        <input
          id={propIdTitle}
          name="title"
          value={title}
          type="text"
          onChange={handleChangeAllInputs}
        />
        <br />
        <label htmlFor={prodIdDescription}>Description</label>
        <input
          id={prodIdDescription}
          name="desc"
          value={desc}
          type="text"
          onChange={handleChangeAllInputs}
        />

        <br />
        <label htmlFor={prodIdSize}>Choose you size</label>
        <select
          name="size"
          value={size}
          onChange={handleChangeAllInputs}
          id={prodIdSize}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="m">m</option>
          <option value="s">s</option>
          <option value="l">l</option>
        </select>
        <br />
        <label htmlFor={prodIdAgreed}>Agree?</label>
        <input
          type="checkbox"
          name="agreed"
          id={prodIdAgreed}
          checked={agreed}
          onChange={handleChangeAllInputs}
        />

        <button type="submit" disabled={!agreed}>
          add
        </button>
      </form>
    );
  }
}
