import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { bookTourist } from "../services/Service";

const BookingForm = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const dest = location.state?.destination || "Destination";

  // Validation schema using Yup
  const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  people: Yup.number()
    .typeError("Must be a number")
    .min(1, "Must be at least 1")
    .required("Number of people is required"),
  date: Yup.date()
    .min(new Date(), "Date cannot be in the past")
    .required("Date is required"),
});


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Reservation Form</h2>

        <Formik
          initialValues={{
            name: "",
            place: dest,
            number: "",
            people: "",
            date: "",
          }}
          validationSchema={validationSchema}
         onSubmit={async (values, { resetForm }) => {
            console.log(values)
  const payLoad = {
    userName: values.name,
    place: values.place,
    phoneNumber: values.number,
    people: values.people,
    date: values.date,
  }
  console.log(payLoad)

  try {
    const res = await bookTourist(payLoad);
    navigate("/")
    console.log("Booking successful:", res);
    toast("Booking submitted successfully!");
    resetForm();
  } catch (err) {
    console.error("Booking failed:", err);
    toast("Failed to submit booking. Please try again.");
  }
}}

        >
          <Form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Place</label>
              <Field
                name="place"
                type="text"
                value={dest}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <Field
                name="number"
                type="tel"
                placeholder="1234567890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="number" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">No. of People</label>
              <Field
                name="people"
                type="number"
                min="1"
                placeholder="Number of guests"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="people" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Date</label>
              <Field
                name="date"
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
