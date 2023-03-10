import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, email, address, phone } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    addEmployee(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        Name
        <Form.Control
          type="text"
          name="name"
          required
          onChange={(e) => onInputChange(e)}
          value={name}
        />
      </Form.Group>
      <Form.Group>
        Email
        <Form.Control
          type="email"
          name="email"
          required
          onChange={(e) => onInputChange(e)}
          value={email}
        />
      </Form.Group>
      <Form.Group>
        Address
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          onChange={(e) => onInputChange(e)}
          value={address}
        />
      </Form.Group>
      Phone
      <Form.Group>
        <Form.Control
          type="text"
          name="phone"
          onChange={(e) => onInputChange(e)}
          value={phone}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
