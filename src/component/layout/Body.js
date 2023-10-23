import { Col, Container, Row } from "react-bootstrap";
import CardSubject from "../CardSubject";
import Fillter from "./Fillter";
import { useState } from "react";

function Body() {
  // state courses
  const initCourses = [
    {
      id: 1,
      name: "HTLM CSS",
      description:
        "Thành thạo các kỹ thuật xây dựng website căn bản với HTML, CSS, có đủ tư duy và kiến thức để thiết kế các trang web hiện đại, đẹp mắt và khả năng tương tác cao",
      img: "https://resources.iostream.vn/content/article/html-phan-1-co-ban-ve-html/thumbnail-hd/blob-1598602790106@960x540.jpg",
    },
    {
      id: 2,
      name: "Reactjs",
      description:
        "ReactJS là một opensource được phát triển bởi Facebook, ra mắt vào năm 2013, bản thân nó là một thư viện Javascript được dùng để để xây dựng các tương tác với các thành phần trên website. Trong khóa học này tại BKACAD, bạn sẽ được làm quen và đi sâu với 30h cho phần ReactJS",
      img: "https://d50cmv7hkyx4e.cloudfront.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png",
    },
    {
      id: 3,
      name: "Andorid Cơ bản",
      description:
        "Tạo một loạt ứng dụng trong Kotlin bằng Khung hiển thị, đây là bộ công cụ giao diện người dùng cũ trên Android. Đây là khoá học cũ hơn khoá học Compose. Vì vậy, bạn chỉ nên sử dụng khoá học này nếu muốn tìm hiểu cụ thể cách tạo giao diện người dùng bằng Khung hiển thị.",
      img: "https://static.ybox.vn/2022/2/5/1643980378686-2%20(2).png",
    },
  ];
  const [courses, setCourses] = useState(initCourses);

  return (
    <Container fluid>
      <Row>
        <Col className="col-2">
          <Fillter />
        </Col>
        <Col>
          <div>
            <p>Kết quả: {courses.length}</p>
          </div>
          <div className="d-flex ">
            {courses.map((course) => (
              <CardSubject
                key={course.id}
                name={course.name}
                description={course.description}
                img={course.img}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
