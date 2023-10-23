import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Checkbox from "../Checbox";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container fluid className="">
      <Row className="col-3 m-auto mt-5 ">
        {/* form input for login */}
        <Col>
          <Form className="align-self-center p-5 border shadow-sm p-3 mb-5 bg-white rounded">
            <h4 className="text-uppercase">Đăng nhập</h4>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control required type="text" placeholder="Tên đăng nhập" />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                className="w-100"
                required
                type="password"
                placeholder="mật khẩu"
              />
            </Form.Group>
            {/*  show password*/}
            <Checkbox className="align-self-end" name="Show password" />
            {/* button send request to sever */}
            <Button className="w-100 mt-2" type="submit">
              Đăng nhập
            </Button>
            <Link className="text-decoration-none d-block w-100 m-auto" to="/signup">
              Đăng ký
            </Link>
          </Form>
        </Col>

        {/* move to page sigin */}
      </Row>
    </Container>
  );
}

export default Login;
