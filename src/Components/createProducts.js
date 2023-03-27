import React from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CreateProduct = () => {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      product: '',
      model: '',
      price: '',
      unit: ''
    },
    validationSchema: Yup.object({
      product: Yup.string().required('Enter the product name'),
      model: Yup.string().required('Enter the product model'),
      price: Yup.string().required('Enter the product price'),
      unit: Yup.number().required('Enter the product unit')
    }),
    onSubmit: values => {
      postProduct(values)
      console.log('Values data:', values)
    }
  })

  const postProduct = async value => {
    let response = await axios.post(
      'https://63be5b31e348cb07620d2464.mockapi.io/products',
      value
    )
    if (response.status === 201) {
      navigate('/all')
    }
  }

  return (
    <>
      <div>
        <p className='lead text-center pt-2' style={{ fontSize: '30px' }}>
          Create Products
        </p>
      </div>
      <Form className='container form' onSubmit={formik.handleSubmit}>
        <Form.Group className='mb-3 col-md-6'>
          <input
            style={{ padding: '20px'}}
            id='product'
            name='product'
            type='text'
            className='form-control'
            placeholder='Product Name'
            onChange={formik.handleChange}
            value={formik.values.product}
          />
          {formik.touched.product && formik.errors.product ? (
            <div style={{ color: 'red' }}>{formik.errors.product}</div>
          ) : null}
        </Form.Group>

        <Form.Group className='mb-3 col-md-6'>
          <input
            style={{ padding: '20px' }}
            id='model'
            name='model'
            type='text'
            className='form-control'
            placeholder='Product Model'
            onChange={formik.handleChange}
            value={formik.values.model}
          />
          {formik.touched.model && formik.errors.model ? (
            <div style={{ color: 'red' }}>{formik.errors.model}</div>
          ) : null}
        </Form.Group>

        <Form.Group className='mb-3 col-md-6'>
          <input
            style={{ padding: '20px' }}
            id='unit'
            name='unit'
            type='number'
            className='form-control'
            placeholder='Product Quantity'
            onChange={formik.handleChange}
            value={formik.values.unit}
          />
          {formik.touched.unit && formik.errors.unit ? (
            <div style={{ color: 'red' }}>{formik.errors.unit}</div>
          ) : null}
        </Form.Group>

        <Form.Group className='mb-3 col-md-6'>
          <input
            style={{ padding: '20px' }}
            id='price'
            name='price'
            type='text'
            className='form-control'
            placeholder='Product Price'
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div style={{ color: 'red' }}>{formik.errors.price}</div>
          ) : null}
        </Form.Group>

        <Button
          className='mb-3 col-md-6'
          variant='primary'
          type='submit'
          style={{ padding: '10px' }}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CreateProduct
