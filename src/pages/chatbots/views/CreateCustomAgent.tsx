import { useContext, useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router";
import ButtonComponent from "../components/button.component";
import { STYLE_PRIMARY_RGBA_PRODUCT } from "../../../config/colors.config";
import Section from "../components/Section.component";
import { useAuth } from "../../../providers/Auth.provider";
import { Formik } from "formik";
import * as yup from 'yup';
import axios from "axios";
import { BotCreateDTO } from "../types/Bot.type";

const schema = yup.object().shape({
    name: yup.string().required('No name provided.'),
    description: yup.string().required('No description provided.'),
    languages: yup.string().required("No language selected"),
    data: yup.string().required('No data provided.') 
  });

const ImgUpload =({
    onChange,
    src
  }: any)=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <Image src={src} rounded width={100} height={100}/>
      </div>
      <Form.Control id="photo-upload" type="file" onChange={onChange}/> 
    </label>

function CreateCustomAgent() {
    const [image, setImage] = useState<any>({
        file: "",
        imagePreviewUrl: "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
    });
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = async (values: any) => {
        try {
            const jsonData: BotCreateDTO = {
                name: values.name,
                description: values.description,
                data: values.data,
                languages: [values.languages],
                image_url: "NO_IMAGE",
                background_image_url: "NO_IMAGE",
                isOnline: true
            }
            const { data } = await axios.post(process.env.REACT_APP_HOST + "/bot", jsonData, {
                headers: {
                    Authorization: "Bearer " +  auth.user.access_token
                }
            })
           
            if(data.status === 200) {
                navigate('/chatlink/agents')
                return;
            }
           
            throw data.message;
        } catch (error) {
            alert(error)
        }
    };

    const photoUpload = (e: any) =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setImage({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
      }

    return(
        <Container>

            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
                <h1 style={{ textAlign: "left" }}>Create a bot</h1>
                <ButtonComponent text={"Create"} style={{...STYLE_PRIMARY_RGBA_PRODUCT}} onClick={() => {}} />
            </div>
            <Section style={{ paddingTop: 50 }}>
                {
                    (auth.config.package === "pro" || auth.config.package === "enterprice") ?
                    <>
                                    
                            <ImgUpload onChange={photoUpload} src={image.imagePreviewUrl}/>
                    </>
                    : null
                }
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                    name: '',
                    description: '',
                    languages: '',
                    data: ''
                }}
                >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Name" 
                            value={values.name}
                            isValid={touched.name && !errors.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        placeholder="Description" 
                        as="textarea" 
                        rows={3}
                        value={values.description}
                        isValid={touched.description && !errors.description}
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="languages">
                    <Form.Label>Language</Form.Label>
                        <Form.Select 
                            aria-label="select language"
                            isValid={touched.languages && !errors.languages} 
                            value={values.languages}
                            onChange={handleChange}
                        >
                            <option>Select the language</option>
                            <option value="EN">EN</option>
                            <option value="IT">IT</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data</Form.Label>
                    <Form.Control
                        placeholder="Data" 
                        value={values.data}
                        isValid={touched.data && !errors.data}
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button type="submit" style={{ width: "100%", marginTop: 50 }}>Create</Button>
                    </Form.Group>
                </Form>
                )}
                </Formik>
            </Section>
        </Container>
    );
}

export default CreateCustomAgent;