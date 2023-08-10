import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewTab: 0,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        label: "",
        category: "",
        description: "",
        start_date: "",
        end_date: "",
        completed: false,
        archived: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "",
    label: "",
    category: "",
    description: "",
    start_date: "",
    end_date: "",
    completed: false,
    archived: false, };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayTab = (status) => {
    if (status) {
      return this.setState({ viewTab: status });
    }
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayTab(1)}
          className={this.state.viewTab === 1 ? "nav-link active" : "nav-link"}
        >
          Incomplete
        </span>
        <span
          onClick={() => this.displayTab(2)}
          className={this.state.viewTab === 2 ? "nav-link active" : "nav-link"}
        >
          Complete
        </span>
        <span
          onClick={() => this.displayTab(3)}
          className={this.state.viewTab === 3 ? "nav-link active" : "nav-link"}
        >
          Archived
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewTab } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => {
        switch (viewTab) {
          case 1:
            return( item.completed === false && item.archived === false )
          case 2:
            return( item.completed === true )
          case 3:
            return( item.archived === true )
          default:
            return( item.completed === false && item.archived === false )
        }
      }
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={"todo-title mr-2" + (item.completed ? " completed" : "")}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;