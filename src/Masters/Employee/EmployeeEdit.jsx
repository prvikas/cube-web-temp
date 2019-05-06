//import RichTextInput from 'ra-input-rich-text';
import React from 'react';
import {
    AutocompleteArrayInput,
    ArrayInput,
    BooleanInput,
    CheckboxGroupInput,
    Datagrid,
    DateField,
    DateInput,
    DisabledInput,
    Edit,
    CardActions,
    CloneButton,
    ShowButton,
    EmailField,
    EditButton,
    FormTab,
    ImageField,
    ImageInput,
    LongTextInput,
    NumberInput,
    ReferenceArrayInput,
    ReferenceManyField,
    SelectInput,
    SimpleFormIterator,
    TabbedForm,
    TextField,
    TextInput,
    minValue,
    email,
    maxLength,
    number,
    required,
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import PostTitle from './EmployeeTitle';


const InlineStyle = {
    display: 'inline', float: 'left', marginRight: '20px'
};

const EditActions = ({
    basePath,
    className,
    data,
    hasShow,
    hasList,
    resource,
    ...rest
}) => (
    <CardActions className={className} {...rest}>
        <CloneButton
            className="button-clone"
            basePath={basePath}
            record={data}
        />
        {hasShow && <ShowButton basePath={basePath} record={data} />}
    </CardActions>
);

const EmployeeEdit = props => (
    <Edit title={<PostTitle />} actions={<EditActions />} {...props}>
        <TabbedForm>
            <FormTab label="Employee.form.personal">
                <DisabledInput source="empNo" />
                <TextInput source="name" validate={[required(), maxLength(50)]} resettable style={InlineStyle}/>
                <TextInput style={InlineStyle}
                    source="fatherName"
                    validate={[required(), maxLength(50)]}
                    resettable
                />
                 <DateInput source="dateOfBirth" validate={[required(), minValue('01/01/1956')]} options={{ locale: 'in' }} />
                 <TextInput source="email"   resettable style={InlineStyle}/>
                 <TextInput source="phone1" validate={[required()]} resettable style={InlineStyle} />

                     <TextInput source="phone2"  resettable style={InlineStyle} />

                 <LongTextInput source="address1" options={{ multiLine: true }} validate={[required()]} resettable style={InlineStyle} />
                 <LongTextInput source="address2" options={{ multiLine: true }}  resettable />
                {/* <CheckboxGroupInput
                    source="notifications"
                    choices={[
                        { id: 12, name: 'Ray Hakt' },
                        { id: 31, name: 'Ann Gullar' },
                        { id: 42, name: 'Sean Phonee' },
                    ]}
                />
                <ImageInput multiple source="pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput> */}
            </FormTab>
            <FormTab name="employment" label="employee.form.employment">
                {/* <RichTextInput
                    source="body"
                    label=""
                    validate={required()}
                    addLabel={false}
                /> */}
  
                 {/* <TextInput source="name" validate={required()} resettable />
                <TextInput
                    source="fatherName"
                    validate={required()}
                    resettable
                /> */}
                 <DateInput source="dateOfJoining" validate={required()} options={{ locale: 'in' }} />
                 {/* <ReferenceInput label="Vendor" source="vendorId" reference="vendor"
                 filter={{active:true}}
                 perPage={null}
                    onchange={() => rest.dispatch(change("employment", "subVendorId", "" ))}
                 >
                    <SelectInput optionText="title" optionValue="Id" />
                </ReferenceInput>

                <ReferenceInput label="Sub Vendor" source="subVendorId" reference="subVendor"
                 filter={{active:true, parentId: vendorId}}
                 perPage={null}
                  {...rest}
                 >
                    <SelectInput optionText="title" optionValue="Id" />
                </ReferenceInput> */}

                 <SelectInput label="Location" style={InlineStyle}
                    resettable validate={[required()]}
                    source="subLocationId"
                    choices={[
                        { name: 'JIT', id: '0' },
                        { name: 'Kandlakoi', id: '1' },
                    ]}
                />
                <SelectInput label="Vendor"
                    resettable validate={[required()]}
                    source="vendorId"
                    choices={[
                        { name: 'Vinod', id: '0' },
                        { name: 'BRS', id: '1' },
                    ]}
                />
                  <SelectInput label="Sub Vendor" style={InlineStyle}
                    resettable 
                    source="subVendorId"
                    choices={[
                        { name: 'Tech', id: 'tech' },
                        { name: 'Lifestyle', id: 'lifestyle' },
                    ]}
                />        
                 <SelectInput label="Accomodation type"
                    resettable validate={[required()]}
                    source="accomodationType"
                    choices={[
                        { name: 'Self', id: '0' },
                        { name: 'Provided', id: '1' },
                    ]}
                />                
           
            </FormTab>
            <FormTab label="employee.form.accountDetail">
    <TextInput source="esi" label="ESI Number" validate={[required()]} resettable style={InlineStyle} />
    <TextInput source="pan" validate={[required()]} resettable style={InlineStyle} />
    <TextInput source="aadhaar" validate={[required()]} resettable style={InlineStyle}/>
    <TextInput source="uanNumber" validate={[required()]} resettable style={InlineStyle} />
    <TextInput source="uanpwd" validate={[required()]} resettable  style={InlineStyle}/>
    <DateInput source="uanActiveDate" validate={required()} options={{ locale: 'in' }}  style={InlineStyle}/>
    <TextInput source="bankAccNo" validate={[required()]} resettable style={InlineStyle} />
    <TextInput source="bankName" validate={[required()]} resettable style={InlineStyle} />
    <TextInput source="bankIFSC" validate={[required()]} resettable />
            </FormTab>
            <FormTab label="employee.form.comments">
            <LongTextInput source="remarks1" resettable  options={{ multiLine: true }} />
                 <LongTextInput source="remarks2"  resettable  options={{ multiLine: true }}/>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default EmployeeEdit;
