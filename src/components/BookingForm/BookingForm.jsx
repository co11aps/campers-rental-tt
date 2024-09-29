import css from './BookingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

const BookingForm = () => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    date: Yup.date().required('Date is required'),
    commentArea: Yup.string().max(256, 'Comment cannot exceed 256 characters'),
  });

  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    toast.success('Form submitted successfully!');
    resetForm();
  };

  return (
    <div className={css.bookingForm}>
      <h2 className={css.pageTitle}>Book your campervan now</h2>
      <p className={css.pageSubTitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          userName: '',
          email: '',
          date: null,
          commentArea: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className={css.formGroup}>
              <Field
                className={css.input}
                type="text"
                name="userName"
                id={nameFieldId}
                placeholder="Name*"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <DatePicker
                className={css.input}
                name="date"
                id={dateFieldId}
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                selected={values.date}
                onChange={date => setFieldValue('date', date)}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <div className={css.passwordWrapper}>
                <Field
                  className={css.commentArea}
                  as="textarea"
                  cols="20"
                  rows="5"
                  name="commentArea"
                  id={commentFieldId}
                  placeholder="Comment"
                />
              </div>
              <ErrorMessage
                name="commentArea"
                component="div"
                className={css.error}
              />
            </div>

            <button
              className={css.button}
              type="submit"
              aria-label="Submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
