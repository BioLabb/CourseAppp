import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

function Sign() {
  // -------------------set useState------------------------
  const [userInfo, setUserInfo] = useState({});
  const [validated, setValidated] = useState(false);
  const [errors,setErrors] = useState({});
  // -------------------------------------------

  // handle value iniput
  const onInputChange = (e) => {
    let objInput = { [e.target.name]: e.target.value };
    setUserInfo({
      ...userInfo,
      ...objInput,
    });
  };

  // handle sumbmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    console.log(userInfo);
  };

  // check confirm password equal passowrd
  // return boolean
  const confirmPassword = (e) => {
    let password = userInfo.password;
    let confirm = userInfo.confirmPassword;
    return password === confirm;
  };

  // check is password, from 8 to 16 char
  // return boolean
  const validatePassword = (password) =>{
    let charMin = 8;
    let charMax= 16
    if(password >= charMin && password <= charMax){
      let txtErr = `Mật khẩu từ ${charMin} đến ${charMax} ký tự`;
      setErrors({
        ...errors,...{password:txtErr}
      });
      return true;
    }
    return false;
  }
  return (
    <Container fluid className="">
      <Row className="col-3 m-auto pt-5">
        <Form
          className="p-5 m-auto border shadow-sm p-3 mb-5 bg-white rounded "
          onSubmit={handleSubmit}
          validated={validated}
        >
          <h3>Đăng ký</h3>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="md-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={onInputChange}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="confirmPassword"
              onChange={onInputChange}
              isInvalid={!confirmPassword()}
            />
            <Form.Control.Feedback type="invalid">Mật khẩu không khớp</Form.Control.Feedback>
          </Form.Group>
          <Button className="w-100 mt-3" type="submit">
            Đăng ký
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Sign;
