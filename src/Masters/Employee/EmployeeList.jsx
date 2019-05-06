import PeopleIcon from '@material-ui/icons/People';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import React, { Children, Fragment, cloneElement } from 'react';
import {
    BooleanField,
    BulkDeleteButton,
    ChipField,
    Datagrid,
    DateField,
    EditButton,
    Filter,
    List,
    NumberField,
    ReferenceArrayField,
    Responsive,
    SearchInput,
    ShowButton,
    SimpleList,
    SingleFieldList,
    TextField,
    TextInput,
    translate,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

//import ResetViewsButton from './ResetViewsButton';
export const EmployeeIcon = PeopleIcon;

const QuickFilter = translate(({ label, translate }) => (
    <Chip style={{ marginBottom: 8 }} label={translate(label)} />
));

const EmployeeFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <TextInput
            source="name"
            defaultValue="Employee name"
        />
        <QuickFilter
            label="resources.employee.fields.fatherName"
            source="fatherName"
            defaultValue
        />
    </Filter>
);

const styles = theme => ({
    title: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    publishedAt: { fontStyle: 'italic' },
});

const EmployeeListBulkActions = props => (
    <Fragment>
        {/* <ResetViewsButton {...props} />*/}
        <BulkDeleteButton {...props} /> 
    </Fragment>
);

const EmployeeListActionToolbar = withStyles({
    toolbar: {
        alignItems: 'center',
        display: 'flex',
    },
})(({ classes, children, ...props }) => (
    <div className={classes.toolbar}>
        {Children.map(children, button => cloneElement(button, props))}
    </div>
));

const rowClick = (id, basePath, record) => {
    // if (record.commentable) {
    //     return 'edit';
    // }

    // return 'show';
};

const EmployeePanel = ({ id, record, resource }) => (
  
    <div dangerouslySetInnerHTML={{ __html: record }} />
);

const EmployeeList = withStyles(styles)(({ classes, ...props }) => (
    <List
        {...props}
        bulkActionButtons={<EmployeeListBulkActions />}
        filters={<EmployeeFilter />}
       // sort={{ field: 'published_at', order: 'DESC' }}
    >
        <Responsive
            // small={
            //     <SimpleList
            //         primaryText={record => record.title}
            //         secondaryText={record => `${record.views} views`}
            //         tertiaryText={record =>
            //             new Date(record.published_at).toLocaleDateString()
            //         }
            //     />
            // }
            medium={
                <Datagrid rowClick={rowClick} expand={<EmployeePanel />}>
                    <TextField source="empNo" />
                    <TextField source="name" cellClassName={classes.title} />
                    <DateField
                        source="dateOfBirth"
                        cellClassName={classes.publishedAt}
                    />
                     <TextField source="fatherName" />
                     <TextField source="vendorId" />
                     <TextField source="subVendorId" />
                    {/* <BooleanField
                        source="commentable"
                        label="resources.posts.fields.commentable_short"
                        sortable={false}
                    /> */}
                    {/* <NumberField source="views" /> */}
                    {/* <ReferenceArrayField
                        label="Tags"
                        reference="tags"
                        source="tags"
                        sortBy="tags.name"
                        cellClassName={classes.hiddenOnSmallScreens}
                        headerClassName={classes.hiddenOnSmallScreens}
                    > */}
                        {/* <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ReferenceArrayField> */}
                    <EmployeeListActionToolbar>
                        <EditButton />
                        <ShowButton />
                    </EmployeeListActionToolbar>
                </Datagrid>
            }
        />
    </List>
));

export default EmployeeList;