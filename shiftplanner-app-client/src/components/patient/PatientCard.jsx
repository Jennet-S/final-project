import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditPatientForm from './EditPatientForm';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const PatientCard = ({
    patient,
    onDeletePatient,
    onUpdatePatient,
    onEditPatient,
    onCancelEdit,
    isEditing,
}) => {
    const handleDelete = () => {
        onDeletePatient(patient._id);
    };

    const handleEdit = () => {
        onEditPatient(patient._id);
    };

    const handleCancel = () => {
        onCancelEdit();
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      {patient.room}
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={`${patient.lastName} ${patient.firstName}`}
  subheader={patient.nhi}
/>
            <CardContent>
                {isEditing ? (
                    <div>
                        <EditPatientForm patient={patient} onUpdatePatient={onUpdatePatient} />
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                ) : (
                    <div>

                        {/* <p>Rm: {patient.room} | NHI: {patient.nhi}</p> */}
                        <h2>{patient.lastName}, {patient.firstName} {patient.age} yr</h2>
                        <p>Dx: {patient.diagnosis}</p>
                        <p>MHx: {patient.history}</p>
                        <p>Resus: {patient.resus}</p>
                    </div>
                )}
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleEdit}>Edit</button>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PatientCard;
