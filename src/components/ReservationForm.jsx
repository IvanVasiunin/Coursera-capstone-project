import {useEffect, useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import {
  LiaUserCircle,
  LiaUserFriendsSolid,
  LiaPhoneSolid,
  LiaGlassCheersSolid,
  LiaCommentDots,
  LiaCheckCircle,
  LiaCalendarAltSolid
 } from "react-icons/lia";
import * as Yup from 'yup';

const ReservationForm = () => {

    const phoneRegExp = /^((\+[1-9]{1,4}[\s\-]*)|(\([0-9]{2,3}\)[\s\-]*)|([0-9]{2,4})[\s\-]*)*?[0-9]{3,4}?[\s\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          type: 'Other',
          dateTime: '',
          numPersons: 0,
          comment: '',
        },
        onSubmit: async (values) => {
          console.log(values)
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Name is required'),
          phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
          type: Yup.string(),
          dateTime: Yup.date('Please enter the correct date and time')
            .required('Date and Time is required')
            .min(new Date(), 'Date and Time cannot be in the past')
            .max(
                new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
                'Date and Time cannot be more than a month in the future'
            )
            .test('time', 'Time must be between 10:00 and 22:00', (value) => {
                const selectedTime = new Date(value).getHours();
                return selectedTime >= 10 && selectedTime <= 21;
            }),
          numPersons:Yup.number()
            .min(1, 'Number of guests must be greater than 0')
            .max(20, 'Number of guests must be 20 or less')
            .required('Number of guests is required'),
          comment: Yup.string().max(2000, 'Maximum number of characters 2000'),
        }),
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaUserCircle}/>
                    </InputLeftElement>
                    <Input
                        id="name"
                        name="name"
                        {...formik.getFieldProps('name')}
                    />
                    <InputRightElement display={formik.errors.name && formik.touched.name ? 'none' : formik.touched.name ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.phone && formik.touched.phone} isRequired>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaPhoneSolid}/>
                    </InputLeftElement>
                    <Input
                        id="phone"
                        name="phone"
                        {...formik.getFieldProps('phone')}
                    />
                    <InputRightElement display={formik.errors.phone && formik.touched.phone ? 'none' : formik.touched.phone ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaGlassCheersSolid}/>
                    </InputLeftElement>
                    <Select
                        placeholder='Select occasion'
                        id="type"
                        name="type"
                        >
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Aniversary">Aniversary</option>
                        <option value="Other">Other</option>
                    </Select>
                </InputGroup>
            </FormControl>
            <FormControl isInvalid={formik.errors.numPersons && formik.touched.numPersons} isRequired>
                <FormLabel htmlFor="numPersons">Number of guests (1-20)</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaUserFriendsSolid}/>
                    </InputLeftElement>
                    <Input
                        type="number"
                        id="numPersons"
                        name="numPersons"
                        {...formik.getFieldProps('numPersons')}
                        >
                    </Input>
                    <InputRightElement display={formik.errors.numPersons && formik.touched.numPersons ? 'none' : formik.touched.numPersons ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.numPersons}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.dateTime && formik.touched.dateTime} isRequired>
                <FormLabel htmlFor="dateTime">Date and time of visit</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaCalendarAltSolid}/>
                    </InputLeftElement>
                    <Input
                        paddingRight={formik.errors.dateTime && formik.touched.dateTime ? '9px' : formik.touched.dateTime ? '32px' : '9px'}
                        placeholder="Select Date and Time"
                        type="datetime-local"
                        id="dateTime"
                        name="dateTime"
                        {...formik.getFieldProps('dateTime')}
                    />
                    <InputRightElement display={formik.errors.dateTime && formik.touched.dateTime ? 'none' : formik.touched.dateTime ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.dateTime}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaCommentDots}/>
                    </InputLeftElement>
                    <Textarea
                        id="comment"
                        name="comment"
                        {...formik.getFieldProps('comment')}
                        placeholder='Specify additional wishes here'
                        resize={'none'}
                    />
                </InputGroup>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button type="submit" width="full">
                Submit
            </Button>
        </form>
    );
}

export default ReservationForm;