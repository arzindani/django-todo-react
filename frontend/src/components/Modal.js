import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Todo Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="label">Label</Label>
              <Input
                type="text"
                name="label"
                value={this.state.activeItem.label}
                onChange={this.handleChange}
                placeholder="Enter Todo label"
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="text"
                name="category"
                value={this.state.activeItem.category}
                onChange={this.handleChange}
                placeholder="Enter Todo category"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="start_date">Start Date</Label>
              <Input
                type="date"
                name="start_date"
                value={this.state.activeItem.start_date}
                onChange={this.handleChange}
                placeholder="Enter Todo start_date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="end_date">End Date</Label>
              <Input
                type="date"
                name="end_date"
                value={this.state.activeItem.end_date}
                onChange={this.handleChange}
                placeholder="Enter Todo end_date"
              />
            </FormGroup>
            <FormGroup check>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="archived">
                <Input
                  type="checkbox"
                  name="archived"
                  checked={this.state.activeItem.archived}
                  onChange={this.handleChange}
                />
                Archived
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}