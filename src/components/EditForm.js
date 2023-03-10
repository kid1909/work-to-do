import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  return (
    <Form>
      <Form.Group>
        Name
        <Form.Control type="text" name="name" required />
      </Form.Group>
      <Form.Group>
        Email
        <Form.Control type="email" name="email" required />
      </Form.Group>
      <Form.Group>
        Address
        <Form.Control as="textarea" rows={3} name="address" />
      </Form.Group>
      Phone
      <Form.Group>
        <Form.Control type="text" name="phone" />
      </Form.Group>
      <Button variant="success" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
