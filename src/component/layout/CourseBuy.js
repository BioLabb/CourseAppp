import { Container, Row, Col } from "react-bootstrap";
import { Apicourse } from "../../fakeApi/course";
import { useState } from "react";
import CardSubject from "../CardSubject";

function CourseBuy() {
  const initCourses = Apicourse;
  const [courses, setCourses] = useState(initCourses);

  return (
    <Container className="m-0 p-4">
        <h5 className="pb-3">CÁC KHOÁ HỌC ĐÃ ĐĂNG KÝ</h5>
      <Row>
        <Col className="">
          <div className="h-35px">
            <input className="border h-100" />
            <button className=" h-100 background-blue text-color-white border-none">
              Tìm kiếm
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex pt-3">
            {courses.map((course) => (
              <CardSubject
                key={course.id}
                description={course.description}
                name={course.name}
                img={course.img}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseBuy;
