import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [address, setAddress] = useState(theEmployee.address);
  const [phone, setPhone] = useState(theEmployee.phone);

  const { updateEmployee } = useContext(EmployeeContext);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
    console.log("Employee " + theEmployee.name + "is edited");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        Name
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        Email
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        Address
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      Phone
      <Form.Group>
        <Form.Control
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
