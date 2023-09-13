import { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm({ onEditGame }) {

  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/update-student/" +
		props.match.params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

          return (  <div>hello</div>);
}

export default UpdateGameForm;



//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/update-student/" +
		props.match.params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/students/update-student/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, email, rollno } = res.data;
		setFormValues({ name, email, rollno });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
