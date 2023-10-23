import { Button, Col, Container, Row } from "react-bootstrap";
import { Apicourse } from "../../fakeApi/course";
import { useState } from "react";
import Section from "../Section";
function Course() {
  const initCourses = Apicourse[0];
  const [course, setCourse] = useState(initCourses);
  const sections = course.section;
  return (
    <Container fluid className="">
      <Row className="background-gray">
        <Col className="col-8 text-text-white  ">
          <div className="w-75 text-color-white p-2 pt-5">
            <h4 className="text-color-inherit">{course.name}</h4>
            <p>{course.description}</p>
            {/* user name */}
            <div className="d-flex">
              <img
                className="d-block w-3 h-3 me-1 "
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png"
              />
              <p className="d-block m-0">Được tạo bởi: {course.user.name}</p>
            </div>
            {/* date upload */}
            <div className="d-flex">
              <img
                className="d-block w-3 h-3 me-1 "
                src="https://img.icons8.com/badges/48/new.png"
              />
              <p className="m-0">Ngày đăng: {course.dateUpload}</p>
            </div>
            {/* language */}
            <div className="d-flex">
              <img
                className="d-block w-3 h-3 me-1 "
                src="https://img.icons8.com/cute-clipart/64/language.png"
              />
              <p>Ngôn ngữ: {course.language}</p>
            </div>
          </div>
        </Col>
        <Col className="col-3 p-2">
          {/* image */}
          <div className="p-2  bg-white rounded">
            <img className="w-100 rounded" src={course.img}></img>
            <div className="w-90 m-auto">
              <h3 className="">FREE</h3>
              <Button className="w-100 m-auto">Đăng ký </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-auto pb-5 ">
        <Col>
          {/* unit of courses */}
          <div>
            <h4>Nội dung khoá học</h4>
            {sections.map((section) => (
              <Section
                key={section.id}
                title={section.title}
                numberSection={section.id}
                units={section.unit}
              />
            ))}
          </div>
        </Col>
      </Row>
      {/* comment */}
      <Row>
        <Col className="col-7">
          <div className="border-top pt-4">
            <div className="p-4 ps-0 pe-0">
              <h6>0 bình luận</h6>
            </div>
            <div className="pb-5">
              <textarea
                className="w-100 text-area-resize-none border"
                placeholder="Viết bình luận vào đây"
                cols="40"
              ></textarea>
              <button className=" p-1 ps-3 pe-3 background-blue border-none rounded text-color-white">
                Đăng
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Course;
