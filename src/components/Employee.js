import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useState } from "react";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee, employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button
          href="#editEmployeeModal"
          className="btn text-warning btn-act"
          data-toggle="modal"
          onClick={handleShow}
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          href="#deleteEmployeeModal"
          className="btn text-danger btn-act"
          data-toggle="modal"
          onClick={() => {
            const deletedEmployee = employees.find((e) => e.id === employee.id);
            deleteEmployee(employee.id);
            console.log(`User ${deletedEmployee.name} is deleted`);
          }}
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
