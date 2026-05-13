import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card
} from "react-bootstrap";

const Register = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await axios.post(
        "http://127.0.0.1:5000/api/auth/register",
        {
          username: data.username,
          email: data.email,
          password: data.password
        }
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Row>
        <Col>

          <Card
            style={{ width: "24rem" }}
            className="shadow"
          >

            <Card.Body>

              <h3 className="text-center mb-4">
                Register
              </h3>

              <Form onSubmit={handleSubmit(onSubmit)}>

                {/* Username */}
                <Form.Group className="mb-3">

                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter username"

                    {...register("username", {
                      required: "Username required"
                    })}
                  />

                  <p className="text-danger">
                    {errors.username?.message}
                  </p>

                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">

                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="Enter email"

                    {...register("email", {
                      required: "Email required"
                    })}
                  />

                  <p className="text-danger">
                    {errors.email?.message}
                  </p>

                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">

                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter password"

                    {...register("password", {
                      required: "Password required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters"
                      }
                    })}
                  />

                  <p className="text-danger">
                    {errors.password?.message}
                  </p>

                </Form.Group>

                <Button type="submit" className="w-100">
                  Register
                </Button>

              </Form>

              <div className="text-center mt-3">

                Already have account?

                <Link to="/login">
                  Login
                </Link>

              </div>

            </Card.Body>

          </Card>

        </Col>
      </Row>

    </Container>

  );
};

export default Register;